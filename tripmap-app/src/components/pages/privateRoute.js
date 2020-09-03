import React from 'react';
import {Route} from 'react-router-dom';
import Wraper from './wrapper';

const PrivateRoute = ({component: WrapperComponent, ...rest}) => {
  
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            <Wraper {...props} /> 
 
        )} />
    );
};

export default PrivateRoute;