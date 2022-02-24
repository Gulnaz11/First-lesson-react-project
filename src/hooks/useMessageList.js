import {useCallback, useState} from "react";


export const useMessageList = () => {
    const [ messageList , setMessageList ] = useState([]);

    const addNewMessage = useCallback((text,author) =>{
        const message = {
            author:author || 'Me',
            text,
        }
        setMessageList((prevState)=>{
            return [
                ...prevState,
                message,
            ]
        })
    },[])
    return {
        messageList,
        addNewMessage,
        setMessageList
    }
}
