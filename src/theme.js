import { createTheme } from '@mui/material/styles';

export default createTheme({
    custom: {
        logo: {
            width: "40px", 
            height: "40px",
        }
    },

    
    palette: {
        text: {
            primary: '#000',
            secondary: '#DCDCE3'
        },
        primary: {
            main: '#1976d2',
            light: '#42a5f5',
            dark: '#1565c0',
        },        
        secondary: {
            main: '#9c27b0',
            light: '#ba68c8',
            dark: '#7b1fa2',
        },
        background: {
            paper: '#fff',
            default: '#fff',
        }
    },

    typography: {
        htmlFontSize: 16,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 300,
            fontSize: "6rem"
        }, 
        h2: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 300,
            fontSize: "3.75rem"
        }, 
        h3: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 300,
            fontSize: "3rem"
        }, 
        h4: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 300,
            fontSize: "2.125rem"
        }, 
        h5: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 300,
            fontSize: "1.5rem"
        }, 
        h6: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 300,
            fontSize: "1.25rem"
        }, 
    }
});
