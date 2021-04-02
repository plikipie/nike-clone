import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import Slide from 'react-reveal/Slide';
import banner from "../../assets/nike-model.jpg";
import "./style.css";

const Banner = ({refProduct}) => {
  function showProduct(){
    window.scrollTo({
      top:refProduct.current.offsetTop - 30,
      behavior: "smooth"
    })
  }
  return (
    <div className="banner">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
          <Slide left>
            <Typography className="title" variant="h2">
              Everything You Need Is
              <span className="caption"> Already Inside </span>
            </Typography>
            </Slide>
            <Button className="shopping-button" onClick={showProduct}> Get Product </Button>
          </Grid>

          <Grid className="brand" item sm={6}>
          <Slide right>
            <img src={banner} alt="banner" />
          </Slide>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
