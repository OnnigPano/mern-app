import React, { useState } from 'react';
import {
    Dialog,
    Button
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';



const AuthDialog = (props) => {

    const [redirect, willRedirect] = useState(false);

    return (
        <React.Fragment>
            {redirect ? <Redirect push to="/auth" /> : null}
            <Dialog onClose={() => props.handleClose(false)} open={true}>
                <Button variant="outlined" color="primary" size='large' onClick={() => willRedirect(true)}>
                    Iniciar Sesión
                </Button>
            </Dialog>
        </React.Fragment>
    );
}

export default AuthDialog;