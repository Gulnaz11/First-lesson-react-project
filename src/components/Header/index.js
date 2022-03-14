import {Button, Toolbar} from "@mui/material";
import {Link} from "react-router-dom/";
import {getChatsLink, getHomeLink} from "../../navigation";

export const Header = () => {
    return (
        <div>
            <Toolbar
            sx={
                {
                    backgroundColor: "snow",
                }
            }
            >
                <Button color={"inherit"} component={Link} to={getHomeLink()}>
                    Home
                </Button>
                <Button color={"inherit"} component={Link} to={getChatsLink()}>
                    Chats
                </Button>
            </Toolbar>

        </div>
    )
}
