import {useCallback, useMemo, useState} from "react";
import {FILTER_BY_STATUS_ALL} from "../constants";


export const useCreateMessageForm = ({onSubmit}) =>{
    const [inputValue, setInputValue] = useState('');
    const resetInputValue =useCallback( () =>{
        setInputValue('');
    },[])

    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault();
            onSubmit(inputValue)
            resetInputValue();
        },[inputValue, onSubmit, resetInputValue]
    )

    const onChangeInput = (event) => {
        setInputValue(event.target.value);
    }

    return{
        inputValue,
        handleSubmit,
        resetInputValue,
        onChangeInput
    }
}
