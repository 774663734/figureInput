import React from 'react'
import ReactDOM from 'react-dom'
import RouterApp from './router/router'
import 'antd/dist/antd.css';
import store from './store';
import {Provider} from 'react-redux'
import './mock/index'

ReactDOM.render(<Provider store={store}>
    <RouterApp/>
</Provider>, document.getElementById('root'))
