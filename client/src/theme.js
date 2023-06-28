import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        mode: 'dark',

        background: {

            default: '#1A1A1A',
            paper: '#1A1A1A'
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#F0F0F0'
        },
        primary: {
            main: '#55EFFF',
            light: '#CEFFE2',
            dark: '#1E90FF',
            contrastText: '#330780'
        },
        secondary: {
            main: '#C23AAD',
            light: '#D7CFF3',
            dark: '#B61E82',
            contrastText: '#601A0A'
        }
    },
    typography: {
        fontFamily: ['Josefin Sans', 'cursive'].join(','),
        h1:{
            fontFamily: ['Caladea', 'serif'].join(','),
            fontWeight:'800',
            fontSize:'3rem',
            fontVariant:'small-caps',
            textAlign:'center',
            margin:0,
            padding:0
        },
    },
});

export default theme;