import {useDidUpdate} from "./useDidUpdate";
import {createMessage} from "../store/chat/action";
import {nanoid} from "nanoid";
import {useDispatch, useSelector} from "react-redux";
import {getMessageByProject} from "../store/chat/selector";


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
    },[messages,chatId],2000)
}
