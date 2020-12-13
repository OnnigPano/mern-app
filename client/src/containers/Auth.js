import React, { useState, useContext } from "react";
import validator from 'validator';
import { Card, Button, TextField, Typography, LinearProgress, Link } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from '../context/auth-context';

import BackImg from '../components/BackImg';
import { Redirect } from "react-router-dom";

/* 
Faltaría validar cuando se envía el registro de usuario vacío,
también si el email registrado ya existe
*/

const useStyles = makeStyles((theme) => ({
    root: {
        width: '94%',
        maxWidth: 400,
        marginRight: 'auto',
        marginLeft: 'auto',
        padding: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: 340,
        backgroundColor: 'rgba(255,255,255,0.8)',
        [theme.breakpoints.up('md')]: {
            marginRight: '80px',
        },
    },
    typography: {
        fontWeight: 500,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: 280
    }
}));

const Auth = (props) => {
    const classes = useStyles();
    const [emailValue, setEmailValue] = useState('');
    const [passValue, setPassValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [loginError, setLoginError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
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

    const authContext = useContext(AuthContext);

    const inputHandler = (event, stateHandler, type) => {
        stateHandler(event.target.value);
        registerValidator(event.target.value, type);
        if (loginError) setLoginError(false);
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

        let success;
        if (isRegister) {
            success = await authContext.register(credentials);
        } else {
            success = await authContext.login(credentials);
        }

        if (!success) {
            setLoading(false);
            setLoginError(true);
        } else {
            if(props.history.length > 0) {
                props.history.goBack();
            } else {
                props.history.push('/');
            }
        }
    }

    const registerValidator = (value, type) => {
        if (type === 'email') {
            setRegisterErrors({ ...registerErrors, email: { ...registerErrors.email, error: !validator.isEmail(value.trim()) } });
        } else if (type === 'name') {
            setRegisterErrors({ ...registerErrors, name: { ...registerErrors.name, error: validator.isEmpty(value.trim()) } });
        } else if (type === 'password') {
            setRegisterErrors({ ...registerErrors, password: { ...registerErrors.password, error: value.trim().length < 6 } })
        }
    }

    return (
        <React.Fragment>
            {authContext.isAuth ? <Redirect to="/" /> : null}
            <BackImg>
                <Card className={classes.root} >
                    <Typography className={classes.typography} component="h2" variant="h5" align="center">Ingresá tus datos</Typography>

                    {loginError && <Typography color="error" component="span" variant="subtitle2" align="center" >Datos inválidos</Typography>}

                    <form className={classes.form} onSubmit={(e) => authenticationHandler(e)} noValidate>
                        {isRegister && <TextField
                            error={loginError || registerErrors.name.error}
                            type="text"
                            label="Usuario"
                            variant="outlined"
                            size="small"
                            helperText={registerErrors.name.error && registerErrors.name.msg}
                            onChange={(e) => inputHandler(e, setNameValue, 'name')}
                        />}

                        <TextField
                            error={loginError || registerErrors.email.error}
                            type="email"
                            label="E-mail"
                            variant="outlined"
                            size="small"
                            helperText={registerErrors.email.error && registerErrors.email.msg}
                            onChange={(e) => inputHandler(e, setEmailValue, 'email')}
                        />

                        <TextField
                            error={loginError || registerErrors.password.error}
                            type="password"
                            label="Contraseña"
                            variant="outlined"
                            size="small"
                            helperText={registerErrors.password.error && registerErrors.password.msg}
                            onChange={(e) => inputHandler(e, setPassValue, 'password')}
                        />

                        {loading ? <LinearProgress color="primary" />
                            : <Button variant="contained" color="primary" type="submit">
                                {isRegister ? 'Registrarse' : 'Iniciar Sesión'}
                            </Button>}
                    </form>

                    <Typography variant="caption" component="small" align="center">
                        {isRegister ? '¿Ya tienes usuario? ' : '¿No tienes usuario? '}
                        <Link component="button"
                            onClick={() => {
                                setIsRegister(!isRegister)
                                document.getElementsByTagName('form')[0].reset();
                                setEmailValue('');
                                setNameValue('');
                                setPassValue('');
                                setLoginError(false);
                            }
                            }
                        >
                            {isRegister ? 'Iniciar Sesión' : 'Registarse'}
                        </Link>
                    </Typography>
                </Card>
            </BackImg>
        </React.Fragment>
    );
}

export default Auth;

