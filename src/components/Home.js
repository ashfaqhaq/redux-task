import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../Actions/cartActions'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
  
// class Home extends Component  {
    function Home(props){
        const handleClick = (id)=>{
            props.addToCart(id); 
        }
        const classes = useStyles();
        const cardItems =  props.items.map((item)=>{
            return (
                <Card className={classes.root}>
             
                  <CardActionArea>
                    <CardMedia
                      // className={this.classes.media}
                      className={classes.media}
                      image={item.img}
                      title={item.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {item.desc}
                      </Typography>
                      
                      <Button color="primary"><LocalAtmIcon /> Rs {item.price}</Button>
                      
                      <Button color="secondary"><FastfoodIcon /> {item.calories} calories</Button>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                   
                    <Button
                    variant="contained"
                    color="secondary"
                   
                    endIcon={<ShoppingCartIcon/> }
                    onClick ={ () => handleClick(item.id)}
                  >
                    Add To cart
                  </Button>
                   
                  </CardActions>
                </Card>
              );
        }) 
    return (
        <div>
            {cardItems}
        </div>
    )
    
  }                                

  const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

  

export default connect(mapStateToProps,mapDispatchToProps)(Home)