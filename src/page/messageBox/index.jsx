import React, { useState } from 'react'
import { createStore } from 'redux'
import Counter from '../../components/count/index'
import counter from '../../store/reducer/counter'

const store = createStore(counter)


function MessageBoxContainer() {
    const [storeVal, setStoreVal] = useState(store.getState());
    const unsubscribe = store.subscribe(() => {
        setStoreVal(store.getState())
        console.log(storeVal)
    })
    return (<div>
        <Counter value={storeVal}
            onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
            onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />
    </div>);
}

export default MessageBoxContainer;