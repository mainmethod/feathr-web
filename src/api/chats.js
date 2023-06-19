import { getClient } from './client';

export const createChat = async (data) => {
    const client = getClient();
    return await client.post('/chat/', data);
};

export const createChatMessage = async (chatId, data) => {
    const client = getClient();
    return await client.post(`/chat/${chatId}/message`, data);
};

export const getAllChats = async () => {
    const client = getClient();
    return await client.get('/chat/');
};

export const getCurrentChat = async (chatId) => {
    const client = getClient();
    return await client.get(`/chat/${chatId}/`);
};
