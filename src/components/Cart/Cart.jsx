import React from 'react';
import {Container, Typography, Button, Grid} from '@material-ui/core';
import useStyles from './style';
import {Link} from 'react-router-dom'
import CartItem from '../Cart Item/CartItem';

const Cart = ({cart, handleEmptyCart, handleUpdatedCartQty, handleRemoveFromCart}) => {
    const classes = useStyles();
    const isEmpty = !cart.line_items.length;

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart, <Link to="/" className={classes.link}>start adding some</Link>!</Typography>
    );

    const FilledCart = () => (
        <>
        <Grid container spacing={3}>{cart.line_items.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} onUpdateCartQty={handleUpdatedCartQty} onRemoveFromCart={handleRemoveFromCart}/>
            </Grid>
        ))}
        </Grid>

        <div className={classes.cardDetails}>
            <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
            <div>
                <Button className={classes.emptybutton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                <Button classesName={classes.checkoutButton} size="large" type="button" varian="contained" color="primary">Checkout</Button>

            </div>
        </div>
        </>
    )

    if(!cart.line_items) return 'Loading....'
    return (
        <Container>
            <div classes={classes.toolbar}/>
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shoping Cart</Typography>
            {isEmpty ? <EmptyCart/> : <FilledCart/>}
        </Container>
    )
}

export default Cart
