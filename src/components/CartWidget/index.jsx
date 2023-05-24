import { useCartContext } from '../CartContext'



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