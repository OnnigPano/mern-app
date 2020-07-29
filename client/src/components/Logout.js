import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/auth-context';


const Logout = props => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.logout();
        props.history.push('/');
    }, []);

    return null;
}

export default Logout;