import React from 'react'
import {Route,Redirect} from 'react-router-dom';

const PrivateRoute = (props) => {
    
    let isauth=true;
    return (
        <>
            { isauth ?
              <Route  path={props.path} exact>{props.children}</Route>
              : <Redirect to="/login"/>
            }
        </>
    )
}

export default PrivateRoute
