import {useState} from "react";
import {Breadcrumbs, Button, Drawer, ListItem, Toolbar} from "@mui/material";
import {Link} from "react-router-dom/";
import {getChatsLink, getHomeLink, getProfileLink} from "../../navigation";

export const Header = () => {
    const [isOpen, setOpen] = useState(false)

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(open);
    };

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
