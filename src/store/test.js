import { configureStore } from '@reduxjs/toolkit'

const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
    // 检查 reducer 是否关心这个 action
    if (action.type === 'counter/increment') {
        // 如果是，复制 `state`
        return {
            ...state,
            // 使用新值更新 state 副本
            value: state.value + 1
        }
    }
    // 返回原来的 state 不变
    return state
}
const store = configureStore({ reducer: counterReducer })
console.log(store.getState())
// {value: 0}
//调用方式一
store.dispatch({ type: 'counter/increment' })
console.log(store.getState())
// {value: 1}
//调用方式二
const increment = () => {
    return {
        type: 'counter/increment'
    }
}
store.dispatch(increment())

console.log(store.getState())
// {value: 2}


// Selector 函数可以从 store 状态树中提取指定的片段
// const selectCounterValue = state => state.value
function selectCounterValue(state){
    return state.value
}
const currentValue = selectCounterValue(store.getState())
console.log(currentValue)




/* import { createStore } from 'redux'

function counterReducer(state = { value: 0 }, action) {
    switch (action.type) {
        case 'counter/incremented':
            return { value: state.value + 1 }
        case 'counter/decremented':
            return { value: state.value - 1 }
        default:
            return state
    }
}


let store = createStore(counterReducer)

store.subscribe(() => console.log(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'counter/incremented' })
// {value: 1}
store.dispatch({ type: 'counter/incremented' })
// {value: 2}
store.dispatch({ type: 'counter/decremented' })
// {value: 1} */