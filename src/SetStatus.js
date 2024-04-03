import React from 'react'
import {useState} from "react";
import { useLocalStorage} from "./hooks/useLocalStorage";


const Status = () => {
    const [inputText, setInputText] = useState('');
    const [statusText, setStatusText] = useState('Крутой статус');
    const [status, setStatus] = useLocalStorage([], 'status');

    const handleInputChange = (e) => {
        setStatus(e.target.value);
        setInputText(e.target.value);
    };

    const handleButtonClick = () => {
        setStatusText(inputText);
        setInputText('');
    };
    const clearStatus = () => {
        setStatusText('');
        setInputText('');
        setStatus('')
    };
    return (
        <div>
            <h6>{status}</h6>
            <input type="text" value={inputText} onChange={handleInputChange} />
            <p></p>
            <button id={"setStatus"} className={"btn btn-success"} onClick={handleButtonClick}>Установить статус</button>
            <p></p>
            <button id={"clearStatus"} className={"btn btn-danger"} onClick={clearStatus}>Удалить статус</button>
        </div>
    );
};

export default Status
