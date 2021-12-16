import React, { useEffect, useState, useRef } from 'react';
import { Card, Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from "react-router-dom";
import { logdinRes, accountInfo } from '../../api/login/login';
import { useSelector, useDispatch } from 'react-redux'
import './LoginPage.scss';
import { configureStore } from '@reduxjs/toolkit'
import { getInfo, setToken } from '../../store/reducer/mainStore';
import counterSlice from '../../store/reducer/counterSlice';
import { Counter } from './counter/Counter';


const LoginPage = () => {
  const dispatch = useDispatch()

  const count = useSelector((state) => state.counter.value)
  //路由方法导出
  // const store = configureStore({ reducer: mainStore });
  const countVal = useSelector((state) => state.counter.value)
  // const counterStore = configureStore({ reducer: counterSlice });
  let history = useHistory()
  // const [tokenVal, setTokenVal] = useState(store.getState());
  const [tokenVal, setTokenVal] = useState('');
  const onFinish = async (values) => {
    //登录
    //获取用户信息
    try {
      const islogin = await logdinRes();
      sessionStorage.setItem('Token', JSON.stringify(islogin.data.data));
    } catch (error) {
      console.log(error)
    }
    try {
      const getInfo = await accountInfo();
      console.log(getInfo.data);
      history.push('/');
    } catch (error) {
      console.log(error)
    }
    // 成功后跳页面
    // history.push('/');

  };
  // console.log(store.getState());
  const resLog = () => {
    /* console.log(count);
    console.log(store.getState());
    console.log(counterStore.getState());
    console.log(countVal); */
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="login-page">
      {/* <p>{tokenVal}</p> */}
      <Counter />
      <div className="header">
        <div className="content">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="账号"
              name="账号"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="密码"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <Button style={{ marginLeft: '20px' }} onClick={resLog}>
                取消
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div >
  );
};

export default LoginPage;
