import React, { useState } from 'react';
import axios from 'axios';

export const AuthContext = React.createContext({
    //esto es como una inicializacion de mentira, simple estructura
    isAuth: false,
    user: {}
});

const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userData, setUserData] = useState({
        email: '',
        name: '',
        img: ''
    });

    const loginHandler = async (credentials) => {
        try {
            
            const { data } = await axios.post(process.env.REACT_APP_BASE_URL + '/users/login', credentials);
            localStorage.setItem('token', data.token);
            setIsAuthenticated(true);
            setUserData({
                email: data.user.email,
                name: data.user.name,
                img: data.user.profileImage
            })

            return true;
        } catch (error) {
            console.log(error);
        }
    }

    const logoutHandler = async () => {
        const token = localStorage.getItem('token');
        try {
            await axios.post(process.env.REACT_APP_BASE_URL + '/users/logout', {} , {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
            });
            localStorage.removeItem('token');
            setIsAuthenticated(false);
            setUserData({});
        } catch (error) {
            console.log(error);
        }
    }

    const checkTokenExists = async () => {
        const token = localStorage.getItem('token');
        if(token) {
            try {
                const user = await axios.get(process.env.REACT_APP_BASE_URL + '/users/me', {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })
                if(!user){
                    localStorage.removeItem('token');
                } else {
                    setIsAuthenticated(true);
                    setUserData({
                        email: user.data.email,
                        name: user.data.name,
                        img: user.data.profileImage
                    });
                }
            
            } catch (error) {
                console.log(error);
            }
        }  
    }

    const registerHandler = async (credentials) => {
        try {
            const user = await axios.post(process.env.REACT_APP_BASE_URL + '/users', credentials);

            localStorage.setItem('token', user.data.token);

            if(user) {
                setIsAuthenticated(true);
                setUserData({
                    email: user.data.user.email,
                    name: user.data.user.name,
                    img: user.data.user.profileImage
                });
            }
            return true;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        //acá le paso los valores al AuthContext
        <AuthContext.Provider 
        value={{
            isAuth: isAuthenticated,
            user: userData,
            login: loginHandler,
            checkToken: checkTokenExists,
            register: registerHandler,
            logout: logoutHandler
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
