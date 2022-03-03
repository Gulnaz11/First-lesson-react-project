import './App.css';
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
      <div className="App">
          <form onSubmit={handleSubmit}>
              <input onChange={onChangeInput} value={inputValue} type="text"/>
              <button type="submit">send</button>
          </form>
          {
              messageList.map(({text, author},index) => {
                  return <div className="dialog" key={index}>
                      <h4>{author}:</h4>
                      <p>
                      {text}
                      </p>
                  </div>
                  })
          }
      </div>
  );
}

export default App;
