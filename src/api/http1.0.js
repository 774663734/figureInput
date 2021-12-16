import axios from 'axios';
import { message } from 'antd';
import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux';
import mainStore from '../store/reducer/mainStore';

const store = configureStore({ reducer: mainStore });
const http = axios.create({
    baseURL: process.env.REACT_APP_BASE_API, // 从.env变量中读取的后台url地址
    timeout: 1000, // 超时时长5分钟,
    headers: { 'X-Custom-Header': 'foobar' },
    crossDomain: true
});

http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // let storeVal = store.getState();
    const Token = JSON.parse(sessionStorage.getItem('Token'));
    console.log(Token);
    config.headers['vecarbontoken'] = Token.vtokenvalue || 11;
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

http.defaults.headers.post['Content-Type'] = 'multipart/form-data;application/json;charset=UTF-8;';
// 添加请求拦截器


export default http;