import {useDidUpdate} from "./useDidUpdate";

export const useAddBotText =(list, addNewList) => {
    useDidUpdate(() => {
        if(list[list.length-1].author==='Me'){
            addNewList("Hey","Bot")
        };
    },[list],2000)
}
