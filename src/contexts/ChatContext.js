import React, { createContext, useState, useEffect } from 'react';
import { getAllChats } from '../api/chats';

const ChatContext = createContext('chat');

const ChatContextProvider = ({ children }) => {
    const [chatsLoading, setChatsLoading] = useState(false);
    const [currentChatLoading, setCurrentChatLoading] = useState(false);
    const [currentMessagesLoading, setCurrentMessagesLoading] = useState(false);
    const [chats, setChats] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [currentMessages, setCurrentMessages] = useState([]);
    const [isSassy, setIsSassy] = useState(false);
    const [analyzeResult, setAnalyzeResult] = useState({});
    const [analyzeLoading, setAnalyzeLoading] = useState(false);

    const clearState = () => {
        setChatsLoading(false);
        setCurrentChat(null);
        setCurrentMessages([]);
    };

    useEffect(() => {
        const fetchChats = async () => {
            setChatsLoading(true);
            const res = await getAllChats();
            setChats(res.data);
            setChatsLoading(false);
        };
        fetchChats();
    }, []);

    return (
        <ChatContext.Provider
            value={{
                analyzeLoading,
                setAnalyzeLoading,
                analyzeResult,
                setAnalyzeResult,
                clearState,
                currentChat,
                setCurrentChat,
                currentChatLoading,
                isSassy,
                setIsSassy,
                setCurrentChatLoading,
                currentMessagesLoading,
                setCurrentMessagesLoading,
                currentMessages,
                setCurrentMessages,
                chatsLoading,
                setChatsLoading,
                chats,
                setChats
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

export { ChatContext, ChatContextProvider };
