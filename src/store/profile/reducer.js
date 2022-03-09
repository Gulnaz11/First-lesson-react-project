import {IS_SHOW, SAVE_PROFILE_NAME} from "./action";


const initialState ={
    profile: [
        {
            isShow:false
        }
    ],

}

export const profileReducer = (state=initialState, action) => {

    switch (action.type){
        case(SAVE_PROFILE_NAME): {

            return {
                ...state,
                profile: [
                    ...state.profile,
                    action.payload
                ]
            }
        }

        case(IS_SHOW):{

           return {
             ...state  ,
            profile: [
                ...state.profile,
                !state.isShow
            ]
           }
        }
        default:
            return state;

    }
}
