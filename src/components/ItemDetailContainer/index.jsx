import Btn from '../Btn'
import ItemCount from '../ItemCount'
import db from '../../../db/firebase-config'
import { Card, Spinner } from "react-bootstrap"
import { useEffect, useState } from 'react'
import { Link, Navigate, NavLink, useParams } from 'react-router-dom'
import { useCartContext } from '../CartContext/index'
import { doc, getDoc } from 'firebase/firestore'
import '../scss/main.scss'



const itemDetailContainer = () => {
  const [productos, setProductos] = useState({});
  const [loading, setLoading] = useState(true);
  const { addProduct } = useCartContext()
  const [goToCart, setGoToCart] = useState(false)
  const { id } = useParams();
  const queryDoc = doc(db, "products", id);
  const [cartUpdated, setCartUpdated] = useState(false);


  const handleCartUpdate = () => {
    setCartUpdated(!cartUpdated);
  };

  const getProductId = async () => {
    try {  
      const productId = await getDoc(queryDoc)
      setProductos({id: productId.id, ...productId.data()})
      setLoading(false);
    } catch (error) {
      setProductos(null);
    };
  }

    useEffect(() => {
    getProductId();
  
  }, []);

  if (!productos) {
    return <Navigate to="/404" />;
  }

  if (loading) {
    return (
        <div className="spinner">
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" />
            <Spinner animation="grow" size="sm" />
        </div>
    )
  }


  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(productos, quantity);
    
  }
  return (
    <>
    <NavLink to={`/products`} >
        <Btn texto="Todos Los Productos"/>
    </NavLink>
    <div className="tarjeta">
          <Card className="cardProductDetail">
        <div className="product"> 
            <Card.Img className="cardImgDetail" src={productos.image} />
        </div>
            <Card.Body>
                <Card.Title>{productos.title}</Card.Title>
                <Card.Text> {productos.description}</Card.Text>
                <Card.Text> {productos.category}</Card.Text>
                <Card.Text> $ {productos.price}</Card.Text>
            </Card.Body>
          </Card>
       <div className="contador">
          {
            goToCart 
            ? 
            <Link to='/cart' onClick={handleCartUpdate}> 
                <Btn texto="Terminar Compra"/>
            </Link>
            :
              <ItemCount initial ={1} stock={5} onAdd={onAdd} />
           
          }
      </div>
    </div>
      
    </>
  )
}

export default itemDetailContainer