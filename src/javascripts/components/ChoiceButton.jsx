import React from 'react';

function ChoiceButton ({choice, onChoice}) {

    function handleClick() {
            onChoice(choice)
    }

    return (
        <div className='answer' onClick = {handleClick}>
            {choice}
        </div>
    
    )
}

export default ChoiceButton