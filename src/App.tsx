import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {FullInput} from "./components/FullInput";

function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ]);

    const addMessage = (newMessage: string) => {
        setMessage([{message: newMessage}, ...message]);
    }

    return (
        <div className="App">
            <FullInput addMessage={addMessage}/>
            {message.map((elem, index) => {
                return (
                    <div key={index}>{elem.message}</div>
                )
            })}
        </div>
    );
}

export default App;
