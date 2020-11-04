import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
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
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          
          <Link to="/" className="brand-logo">Shopping</Link>
          <Link to="/">Order Now</Link>
                        <Link to="/cart">My cart</Link>
                        <Link to="/cart"><i className="material-icons">shopping_cart</i></Link>
         
          <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={props.items} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
         
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