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
    }
}));

export default useStyles;