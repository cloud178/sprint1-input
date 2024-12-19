import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage: (newMessage: string) => void
}

export const FullInput = ({addMessage}: FullInputPropsType) => {
    let [title, setTitle] = useState<string>('');

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }

    const onClickButtonHandler = () => {
        addMessage(title);
        setTitle('');
    }

    return (
        <div>
            <input onChange={onChangeInputHandler} value={title}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};
