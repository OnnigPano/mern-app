import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button } from '@material-ui/core';
import { AddOutlined } from '@material-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '120px',
        width: '45%',
        marginTop: '10px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
        [theme.breakpoints.up('sm')]: {
            height: '200px',
            width: '280px',
        }
    },
    chip: {
        position: 'absolute',
        bottom: '5px',
        right: '5px',
    }
}));

function CustomizedPaper(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Paper
                className={classes.root}
                elevation={8}
                style={{ backgroundImage: `url(${props.image})` }}
            >
                <Button
                    className={classes.chip}
                    variant="contained"
                    color="primary"
                    endIcon={<AddOutlined />}
                    size="small"
                    disableElevation
                    to={props.target}
                    component={RouterLink}
                >
                    {props.category}
                </Button>
            </Paper>
        </React.Fragment>
    );
}

export default CustomizedPaper;