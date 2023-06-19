import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { MessageStack } from './components/MessageStack';
import { ChatContextProvider } from './contexts/ChatContext';
import { SideBar } from './components/Sidebar';
import { Footer } from './components/Footer';

let theme = createTheme({
    palette: {
        primary: {
            main: '#0052cc'
        },
        secondary: {
            main: '#8F653A'
        },
        mode: 'dark'
    }
});

const topBoxStyles = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
};

const mainContainerStyles = {
    mt: 8,
    mb: 2,
    flex: 1,
    height: '100%',
    paddingBottom: '115px'
};

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ChatContextProvider>
                <Box sx={topBoxStyles}>
                    <Container
                        component="main"
                        sx={mainContainerStyles}
                        maxWidth="sm"
                    >
                        <SideBar />
                        <MessageStack messages={[]} />
                    </Container>
                    <Footer />
                </Box>
            </ChatContextProvider>
        </ThemeProvider>
    );
};

export default App;
