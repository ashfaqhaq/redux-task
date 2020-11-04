import React, { Component ,Fragment } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from '../Actions/cartActions'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    flexGrow: 1,
  },
  media: {
    height: 140,
  },
});


//to substruct from the quantity


function Cart(props) {
    const handleSubtractQuantity = (id)=>{
        props.subtractQuantity(id);
    }
    
//to add the quantity
const handleAddQuantity = (id)=>{
    props.addQuantity(id);
}
    //to remove the item completely

    const classes = useStyles();
              
        let addedItems = props.items.length ?
            (  
                props.items.map(item=>{
                    return(
                        // <div>
                        <Card className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={item.img}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              {item.title}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                              {item.price}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                         <Button size="small" variant = "contained" color="primary" onClick={()=>{handleAddQuantity(item.id)}} startIcon={<ExposurePlus1Icon/>}>
                            Add 
                          </Button>
                          <Button size="small" color="secondary" variant = "contained"  onClick={()=>{handleSubtractQuantity(item.id)}} startIcon={<ExposureNeg1Icon/> }>
                          Remove 
                        </Button>
                        
                        
                        
                        <Button> Price: Rs {item.price} </Button>
                        <Button>  Quantity: {item.quantity}</Button>
                        
                        </CardActions>
                      </Card>
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
           <>
          
        <CssBaseline />
        <h1> {props.total}</h1>
        <Grid container item xs={12} spacing={3}>
        
       
       {addedItems}
      
  </Grid>
       
        {/*  {addedItems.map((item) => { 
        //     <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} > 
        //     {item}
        //     </Typography>
        //  }) 
        }
       */}
       
        </>
                   
                       
                         
       )
    }



const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total: state.total
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)