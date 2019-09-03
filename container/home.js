import React,  { useState, useEffect } from "react"
import { connect } from 'react-redux'

import { getHomeList } from '../store/home'

const Home = (props) => {
    const [count, setCount] = useState(1)
    useEffect(() => {
        // props.getHomeList()
    }, [])
    return (
        <div>
            <h1>react ssr demo, {count}</h1>
            <button onClick={() => setCount(count + 1)}>添加</button>
            <ul>
                {
                    props.list.map(item => <li key={item.id}>{item.name}</li>)
                }
            </ul>
        </div>
    )
}
// server拉去数据
Home.load = (store) => {
    return store.dispatch(getHomeList())
}
export default connect(
    state => ({ list: state.home.list }),
    {getHomeList}
)(Home)