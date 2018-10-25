import React from 'react'

import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import Toolbar from "@material-ui/core/Toolbar"

const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography varient="title" color="inherit">
                        Choose a Bounty App
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;
