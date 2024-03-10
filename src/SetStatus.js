import React from 'react'
import {useState} from "react";


const Status = () => {
    const [inputText, setInputText] = useState('');
    const [statusText, setStatusText] = useState('Крутой статус');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleButtonClick = () => {
        setStatusText(inputText);
    };

    return (
        <div>
            <h6>{statusText}</h6>
            <input type="text" value={inputText} onChange={handleInputChange} />
            <p></p>
            <button className={"btn btn-success"} onClick={handleButtonClick}>Установить статус</button>
        </div>
    );
};

export default Status
