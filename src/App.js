import {getChatLink, getChatsLink, getHomeLink, getProfileLink} from "./navigation";
import {Switch,Route} from 'react-router-dom'
import {Chat} from "./routes/Chat";
import {Header} from "./components/Header";
import {Chats} from "./routes/Chats";
import * as PropTypes from "prop-types";
import {Profile} from "./routes/Profile";
import {Home} from "./routes/Home";
import {Provider} from "react-redux";
import {store} from "./store";



export default function App() {

    return (<div>
        <Header/>
    <Switch>
        <Route exact path={getHomeLink()} component={Home}/>
        {/*<Route path={'/chat'} component={Chat}/>*/}
        <Switch>
            <Route path={getChatsLink()}>
                <Chats>
                    <Route  path={getChatLink()} component={Chat}/>
                </Chats>
            </Route>

                <Route exact path={'/profile'}>
                    <Provider store={store}>
                          <Profile/>
                    </Provider>
                </Route>


        </Switch>
    </Switch>
        </div>
    )
}
