import React from "react";
import { Card, Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        maxWidth: 450,
        marginTop: 60,
        marginRight: 'auto',
        marginLeft: 'auto',
        padding: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: 350,      
    },
    typography: {
        fontWeight: 500,
    }
})

const Auth = () => {
    const classes = useStyles();
    return (
        
            <Card className={classes.root} >
                    
                    <Typography className={classes.typography} component="h2" variant="h5" align="center">Ingresá tus datos</Typography>

                    <TextField type="email" label="E-mail" variant="outlined" />

                    <TextField type="password" label="Contraseña" variant="outlined" />
                
                    <Button variant="contained" color="primary" >
                        Iniciar Sesión
                    </Button>

                    <Typography variant="caption" component="small" align="center">
                        ¿No tienes usuario?. <b>Registrarse</b>
                    </Typography>

            </Card>
    
    );
}

export default Auth;

