import React, {useContext} from 'react';
import LoginContext from "../Authentic";
import {Route, Redirect} from "react-router-dom";

function Profile() {
    const handleLog = useContext(LoginContext)
    return (
        <div>
            <Route>
            {
                handleLog.loggedIn ?
                    <h2 style={{textAlign: 'center'}}>Profile</h2>:
                <Redirect to='/'/>
            }
            </Route>
            </div>
            );
}

export default Profile;