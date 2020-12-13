import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    title: {
        fontFamily: 'Shadows Into Light!important',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            fontSize: '4rem'
        },
        textShadow: '2px 1px 0 #000',
    },
    subtitle: {
        fontFamily: 'Shadows Into Light!important',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
            marginBottom: '50px'
        },
        marginBottom: '250px',
        textShadow: '2px 1px 0 #000'
    },
    cards: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%'
    }
}));

export default useStyles;