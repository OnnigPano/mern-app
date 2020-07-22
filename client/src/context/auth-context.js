import React, { useState } from 'react';
import axios from 'axios';

export const AuthContext = React.createContext({
    //esto es como una inicializacion de mentira, simple estructura
    isAuth: false
});

const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const loginHandler = async (credentials) => {
        try {
            const response = await axios.post('http://localhost:5000/users/login', credentials);
            localStorage.setItem('token', response.data.token);
            setIsAuthenticated(true);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error.toJson());
        }
    }

    const checkTokenExists = async () => {
        const token = localStorage.getItem('token');
        if(token) {
            try {
                const user = await axios.get('http://localhost:5000/users/me', {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })
                return user;
            } catch (error) {
                console.log(error.toJSON())
            }
        }  
    }

    return (
        //acá le paso los valores al AuthContext
        <AuthContext.Provider value={ { isAuth: isAuthenticated, login: loginHandler } }>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
