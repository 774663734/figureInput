/* import { createStore, applyMiddleware, compose } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'
import mainStore from './reducer/mainStore'
import thunk from 'redux-thunk'

// 这里让项目支持浏览器插件Redux DevTools
const composeEnhancers = typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

const store = configureStore({
    reducer,
    mainStore,
    enhancer
})

export default store
 */

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})