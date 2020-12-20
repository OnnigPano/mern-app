import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    flex: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            minHeight: `calc(${document.querySelector('html').offsetHeight}px - 56px)`,
        },
        [theme.breakpoints.up('sm')]: {
            minHeight: `calc(${document.querySelector('html').offsetHeight}px - 64px)`,
        }
    },
    emptyCart: {
        backgroundImage: 'url(/empty-cart.png)',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: `calc(${document.querySelector('html').offsetHeight}px - 64px)`,
        width: '90%',
        display: 'block',
        margin: '0 auto',
        [theme.breakpoints.up('sm')]: {
            width: '50%'
        }
    },
    price: {
        fontSize: '1rem'
    }
}));

export default useStyles;