
import { Fragment } from "react";
import { convertirPrecio } from "./convertirP";
import productosJson from "./productos.json";


export const Product = () => {

  let productos = productosJson; //ACTUALIZADO


  return (

    <Fragment>
        {productos.map(producto =>
            <div className="card" key={producto.id}>
                <figure>
                  <img src={producto.img} alt="producto" />
                </figure>

                <section className="details">
                    <div className="min-details">
                      <h1>{producto.nombre}</h1>
                      <h1 className="price"> {convertirPrecio(producto.price)}</h1>
                    </div>

                    <div className="options">

                        <div className="options-size">
                          <h1>sizes</h1>
                          <ul>
                            <li>xs</li>
                            <li>s</li>
                            <li>m</li>
                            <li>l</li>
                            <li>xl</li>
                          </ul>
                        </div>

                        <div className="options-colors">
                          <h1>colors</h1>
                          <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                          </ul>
                        </div>           
                    </div>

                    <button className="btn">add to cart</button>           
                </section>
            </div>
        )}
    </Fragment>

  );
};
