import { createSlice } from '@reduxjs/toolkit'
let initMainState = { token: "", userMessage: "" }
export const mainState = createSlice({
    name: 'mainStateName',
    initMainState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.islogin
        },
        setInfo: (state, action) => {
            state.token = action.getInfo
        }
    }
    /* if(action.type === 'setToken') {
        let changeState = Object.assign({}, state);//拷贝
changeState.token = action.islogin;//渲染数据
return changeState;
    }
if (action.type === 'setInfo') {
    let changeState = Object.assign({}, state);//拷贝
    changeState.userMessage = action.getInfo;//渲染数据
    return changeState;
}
return state */
})
export const { setInfo, setToken } = mainState.actions
export default mainState.reducer