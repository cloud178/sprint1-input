import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ]);

    let [title, setTitle] = useState<string>('')
    console.log(title)

    const addMessage = (newMessage: string) => {
        setMessage([{message: newMessage}, ...message]);
    }

    const onClickButtonHandler = () => {
        addMessage(title);
        setTitle('');
    }

    return (
        <div className="App">
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callback={onClickButtonHandler}/>
            {message.map((elem, index) => {
                return (
                    <div key={index}>{elem.message}</div>
                )
            })}
        </div>
    );
}

export default App;
