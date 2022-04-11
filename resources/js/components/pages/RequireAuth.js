import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import { Navigate } from 'react-router-dom';
import AuthInfoContext from '../contexts/AuthInfoContext';

export default function RequireAuth({children, redirectTo}) {
    let { isAuthenticated } = useContext(AuthInfoContext);
    return isAuthenticated ? children : <Navigate to={redirectTo}/>
    
}
