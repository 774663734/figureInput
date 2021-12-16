import React from 'react'
function messageBox() {
    const handleOpenModal = () => {
        console.log(1)
    }
    return (<div>
        <button onClick={handleOpenModal}>1</button>
    </div>);
}

export default messageBox;