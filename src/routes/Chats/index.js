import {Grid, Paper, Typography} from "@mui/material";
import {ChatList} from "../../components/chatList/ChatList";
import {nanoid} from "nanoid";
import {useLocation, useParams} from "react-router-dom";
import {} from "./index.css"



export  const chatList = [
    {
        name:'Bot',
        id: nanoid()
    },
    {
        name:'Name1',
        id: nanoid()
    },
    {
        name:'Name2',
        id: nanoid()
    }
]

export const Chats = ({children}) =>{

    let location=useLocation();
    console.log(location.pathname.slice(1))

    return <div>
      <Grid container spacing = {2} className={location.pathname.slice(1)} >
          <Paper
              sx={
                  {
                      marginTop:2,
                      padding: 2,
                      paddingBottom:5,
                      height: "100%",
                  }
              }
              elevation={3}>

              <ChatList
                  chatList={chatList}
              />
          </Paper>
          {children}
      </Grid>
    </div>

}
