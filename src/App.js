import {
    Container,
    Button,
    TextField,
    Input,
    Box,
    ListItem,
    ListItemText,
    ListItemButton,
    ListItemIcon, IconButton, Checkbox, Select, MenuItem
} from '@mui/material'
import Paper from '@mui/material/Paper';
import {useState, useCallback, useMemo, useEffect} from "react";
import {useCreateMessageForm} from "./hooks/useCreateMessageForm";
import {useDidUpdate} from "./hooks/useDidUpdate";
import {useCacheMessageList} from "./hooks/useCacheMessageList";
import {useMessageList} from "./hooks/useMessageList";
import {useAddBotText} from "./hooks/useAddBotText";


function App() {

    const {messageList,setMessageList, addNewMessage} = useMessageList();

    //  const {addNewTask, taskList,changeStatus,setTaskList}= useTaskList();
    //
    useCacheMessageList(messageList,setMessageList);
    //
    //
    //  const {filterStatus,onChangeStatus} = useFilterByStatus();
    const {
        handleSubmit,
        onChangeInput,
        inputValue
    }=useCreateMessageForm ({onSubmit: addNewMessage});

    useAddBotText(messageList,addNewMessage);

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
                        padding: 2,
                        height: "80vh",
                        width: '100%'
                    }
                }
                elevation={3}
            >
                <Box component={"form"} onSubmit={handleSubmit}>
                    <Input
                        label="Enter text"
                        placeholder="Hello"
                        onChange={onChangeInput}
                        value={inputValue}
                        type="text"/>
                    <Button variant="contained" type="submit">
                        Send
                    </Button>
                </Box>
                {
                    messageList.map(({text, author},index) => {
                        return  <ListItem key={index}>
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

export default App;
