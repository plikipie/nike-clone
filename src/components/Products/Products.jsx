import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./style";

const products = [
  {
    id: 1,
    name: "Air Zoom Tempo Next Flyease",
    description: "Basketball Shoe",
    price: "Rp 2.000.000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3e50a045-5823-49c5-81df-43eb7fa0891b/air-jordan-1-mid-shoe-BpARGV.jpg",
  },
  {
    id: 2,
    name: "Air Zoom Tempo Next Flyease",
    description: "Basketball Shoe",
    price: "Rp 2.000.000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3e50a045-5823-49c5-81df-43eb7fa0891b/air-jordan-1-mid-shoe-BpARGV.jpg",
  },
  {
    id: 3,
    name: "Air Zoom Tempo Next Flyease",
    description: "Basketball Shoe",
    price: "Rp 2.000.000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3e50a045-5823-49c5-81df-43eb7fa0891b/air-jordan-1-mid-shoe-BpARGV.jpg",
  },
  {
    id: 4,
    name: "Air Zoom Tempo Next Flyease",
    description: "Basketball Shoe",
    price: "Rp 2.000.000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3e50a045-5823-49c5-81df-43eb7fa0891b/air-jordan-1-mid-shoe-BpARGV.jpg",
  },
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography variant="h4"> Our Products </Typography>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
