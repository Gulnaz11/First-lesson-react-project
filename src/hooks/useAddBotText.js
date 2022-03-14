import {useDidUpdate} from "./useDidUpdate";
import {createMessage} from "../store/chat/action";
import {nanoid} from "nanoid";
import {useDispatch} from "react-redux";


export const useAddBotText =(messages, chatId) => {
    const dispatch = useDispatch();
    useDidUpdate(() => {
        if(messages[messages.length-1].author==='Me'){
            dispatch( createMessage(chatId,{
                id: nanoid(),
                author: 'Bot',
                text: "Hello!",
            }) )
        };
    },[messages,chatId])
}
