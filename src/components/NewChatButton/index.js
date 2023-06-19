import { useContext } from 'react';
import { ChatContext } from '../../contexts/ChatContext';
import Button from '@mui/material/Button';

export const NewChatButton = () => {
    const { clearState } = useContext(ChatContext);

    return (
        <Button variant="contained" onClick={clearState} sx={{ width: '100%' }}>
            New Chat
        </Button>
    );
};
