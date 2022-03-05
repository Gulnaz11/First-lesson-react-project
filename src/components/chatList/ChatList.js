
import propTypes from "prop-types";
import {ListItem, ListItemButton, ListItemText} from "@mui/material";


export const ChatList= ({chatList}) =>{

    return (
       <div>
           <ListItem disablePadding>
               <ListItemButton>
                   <ListItemText primary={chatList[0].name} />
               </ListItemButton>
           </ListItem>
           <ListItem disablePadding>
               <ListItemButton component="a" href="#simple-list">
                   <ListItemText primary={chatList[1].name} />
               </ListItemButton>
           </ListItem>
           <ListItem disablePadding>
               <ListItemButton component="a" href="#simple-list">
                   <ListItemText primary={chatList[2].name} />
               </ListItemButton>
           </ListItem>

           {/*НЕ РАБОТАЕТ ВЫВОД ЧЕРЕЗ MAP , ПОЧЕМУ?*/}
           {/*{*/}
           {/*    chatList.map((item)=> {*/}
           {/*        <ListItem disablePadding>*/}
           {/*            <ListItemButton component="a" href="#simple-list">*/}
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
