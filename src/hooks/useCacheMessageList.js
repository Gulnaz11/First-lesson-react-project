import {useDidUpdate} from "./useDidUpdate";
import {useEffect} from "react";



export const useCacheMessageList = (List, setList) => {
    const key = 'List';
    useDidUpdate(() => {
        localStorage.setItem(key, JSON.stringify(List));
    },[List])

    useEffect(()=> {
        const json = localStorage.getItem(key);
        if (json){
            setList(JSON.parse(json)) ;
        }
    },[])
}
