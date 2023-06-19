import { getClient } from './client';

export const analyzePrompt = async (data) => {
    const client = getClient();
    return await client.post('/analyze/', data);
};
