import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./style";



const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography variant="h4"> Our Products </Typography>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id}xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
