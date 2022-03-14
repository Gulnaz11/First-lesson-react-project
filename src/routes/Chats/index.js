import {
    Box,
    Button,
    Grid,
    ListItem,
    ListItemButton,
    ListItemText,
    Modal,
    Paper,
    TextField,
} from "@mui/material";

import {nanoid} from "nanoid";
import {Link, useLocation} from "react-router-dom";
import {} from "./index.css"
import {getChatList} from "../../store/chats/selector";
import {useDispatch, useSelector} from "react-redux";
import {createChat, deleteChat} from "../../store/chats/action";
import {getChatLink} from "../../navigation";
import {useState} from "react";


export const Chats = ({children}) =>{

    const chats = useSelector(getChatList);
    const dispatch = useDispatch();

    const handleCreateChat = () => {
        handleClose()
        dispatch(createChat({
            id: nanoid(),
            name:inputValue,
        }))
    }

    const handleDeleteTChat = (id) => () => {
        dispatch(deleteChat(id))
    }

    let inputValue;

    const onChangeInput = (event) => {
        inputValue=event.target.value;
    }
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let location=useLocation();

    return <div>
      <Grid container spacing = {2} className={location.pathname.slice(1)} >
          <Paper
              sx={
                  {
                      marginTop:3,
                      padding: 2,
                      paddingBottom:5,
                      height: "100%",
                      backgroundColor: "snow",
                  }
              }
              elevation={3}>


              <div>
                  {
                      chats?.map((item) => {
                          return <ListItem disablePadding key = {item.id}>
                              <ListItemButton component="a" component = {Link} to ={getChatLink(item.id)}>
                                  <ListItemText primary={item.name} />
                              </ListItemButton>
                              <Button onClick={handleDeleteTChat(item.id)}>
                              Delete
                          </Button>
                          </ListItem>
                      })

                  }

                  <Button onClick={handleOpen}>Add new chat</Button>
                  <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                  >
                      <Box className={"modal"}>

                          <TextField
                              id="standard-basic"
                              variant="standard"
                              placeholder="Name chat"
                              value={inputValue}
                              onChange={onChangeInput}
                              type="text"/>

                          <Button
                              variant="contained"
                              type="submit"
                              onClick={handleCreateChat}
                          >
                              Add
                          </Button>
                      </Box>
                  </Modal>
              </div>


          </Paper>
          {children}
      </Grid>
    </div>

}
