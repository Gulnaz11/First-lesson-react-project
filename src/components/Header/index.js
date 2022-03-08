import {useState} from "react";
import {Breadcrumbs, Button, Drawer, ListItem} from "@mui/material";
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
            <Breadcrumbs aria-label="breadcrumb">
                <ListItem component={Link} to={getHomeLink()}>
                    Home
                </ListItem>
                <ListItem component={Link} to={getChatsLink()}>
                    Chats
                </ListItem>
                <ListItem component={Link} to={getProfileLink()}>
                    Profile
                </ListItem>
            </Breadcrumbs>

        </div>
    )
}
