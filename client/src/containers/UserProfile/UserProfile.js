import React from 'react';
import {
    Grid,
    Card,
    CardHeader,
    Avatar,
    TextField,
    Container,
    CardContent,
    Button
} from '@material-ui/core';
import useStyles from './styles';


function UserProfile() {

    const classes = useStyles();

    return (
        <Container style={{ marginTop: '20px' }} maxWidth="md">
            <Card className={classes.root}>
                <CardHeader
                    avatar={<Avatar className={classes.avatar} variant="rounded">JP</Avatar>}
                />
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField label="Nombre" defaultValue="Juan" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField label="Apellido" defaultValue="Perez" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField label="Email" defaultValue="juanperez@gmail.com" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField label="Calle" defaultValue="Calle Falsa " fullWidth />
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <TextField label="Altura" defaultValue="123" fullWidth />
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <TextField label="Piso" defaultValue="-" fullWidth />
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <TextField label="Dpto" defaultValue="-" fullWidth />
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <TextField label="Codigo Postal" defaultValue="1616" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField label="Telefeno" defaultValue="11-5676-3456" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <Button variant="contained" color="secondary">
                                Actualizar Datos
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
}

export default UserProfile;