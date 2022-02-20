import {useDidUpdate} from "./useDidUpdate";
import {useEffect} from "react";



export const useCacheTaskList = (taskList, setTaskList) => {
    const key = 'Task-list';
    useDidUpdate(() => {
        localStorage.setItem(key, JSON.stringify(taskList));
    },[taskList])

    useEffect(()=> {
        const json = localStorage.getItem(key);
        if (json){
            setTaskList(JSON.parse(json)) ;
        }
    },[])
}
