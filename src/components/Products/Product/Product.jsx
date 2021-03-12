import React from "react";
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./style";

const Product = ({ product, onAddToCart}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.source}
        title={product.name}
      />
      <CardContent className={classes.cardContent}>
        <Typography className={classes.typography} variant="subtitle1">
          {product.name}
        </Typography>
        <Typography
          className={classes.typography}
          variant="subtitle1"
          color="textSecondary"
          dangerouslySetInnerHTML= {{__html:product.description}}
        />
       
        <Typography className={classes.typography} variant="body1">
          {product.price.formatted_with_symbol}
        </Typography>
      </CardContent>

      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={()=>onAddToCart(product.id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default Product;
