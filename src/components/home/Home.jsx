import React, { Fragment } from "react";
import {
  Adverts,
  Hero,
  Footer,
  Discount,
  Bestseller,
  Items,
  Parteners,
  Popular,
} from "../../components";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Parteners />
      <Popular />
      <Items />
      <Adverts />
      <Bestseller />
      <Discount />
      <Footer />
    </Fragment>
  );
};

export default Home;
