import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        background: {
            default: '#f3f4f6',
            paper: '#ffffff',
        },
        primary: {
            main: '#6366f1', // Indigo 500
            light: '#818cf8',
            dark: '#4f46e5',
        },
        text: {
            primary: '#111827', // Gray 900
            secondary: '#6b7280', // Gray 500
        },
    },
    typography: {
        fontFamily: '"Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
        h1: {
            fontSize: '24px',
            fontWeight: 700,
        },
        body1: {
            fontSize: '16px',
        },
        button: {
            textTransform: 'none',
            fontWeight: 700,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none', // Remove default gradient in dark mode if switched
                }
            }
        }
    },
});
