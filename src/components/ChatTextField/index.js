import { useContext, useState } from 'react';
import { ChatContext } from '../../contexts/ChatContext';
import { AnalyzeModal } from '../AnalyzeModal';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import BoltIcon from '@mui/icons-material/Bolt';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { createChat, createChatMessage } from '../../api/chats';
import { analyzePrompt } from '../../api/analyze';

export const ChatTextField = () => {
    const [value, setValue] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const {
        chats,
        setChats,
        isSassy,
        currentChat,
        setCurrentChat,
        setCurrentMessages,
        currentMessagesLoading,
        setCurrentMessagesLoading,
        setAnalyzeLoading,
        setAnalyzeResult
    } = useContext(ChatContext);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendChat(event);
        }
    };

    const handleSendClick = async (event) => {
        if (!value) {
            return;
        }
        sendChat();
    };

    const handleAnalyzeClick = async (event) => {
        if (!value) {
            return;
        }
        setAnalyzeLoading(true);
        setModalOpen(true);
        try {
            const data = { prompt: value };
            const result = await analyzePrompt(data);
            setAnalyzeResult(result.data);
        } catch (e) {
            setAnalyzeResult({ result: 'an error occurred' });
            console.log(e);
        }
        setAnalyzeLoading(false);
    };

    const handleModalClose = () => {
        setAnalyzeLoading(false);
        setAnalyzeResult({});
        setModalOpen(false);
    };

    const sendChat = async () => {
        setCurrentMessagesLoading(true);
        const message = value;
        let result = null;
        try {
            if (currentChat) {
                // if we have a chat, add a message
                result = await createChatMessage(currentChat.id, {
                    message
                });
            } else {
                // if we dont have a chat, prime a new one
                result = await createChat({ message, sassy: isSassy });
                const newChats = [result.data, ...chats];
                setCurrentChat(result.data);
                setChats(newChats);
            }

            result?.data?.messages.shift();
            setCurrentMessages(result?.data?.messages);
            setValue('');
        } catch (e) {
            setCurrentMessages([]);
        }
        setCurrentMessagesLoading(false);
    };

    return (
        <Container maxWidth="false" sx={{ maxWidth: '750px' }}>
            <AnalyzeModal
                open={modalOpen || false}
                onClose={handleModalClose}
            />
            <Stack direction="row" spacing={2}>
                <TextField
                    autoFocus={true}
                    fullWidth={true}
                    placeholder={'Lets chat'}
                    multiline={true}
                    onKeyDown={handleKeyDown}
                    onChange={handleChange}
                    value={value}
                />
                <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    onClick={handleSendClick}
                >
                    {currentMessagesLoading ? <CircularProgress /> : 'Send'}
                </Button>
                <Button
                    color="success"
                    variant="contained"
                    endIcon={<BoltIcon />}
                    onClick={handleAnalyzeClick}
                >
                    Analyze
                </Button>
            </Stack>
        </Container>
    );
};
