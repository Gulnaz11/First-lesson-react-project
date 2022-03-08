
import propTypes from "prop-types";
import {ListItem, ListItemButton, ListItemText} from "@mui/material";
import {Link} from "react-router-dom";
import {getChatLink, getChatsLink} from "../../navigation";


export const ChatList= ({chatList}) =>{

    return (
       <div>
           <ListItem disablePadding>
               <ListItemButton component = {Link} to ={getChatLink(chatList[0].id)}>
                   <ListItemText primary={chatList[0].name}/>
               </ListItemButton>
           </ListItem>
           <ListItem disablePadding>
               <ListItemButton component="a" component = {Link} to ={getChatLink(chatList[1].id)}>
                   <ListItemText primary={chatList[1].name} />
               </ListItemButton>
           </ListItem>
           <ListItem disablePadding>
               <ListItemButton component="a" component = {Link} to ={getChatLink(chatList[2].id)}>
                   <ListItemText primary={chatList[2].name} />
               </ListItemButton>
           </ListItem>

           {/*НЕ РАБОТАЕТ ВЫВОД ЧЕРЕЗ MAP , ПОЧЕМУ?*/}
           {/*{*/}
           {/*    chatList.map((item)=> {*/}
           {/*        <ListItem disablePadding>*/}
           {/*            <ListItemButton component="a"component = {Link} to ={getChatLink(item.id)}>>*/}
           {/*                <ListItemText primary={item.name} />*/}
           {/*            </ListItemButton>*/}
           {/*        </ListItem>*/}
           {/*    })*/}
           {/*}*/}
       </div>
    )
}


ChatList.propTypes = {
    chatList: propTypes.arrayOf(
        propTypes.shape({
            id:propTypes.string.isRequired,
            name: propTypes.string
        })
    )
}
