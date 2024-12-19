import React from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void
}

export const Button = ({name, callback}: ButtonPropsType) => {

    return (
        <button onClick={() => {callback()}}>{name}</button>
    );
};
