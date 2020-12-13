import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    cards: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            flexBasis: '40%'
        }
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '100%',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            '& div': {
                flexBasis: '40%'
            }
        },
        
    }
}));

export default useStyles;