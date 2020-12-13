import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    title: {
        fontFamily: 'Shadows Into Light!important',
        color: 'white',
        [theme.breakpoints.down('xs')]: {
            fontSize: '4rem'
        },
        textShadow: '2px 1px 0 #000',
    },
    subtitle: {
        fontFamily: 'Shadows Into Light!important',
        color: 'white',
        [theme.breakpoints.down('xs')]: {
            fontSize: '2rem',
            marginBottom: '50px'
        },
        marginBottom: '150px',
        textShadow: '2px 1px 0 #000'
    }
}));

export default useStyles;

