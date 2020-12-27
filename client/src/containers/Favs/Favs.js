import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/auth-context';
import { Redirect } from 'react-router-dom';
import {
    DeleteForeverOutlined,
    AddShoppingCart
} from '@material-ui/icons';
import {
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    IconButton
} from '@material-ui/core';
import { getFavs, deleteFav } from '../../utils/favsFunctions';


function Favorites() {
    const authContext = useContext(AuthContext);

    const [favs, setFavs] = useState([]);

    useEffect(() => {
        if (authContext.isAuth) {
            (async () => {
                const result = await getFavs();
                setFavs(result);
            })();
        }
    }, [authContext.isAuth]);

    function deleteFromFavs(id) {
        if (authContext.isAuth) {
                (async () => {
                    await deleteFav(id);
                    setFavs(favs.filter((item) => (item._id).toString() !== id));
                    authContext.favs = authContext.favs.filter((favId) => favId.toString() !== id);
                })();
        }
    }

    return (
        <React.Fragment>
            {!authContext.isAuth ? <Redirect to="/" /> : null}
            {
                favs.length > 0 ? favs.map((favItem) => {
                    return (
                        <ListItem key={favItem._id} divider alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="product image" src="/product1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary={favItem.productName}
                            />
                            <IconButton edge="end">
                                <AddShoppingCart />
                            </IconButton>
                            <IconButton edge="end" onClick={() => deleteFromFavs(favItem._id)}>
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