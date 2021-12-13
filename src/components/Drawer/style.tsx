import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    drawer: {
        width: 240
    },

    drawerPaper: {
        width: 240,
        borderRight: 'none!important'
    },

    listItemText: {
        fontSize: '14px!important',
        fontWeight: '600!important',
        paddingLeft: 10
    },

    listIcon: {
        minWidth: '32px!important',
        marginLeft: '3px!important'
    }
}));

export default useStyles;