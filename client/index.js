import React from 'react'
import ReactDom from 'react-dom'
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from '../component/header'
import routes from '../routes'
import store from '../store'

const App = () => {
    return (
        <div>
            <Provider store={store(window._context)}>
                <BrowserRouter >
                    <Header />
                   {routes.map(route => <Route {...route}  />)}
                </BrowserRouter>
            </Provider>
        </div>
    )
}

// 客户端注水
ReactDom.hydrate(
    <App />,
    document.getElementById('root')
)