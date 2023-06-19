import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export const Message = ({ message }) => {
    return (
        <Box
            sx={{
                p: 4,
                backgroundColor: (theme) =>
                    message?.role === 'user'
                        ? theme.palette.grey[600]
                        : theme.palette.grey[800]
            }}
        >
            <Stack direction="row" spacing={2}>
                {message?.role === 'user' ? (
                    <AccountCircleTwoToneIcon />
                ) : (
                    <SmartToyRoundedIcon />
                )}
                <Box>{message.content}</Box>
            </Stack>
        </Box>
    );
};
