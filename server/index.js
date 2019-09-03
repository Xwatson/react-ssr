import express from 'express'
import React from 'react'
import { StaticRouter, Route, Link } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { matchRoutes } from 'react-router-config'

import Header from '../component/header'
import routes from '../routes'
import getStore from '../store'
const app = express()
const store = getStore()

app.use(express.static('public'))

app.get('*', (req, res) => {
    // 仿照next.js，组价有load静态方法，就在server端获取数据直接渲染
    const matchRet = matchRoutes(routes, req.path)
    const retPromise = []
    matchRet.forEach(item => {
        const { load } = item.route.component
        if (load) {
            const promise = new Promise((resolve, reject) => {
                load(store).then(resolve).catch(reject)
            })
            retPromise.push(promise)
        }
    })
    Promise.all(retPromise).then(() => {
        // 获取store已经存在数据，赋值全局变量window._context上解决客户端与服务端store数据统一
        let context = store.getState()
        const content = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    <Header />
                    {routes.map(route => <Route {...route}  />)}
                </StaticRouter>
            </Provider>
        )
        res.send(`
            <html>
                <head>
                    <title>react ssr</title>
                </head>
                <body>
                    <div id="root">${content}</div>
                    <script>
                        window._context = ${JSON.stringify(context)}
                    </script>
                    <script src="/main.js"></script>
                </body>
            </html>
        `)
    })
    
})

app.listen(3001, () => {
    console.log('服务端启动成功：', 3001)
})