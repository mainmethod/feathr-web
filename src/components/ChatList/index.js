import { useContext } from 'react';
import { ChatContext } from '../../contexts/ChatContext';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CircularProgress from '@mui/material/CircularProgress';
import { getCurrentChat } from '../../api/chats';
import { truncate } from '../../helpers';

export const ChatList = () => {
    const { chatsLoading, chats, setCurrentChat, setCurrentMessages } =
        useContext(ChatContext);
    const handleClick = async (chatId) => {
        const result = await getCurrentChat(chatId);
        setCurrentChat(result.data);
        result.data.messages.shift();
        setCurrentMessages(result.data.messages);
    };

    return (
        <List>
            {!chatsLoading ? (
                chats &&
                chats.map((chat) => {
                    return (
                        <div key={chat.id}>
                            <ListItem key={chat.id} disablePadding>
                                <ListItemButton
                                    onClick={() => handleClick(chat.id)}
                                >
                                    <ListItemText
                                        primary={truncate(chat.title, 40)}
                                    />
                                </ListItemButton>
                            </ListItem>
                            <Divider light />
                        </div>
                    );
                })
            ) : (
                <CircularProgress />
            )}
        </List>
    );
};
