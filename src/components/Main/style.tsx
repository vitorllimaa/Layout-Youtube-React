import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({

    listItemText: {
        fontSize: '14px!important',
        fontWeight: '600!important',
        paddingLeft: 10
    },

    imgPerfil: {
        width: '3vw',
        height: '3vw',
        borderRadius: '50%',
        marginRight: 10
    },

    textList: {
        fontWeight: '600!important',
        fontSize: '.90em!important'
    },

    textDetail: {
        fontWeight: 'bolder',
        fontSize: '89%!important',
        paddingLeft: 46
    },
}));

export default useStyles;