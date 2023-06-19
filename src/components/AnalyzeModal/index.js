import { useContext } from 'react';
import { ChatContext } from '../../contexts/ChatContext';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    minHeight: 150,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

export const AnalyzeModal = ({ open, onClose }) => {
    const { analyzeResult, analyzeLoading } = useContext(ChatContext);
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            {!analyzeLoading ? (
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Sentiment Analysis
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {analyzeResult.result}
                    </Typography>
                </Box>
            ) : (
                <Box sx={style}>
                    <CircularProgress />
                </Box>
            )}
        </Modal>
    );
};
