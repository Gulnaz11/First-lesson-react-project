import './App.css';
import {useState, useCallback, useMemo, useEffect} from "react";
import {useCreateMessageForm} from "./hooks/useCreateMessageForm";
import {useTaskList} from "./hooks/useTaskList";
import {FILTER_BY_STATUS_ALL, FILTER_BY_STATUS_COMPLETED, FILTER_BY_STATUS_IN_WORK} from "./constants";
import {useFilterByStatus} from "./hooks/useFilterByStatus";
import {useTaskFilteredByStatus} from "./hooks/useTaskFilteredByStatus";
import {useDidUpdate} from "./hooks/useDidUpdate";
import {useCacheMessageList} from "./hooks/useCacheMessageList";
import {useMessageList} from "./hooks/useMessageList";


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

  //
  //  const {filteredTaskList} =useTaskFilteredByStatus({list:taskList,filterStatus})

  return (
      <div className="App">
          <form onSubmit={handleSubmit}>
              <input onChange={onChangeInput} value={inputValue} type="text"/>
              <button type="submit">send</button>
          </form>
          {
              messageList.map(({text, author},index) => {
                  return <div key={index}>
                      <h4>{author}:</h4>
                      <p>
                      {text}
                      </p>
                  </div>
                  })
          }

          {/*<form onSubmit={handleSubmit}>*/}
          {/*    <input onChange={onChangeInput} value={inputValue} type="text"/>*/}
          {/*    <button type="submit">*/}
          {/*        Save*/}
          {/*    </button>*/}
          {/*</form>*/}
          {/*<select value={filterStatus} onChange={onChangeStatus}>*/}
          {/*    <option value={FILTER_BY_STATUS_ALL}>all</option>*/}
          {/*    <option value={FILTER_BY_STATUS_IN_WORK}>in work</option>*/}
          {/*    <option value={FILTER_BY_STATUS_COMPLETED}>complete</option>*/}
          {/*</select>*/}
          {/*<ul>*/}
          {/*    {*/}
          {/*        filteredTaskList.map(({status, text},index) => {*/}
          {/*            return <li key={index}>*/}
          {/*                <input*/}
          {/*                    checked={status}*/}
          {/*                    type="checkbox"*/}
          {/*                    onClick={changeStatus(index,status)}*/}
          {/*                />*/}
          {/*                {text}*/}
          {/*            </li>*/}
          {/*        })*/}
          {/*    }*/}
          {/*</ul>*/}
      </div>
  );
}

export default App;
