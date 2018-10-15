import React from 'react';

import { withAuthContext } from "./Auth";

function Profile({username, isAuthenticated}) {
    return (
        isAuthenticated ?
            <div>
                <h3>{username}</h3>
                <img src="https://www.indiewire.com/wp-content/uploads/2018/09/avatar-102-16x9.jpg?w=780" alt="" />
            </div>
            :
            <p>Please login</p>
    )
}

export default withAuthContext(Profile)
