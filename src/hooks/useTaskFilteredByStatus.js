import {useMemo} from "react";
import {FILTER_BY_STATUS_COMPLETED, FILTER_BY_STATUS_IN_WORK} from "../constants";


export const useTaskFilteredByStatus = ({list, filterStatus}) =>{
    const filteredTaskList = useMemo(()=>{

        if(filterStatus=== FILTER_BY_STATUS_IN_WORK){
            return list.filter(({status})=>status===false);
        };
        if(filterStatus=== FILTER_BY_STATUS_COMPLETED){
            return list.filter(({status})=>status);
        }

        return list;
    },[list,filterStatus]);

    return {filteredTaskList};
}
