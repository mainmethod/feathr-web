import { useContext } from 'react';
import { ChatContext } from '../../contexts/ChatContext';
import { Message } from '../Message';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';

import Stack from '@mui/material/Stack';

const emptyStackStyles = {
    display: 'flex',
    alignItems: 'center'
};

export const MessageStack = () => {
    const { currentMessages, isSassy } = useContext(ChatContext);
    return (
        <Container>
            {currentMessages.length ? (
                <Stack spacing={2}>
                    {currentMessages.map((message, i) => (
                        <Message key={i} message={message} />
                    ))}
                </Stack>
            ) : (
                <Stack spacing={6} direction="row" sx={emptyStackStyles}>
                    <SmartToyRoundedIcon
                        fontSize="large"
                        style={{ color: isSassy ? 'red' : '' }}
                    />
                    <Typography variant="h2" component="h2">
                        FEATHR BOT
                    </Typography>
                </Stack>
            )}
        </Container>
    );
};
