import React, {  } from 'react';
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
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import { spacing } from '@material-ui/system';
// import { shadows } from '@material-ui/system';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  spacing: 8,
  
});
  
// class Home extends Component  {
    function Home(props){
        const handleClick = (id)=>{
            props.addToCart(id); 
        }
        const classes = useStyles();
        
        const cardItems =  props.items.map((item)=>{
            return (
                <Card className={classes.root} style={{margin:'1rem'}}  boxShadow={25}>
             
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
                  {console.log(item.inCart)}
                  <CardActions>
                   {(!(item.inCart))? <div> <Button
                    variant="contained"
                    color="secondary"
                   
                    endIcon={<ShoppingCartIcon/> }
                    onClick ={ () => handleClick(item.id)}
                  >
                    Add To cart
                  </Button></div> : 
                  <div><Button
                  variant="contained"
                  color="secondary"
                 
                  endIcon={<RemoveShoppingCartIcon/> }
                  
                >
                  Remove From cart
                </Button> <Button variant="contained"
                color="secondary"  onClick ={ () => handleClick(item.id)} >{item.quant} </Button> </div>}

                    
                   
                  </CardActions>
                </Card>
              );
        }) 
    return (
      <>
          
      <CssBaseline />
      <div style={{ margin: 40 }}>
         <Grid container spacing={1}>
        <Grid container item xs={12} spacing={5}>
        
       
       {cardItems}
      
  </Grid>
  </Grid>
  
        
            
        </div>
        </>
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