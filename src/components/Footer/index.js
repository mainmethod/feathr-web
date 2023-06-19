import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { ChatTextField } from '../ChatTextField';

const footerStyles = {
    py: 3,
    px: 2,
    mt: 'auto',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    flexShrink: 0,
    backgroundColor: (theme) => theme.palette.grey[900]
};

export const Footer = () => {
    return (
        <Box component="footer" sx={footerStyles}>
            <Stack direction="row">
                <ChatTextField />
            </Stack>
        </Box>
    );
};
