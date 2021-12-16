import React from 'react'
import '../../store/test'
function home() {
    const handleOpenModal = () => {
        console.log(1)
    }
    return (<div>
        <button onClick={handleOpenModal}>1</button>
    </div>);
}

export default home;