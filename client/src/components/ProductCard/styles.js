import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        position: 'relative',
        fontSize: '1rem',
        [theme.breakpoints.down('xs')]: {
            maxHeight: '250px'
        }
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    fav: {
        position: 'absolute',
        top: '0px',
        right: '0px',
        color: 'yellow'
    },
    desc: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    title: {
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.2rem'
        }
    },
    actions: {
        justifyContent: 'space-around',
        '& svg' : {
            [theme.breakpoints.up('sm')]: {
                fontSize: 'larger',
            }
        }
    }
}));

export default useStyles;