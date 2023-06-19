import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import { useContext } from 'react';
import { ChatContext } from '../../contexts/ChatContext';
import { ChatList } from '../ChatList';
import { NewChatButton } from '../NewChatButton';

const drawerStyles = {
    width: 240,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: 240,
        boxSizing: 'border-box'
    }
};

export const SideBar = () => {
    const { isSassy, setIsSassy } = useContext(ChatContext);

    const handleChange = () => {
        setIsSassy(!isSassy);
    };

    return (
        <Box>
            <Drawer
                sx={drawerStyles}
                variant="persistent"
                open={true}
                anchor="left"
            >
                <Toolbar>
                    <NewChatButton />
                </Toolbar>
                <Toolbar>
                    <FormControlLabel
                        control={<Switch checked={isSassy} />}
                        label={isSassy ? 'Sassy?' : ''}
                        onChange={handleChange}
                    />
                </Toolbar>
                <Divider />
                <ChatList />
            </Drawer>
        </Box>
    );
};
