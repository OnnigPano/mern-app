import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/auth-context';
import { Redirect } from 'react-router-dom';
import { DeleteForeverOutlined } from '@material-ui/icons';
import {
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    IconButton
} from '@material-ui/core';
import axios from 'axios';


function Favorites() {
    const authContext = useContext(AuthContext);

    const [favs, setFavs] = useState([]);

    useEffect(() => {
        getFavs();
    }, []);

    async function getFavs() {
        if (authContext.isAuth) {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    let { data } = await axios.get(process.env.REACT_APP_BASE_URL + '/favs', {
                        headers: {
                            'Authorization': 'Bearer ' + token
                        }
                    });
                    console.log(data.favs);
                    setFavs(data.favs);
                } catch (e) {
                    console.log(e);
                }
            }
        }
    }

    return (
        <React.Fragment>
            {!authContext.isAuth ? <Redirect to="/" /> : null}
            {
                favs ? favs.map((favItem) => {
                    return (
                        <ListItem key={favItem._id} divider alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="product image" src="/product1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary={favItem.productName}
                            />
                            <IconButton edge="end">
                                <DeleteForeverOutlined />
                            </IconButton>
                        </ListItem>
                    );
                }) : "Sin favoritos...."
            }
        </React.Fragment>
    );
}

export default Favorites;