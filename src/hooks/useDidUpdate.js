import {useEffect, useRef} from "react";


export const  useDidUpdate = (effect, debs = [],timer=0) => {

    const init = useRef(false);
    useEffect(() => {
        const timerId = setTimeout(() => {
        if (init.current) {
            effect();
        }  else {
            init.current = true;
        } },timer)
        return ()=> {
            clearTimeout(timerId);
        }
    },debs)
}
