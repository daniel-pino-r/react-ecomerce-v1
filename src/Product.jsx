
import { Fragment, useState } from "react";

import { convertirPrecio } from "./convertirP";


export const Product = ({productos}) => {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  function calculateTotal(cart) {
      let total = 0;
      cart.forEach((item) => {
          total += item.price * item.quantity;
      });
      return total;
  }

  function handleCalculateTotal() {
      const newTotal = calculateTotal(cart);
      setTotal(newTotal);
  }

  function handleAddItem(item) {
    const existingItem = cart.find((i) => i.id === item.id);
    if (existingItem) {
      const newCart = cart.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
      setCart(newCart);
    } else {
      const newCart = [...cart, { ...item, quantity: 1 }];
      setCart(newCart);
    }
    const newTotal = calculateTotal(cart);
    setTotal(newTotal);
  }
  
  function handleRemoveItem(item) {
    const existingItem = cart.find((i) => i.id === item.id);
    if (existingItem) {
      const newCart = cart.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
      );
      setCart(newCart.filter((i) => i.quantity > 0));
      const newTotal = calculateTotal(newCart);
      setTotal(newTotal);
    }
  }

   
  return (
  <Fragment>

    <div className="carrito-compras">
      <h2>Total: {convertirPrecio(total)}</h2>
        <ul>
          {cart.map(cart =>
            <div>
              <img src={cart.img} alt="" width="40px" />
              <li key={cart.id}>{cart.nombre} x {cart.quantity}</li> 
              <button onClick={() => handleRemoveItem(cart)} >
                Remover
              </button>
            </div>
          )}
        </ul>
    </div>

    {productos.map(producto => 
        <div className="card" key={producto.id}>
          <figure>
            <img src={producto.img} alt="producto" />
          </figure>
          <section className="details">
            <div className="min-details">
              <h1>{producto.nombre}</h1>
              <h1 className="price"> { convertirPrecio(producto.price) }</h1>
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
            <button
              className="btn"
              onClick={() => handleAddItem(producto)}
            >
            add to cart
            </button>
          </section>
        </div>
    )}   
    
  </Fragment>
  );
};
