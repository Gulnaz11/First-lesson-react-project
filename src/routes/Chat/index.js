import {useMessageList} from "../../hooks/useMessageList";
import {useCacheMessageList} from "../../hooks/useCacheMessageList";
import {useCreateMessageForm} from "../../hooks/useCreateMessageForm";
import {useAddBotText} from "../../hooks/useAddBotText";
import {useEffect, useRef} from "react";
import {Box, Button, Container, ListItem, ListItemText, Paper} from "@mui/material";
import {ChatList} from "../../components/chatList/ChatList";
import {nanoid} from "nanoid";
import {Redirect, useParams} from "react-router-dom";
import {chatList} from "../Chats";


export function Chat() {

    const {messageList,setMessageList, addNewMessage} = useMessageList();

    //  const {addNewTask, taskList,changeStatus,setTaskList}= useTaskList();
    //
    useCacheMessageList(messageList,setMessageList);
    //
    //
    //  const {filterStatu,onChangeStatus} = useFilterByStatus();
    const {
        handleSubmit,
        onChangeInput,
        inputValue
    }=useCreateMessageForm ({onSubmit: addNewMessage});

    useAddBotText(messageList,addNewMessage);


    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current?.focus();
    })

    const {chatId} = useParams();

    // if(!chatList.find ((item)=> item.id === chatId)){
    //    return <Redirect to ={ `/chats`}></Redirect>
    // }



    //  const {filteredTaskList} =useTaskFilteredByStatus({list:taskList,filterStatus})

    return (
        <Container
            sx={{
                display: "flex",
                alignItems: 'center',
                height: '100hv'}}
            maxWidth="xs"
        >
            <Paper
                sx={
                    {
                        marginTop:6,
                        padding: 2,
                        paddingBottom:5,
                        height: "100%",
                        backgroundColor: "snow",
                    }
                }
                elevation={3}
            >
                <Box component={"form"} onSubmit={handleSubmit}>
                    <input ref={inputRef}
                           placeholder="Enter text"
                           onChange={onChangeInput}
                           value={inputValue}
                           type="text"/>
                    <Button variant="contained" type="submit">
                        Send
                    </Button>
                </Box>
                {
                    messageList.map(({text, author},index) => {
                        return  <ListItem key={nanoid()}>
                            <ListItemText
                                primary={text}
                                secondary={author}
                                secondaryTypographyProps={{
                                    color:  author == "Me" ? 'rgb(187, 242, 194);' : 'rgb(242, 187, 218);',

                                }}/>
                        </ListItem>

                    })
                }
            </Paper>
        </Container>
    );
}
