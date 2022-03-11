import { createStore, combineReducers } from 'redux';
import {profileReducer} from "./profile/reducer";
import {chatsReducer} from "./chats/reducer";
import {messageReducer} from "./chat/reducer";

export const store = createStore(combineReducers({
    chats:chatsReducer,
    messages:messageReducer,
    profile:profileReducer,
}), window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
