import React, { useState } from "react";
import axios from 'axios';
import validator from 'validator';
import { Card, Button, TextField, Typography, LinearProgress  } from '@material-ui/core';
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
        height: 400     
    },
    typography: {
        fontWeight: 500,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: 3000
    }
})

const Auth = () => {
    const classes = useStyles();
    const [emailValue, setEmailValue] = useState('');
    const [passValue, setPassValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [loginError, setLoginError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isRegister, setIsRegister] = useState(true);
    const [registerErrors, setRegisterErrors] = useState({
        email: {
            error: false,
            msg: 'Ingrese un e-mail válido'
        },
        name: {
            error: false,
            msg: 'El nombre de usuario es obligatorio'
        },
        password: {
            error: false,
            msg: 'La contraseña debe contener al menos 6 caracteres'
        }
    });

    let url = isRegister ? 'http://localhost:5000/users' : 'http://localhost:5000/users/login';

    const inputHandler = (event, stateHandler, type) => {
        stateHandler(event.target.value);
        registerValidator(event.target.value, type)
    }

    const authenticationHandler = async (event) => {
        event.preventDefault();
        setLoading(true);
        setLoginError(false);
        
        const credentials = {
            email: emailValue,
            password: passValue,
            name: nameValue
        }

        try {
            const response = await axios.post(url, credentials);
            console.log(response);
            setLoading(false);
        } catch (e) {
            console.log(e.response)
            !isRegister && setLoginError(true);
            setLoading(false);
        }    
    }

    const registerValidator = (value, type) => {
        if(type === 'email') {
            setRegisterErrors({...registerErrors, email: {...registerErrors.email, error: !validator.isEmail(value.trim())}});
        } else if (type === 'name') {
            setRegisterErrors({...registerErrors, name: {...registerErrors.name, error: validator.isEmpty(value.trim())}});
        } else if (type === 'password') {
            setRegisterErrors({...registerErrors, password: {...registerErrors.password, error: value.trim().length < 6}}) 
        }
    }

    return (    

        <Card className={classes.root} >                
                <Typography className={classes.typography} component="h2" variant="h5" align="center">Ingresá tus datos</Typography>

                {loginError && <Typography color="secondary" component="span" variant="subtitle2" align="center" >Datos de usuario inválidos</Typography>}

                <form className={classes.form} onSubmit={(e) => authenticationHandler(e)} noValidate>
                    {isRegister && <TextField 
                                    error={registerErrors.name.error}
                                    type="text" 
                                    label="Usuario" 
                                    variant="outlined"
                                    value={nameValue} 
                                    helperText={registerErrors.name.error && registerErrors.name.msg}
                                    onChange={(e) => inputHandler(e, setNameValue, 'name')} 
                                    />}

                                    <TextField 
                                    error={loginError || registerErrors.email.error} 
                                    type="email"
                                    label="E-mail" 
                                    variant="outlined"
                                    value={emailValue} 
                                    helperText={registerErrors.email.error && registerErrors.email.msg}
                                    onChange={(e) => inputHandler(e, setEmailValue, 'email')} 
                                    />

                                    <TextField 
                                    error={loginError || registerErrors.password.error} 
                                    type="password"
                                    label="Contraseña" 
                                    variant="outlined"
                                    helperText={registerErrors.password.error && registerErrors.password.msg} 
                                    onChange={(e) => inputHandler(e, setPassValue, 'password')} 
                                    />
                
                    {loading ? <LinearProgress  color="primary" /> 
                             : <Button variant="contained" color="primary" type="submit" size="large">
                                {isRegister ? 'Registrarse' : 'Iniciar Sesión'}
                                </Button>}
                </form>

                <Typography variant="caption" component="small" align="center">
                    {isRegister ? '¿Ya tienes usuario?' : '¿No tienes usuario?'} 
                    <Button size="small" disableRipple disableElevation onClick={() => setIsRegister(!isRegister)} >
                        {isRegister ? 'Iniciar sesión' : 'Registarse'}
                    </Button>
                </Typography>
        </Card>    
    );
}

export default Auth;

