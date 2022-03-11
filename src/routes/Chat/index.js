import {useMessageList} from "../../hooks/useMessageList";
import {useCacheMessageList} from "../../hooks/useCacheMessageList";
import {useCreateMessageForm} from "../../hooks/useCreateMessageForm";
import {useAddBotText} from "../../hooks/useAddBotText";
import {useEffect, useRef} from "react";
import {Box, Button, Container, ListItem, ListItemText, Paper} from "@mui/material";
import {ChatList} from "../../components/chatList/ChatList";
import {nanoid} from "nanoid";
import {Redirect, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getChatList} from "../../store/chats/selector";
import {getMessageByProject} from "../../store/chat/selector";
import {createMessage} from "../../store/chat/action";



export function Chat() {

    const {chatId} = useParams();
    let inputValue;
    const onChangeInput = (event) => {
        inputValue=event.target.value;
    }
    const messages = useSelector(getMessageByProject(chatId) )

    const dispatch = useDispatch();

    const handlerCreateMessage = (event) => {
        event.preventDefault();
        dispatch( createMessage(chatId,{
            id: nanoid(),
            author: 'Me',
            text: inputValue,
        }) )
        inputRef.current.value = ''
    }
    useAddBotText(messages,chatId);

    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current?.focus();
    })

    const chats = useSelector(getChatList);
    if(!chats.find ((item)=> item.id === chatId)){
       return <Redirect to ={ `/chats`}></Redirect>
    }


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
                <Box component={"form"} onSubmit={handlerCreateMessage}>
                    <input ref={inputRef}
                           value={inputValue}
                           onChange={onChangeInput}
                           placeholder="Enter text"
                           type="text"/>
                    <Button variant="contained" type="submit">
                        Send
                    </Button>
                </Box>
                {
                    messages?.map(({text, author}) => {
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
