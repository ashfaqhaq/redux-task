import React, { Fragment } from "react";
import background from '../images/background.jpg'
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Paper from 'material-ui/Paper';
const styles = {
    paperContainer: {
        backgroundImage: `url(${background})`
    }
};



const  LandingPage =()=> {
    return (
        <Fragment>
        <CssBaseline />
        <Paper style={styles.paperContainer}>
        <Button size="small" variant = "contained" color="primary" onClick={()=>{}}>
                           Order Now
         </Button>
                          {/*<Link></Link>*/}
        </Paper>
    </Fragment>
    )
}

export default LandingPage
