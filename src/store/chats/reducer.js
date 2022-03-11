import {nanoid} from "nanoid";
import {CREATE_CHAT, DELETE_CHAT} from "./action";


const initialState = {
    chatList : [
        {
            name:'Bot',
            id: nanoid()
        },
        {
            name:'Name1',
            id: nanoid()
        },
        {
            name:'Name2',
            id: nanoid()
        }
    ]
}

export const  chatsReducer = (state = initialState,action) => {
    switch (action.type){
        case(CREATE_CHAT):{

            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    action.payload,
                ]
            }
        }
        case(DELETE_CHAT):  {
            return {
                ...state,
                chatList: state.chatList.filter((item) => item.id !== action.payload),

            }
        }
        default:{
            return state;
        }
    }
}
