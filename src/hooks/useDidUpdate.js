import {useEffect, useRef} from "react";


export const useDidUpdate = (effect, debs = []) => {

    const init = useRef(false);
    useEffect(() => {
        if (init.current) {
            effect();
        }  else {
            init.current = true;
        }
    },debs)
}
