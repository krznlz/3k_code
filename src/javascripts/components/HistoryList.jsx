import React from 'react';

function HistoryList ({history}) {

    return (
        <div className="container-text">
        {history.map((item) => (
            <div 
            key={item.id}
            className={item.style}
            >
                {item.text}
            </div>
        ))}
        </div>
    )
}

export default HistoryList;