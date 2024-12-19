import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ]);

    return (
        <div className="App">
            <input/>
            <button>+</button>
            {message.map( (elem, index) => {
                return (
                    <div key={index}>{elem.message}</div>
                )
            } )}
        </div>
    );
}

export default App;
