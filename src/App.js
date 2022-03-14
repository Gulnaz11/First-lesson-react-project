import {getChatLink, getChatsLink, getHomeLink} from "./navigation";
import {Switch,Route} from 'react-router-dom'
import {Chat} from "./routes/Chat";
import {Header} from "./components/Header";
import {Chats} from "./routes/Chats";
import {Home} from "./routes/Home";
import {Provider} from "react-redux";
import {store} from "./store";



export default function App() {

    return (
        <div>
             <Header/>
             <Provider store={store}>
                 <Switch>
                    <Route exact path={getHomeLink()} component={Home}/>
                         <Route path={getChatsLink()}>
                             <Chats>
                                 <Route  path={getChatLink()} component={Chat}/>
                             </Chats>
                         </Route>
                 </Switch>
             </Provider>
        </div>
    )
}
