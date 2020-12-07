import React, { useState } from 'react';
import {
    Dialog,
    Button
} from '@material-ui/core';



const AuthDialog = (props) => {
    
    function handleClose() {
        setDialog(false);
    }

    const [open, setDialog] = useState(true);

    return (
        <Dialog onClose={() => props.handleClose(false)} open={open}>
            <Button variant="outlined"  color="primary" size='large' onClick={() => window.location = '/auth'}>
                Iniciar Sesión
            </Button>
        </Dialog>
    );
}

export default AuthDialog;