import { useCartContext } from '../CartContext'
import '../scss/main.scss'



const CartWidget = () => {

  const { totalProducts } = useCartContext();

  return (
    <>
      <div className="shop">
        <span className='number'> {totalProducts() || ''} </span>
      </div>
    </>
  )

}

export default CartWidget;