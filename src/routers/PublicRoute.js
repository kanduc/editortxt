import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PublicRoute = ({
    isAuthenticated, //si está autenticado
    component:Component, //tendría que ser renombrado para que se con C mayúscula
    ...rest //exact , path , etc
}) => {
    //si està autenticado muestra el componente, sino redirige al login
    return (
      <Route {...rest}
      
        component={(props)=>(

            (isAuthenticated)? 
            <Redirect to="/"/>:
            <Component {...props} />
    


        )}



      />
    )
}

PublicRoute.propTypes={
    isAuthenticated:PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}