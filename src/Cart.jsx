import { convertirPrecio } from "./convertirP"


export const Cart = (props) => {
  return (
    <div>
        <h2>Total: { convertirPrecio(props.total) }</h2>
    </div>
  )
}
