import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import mainStore from '../../../store/reducer/mainStore';
import { decrement, increment } from './../../../store/reducer/counterSlice'

export function Counter() {
    const count = useSelector(function (state) {
        return state.counter.value
    })
    const dispatch = useDispatch()
    const mainList = configureStore({ reducer: mainStore })
    const getStore = () => {
        dispatch(increment())
        console.log(mainList.getState());
    }
    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => getStore()}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}