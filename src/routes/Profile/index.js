import {Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {IS_SHOW, SAVE_PROFILE_NAME} from "../../store/profile/action";
import Button from "@mui/material/Button/Button";
import {useState} from "react";
import {getProfileList} from "../../store/profile/selector";


export const Profile = () =>{

    let inputValue;

    const onChangeInput = (event) => {
        inputValue=event.target.value;
    }

   const profile = useSelector(getProfileList);

     const dispatch = useDispatch();

    const saveName = (event) =>{
         event.preventDefault();

         dispatch({
            type: SAVE_PROFILE_NAME ,
            payload: {
                id: Date.now(),
                name: inputValue,
            },
        })
    }

    return <div>
        <Typography variant="h2" component="div" gutterBottom>
            Profile
        </Typography>

        <form>
            <input type="checkbox"
                   checked={profile.isShow}
                   onChange={() => {
                       dispatch({
                           type: IS_SHOW ,
                       })
                   }
                   }
            />
        </form>

        <form onSubmit={saveName}>
            <input placeholder="Enter name"
                   value={inputValue}
                   onChange={onChangeInput}
                   type="text"/>
            <Button  variant="contained" type="submit">
                Add
            </Button>
        </form>

        <div>
            {
                profile.map(({name , id})=>
                <h1 key={id}>{name}</h1>
                )
            }
        </div>

    </div>

}
