import React from 'react';
import style from './message.module.css';

export const Message = ({content}) => {
    return (
        <div className={style.message}>
            <h1>Message:</h1>
            <p className={style.messageContent}>{content}</p>
        </div>
    );
};
