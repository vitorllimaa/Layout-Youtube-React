import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },

    AppBar: {
        zIndex: '1201!important',
        boxShadow: 'none!important',
        backgroundImage: 'none!important',
    },

    logo: {
        width: 100,
    },

    IconsNav: {
        cursor: "pointer",

    }
}));

export default useStyles;