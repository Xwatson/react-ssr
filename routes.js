import Home from './container/home'
import Login from './container/Login'

export default [
    {
         path: '/',
         component: Home,
         exact: true,
         key: 'home'
    },
    {
        path: '/login',
        component: Login,
        exact: true,
        key: 'login'
   }
]