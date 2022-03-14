import { createStore, combineReducers } from 'redux';
import {chatsReducer} from "./chats/reducer";
import {messageReducer} from "./chat/reducer";

export const store = createStore(combineReducers({
    chats:chatsReducer,
    messages:messageReducer,
}));
