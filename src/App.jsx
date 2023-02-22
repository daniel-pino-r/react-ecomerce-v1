
import { Fragment, useState } from "react";
import { Product } from "./Product";


export const App = () => {



  return (
    <Fragment>
      <h1 className="titulo-principal">Productos</h1>
      <div className="cards">
          <Product/>
      </div>
    </Fragment>
  );
};
