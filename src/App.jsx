
import { Fragment, useState } from "react"
import { Cart } from "./Cart";
import { Precart } from "./Precart";
import { Product } from "./Product"

import productosJson from './productos.json'

export const App = () => {

    let productos = productosJson;

  return (
    <Fragment>

        <h1 className="titulo-principal">Productos</h1>

        <Precart/>

        <div className="cards"> 
            <Product productos={productos} />
        </div> 

    </Fragment>

  )
}
