import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      justifyContent:'space-between',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

 const Navbar = (props)=>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
      <AppBar position="static"  justify="space-between" >
        <Toolbar>
        <Grid
        justify="space-between" // Add it here :)
        container 
        spacing={24}
      >
      <Grid item>
         <Link to ="/" style={{color:'white'}}>
         <IconButton color="inherit" >
         
         Order
         </IconButton>
         </Link>
         </Grid>   
        
         <Grid item>
          <Link to="/cart" style={{color:'white'}}> 
          <IconButton color="inherit" >
          <Badge badgeContent={props.items} color="secondary">
          <ShoppingCartIcon />
          </Badge>
         Cart
        </IconButton>
        </Link>
        </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
    </div>      
    )
}
const mapStateToProps = (state)=>{
    return {
      items: state.cartItems
    }
  }

export default connect(mapStateToProps)(Navbar)