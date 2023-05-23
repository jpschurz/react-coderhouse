import ItemCart from '../ItemCart' 
import Btn from '../Btn/'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import { useCartContext } from '../CartContext'
import { useState } from 'react'
import '../scss/main.scss'



const Cart = () => {
  const { cart, totalPrice, sendOrder } = useCartContext();
  const [email, setEmail] = useState("");


  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  

  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formData.email)) {
      alert('Ingrese un correo electrónico válido.');
      return;
    }    
    sendOrder(formData)
  };


  const handleChange = (e) => {
    setFormData((prevState) => (
      {...prevState,[e.target.id]: e.target.value}))
      if(e.target.id==='email'){
        setEmail(e.target.value)
        }
      };
    
      
  if (cart.length === 0)
  {return (
      <>
      <div className="emptyContainer">
        <div className="emptyCart">
          <h4 className="text-center">No exiten productos en carrito.</h4>
          <Link to='/products'>
            <Btn className="realizarCompra" texto="Terminar Compra"/>
          </Link>
        </div>
      </div>
      </>
    );
  } 
  return (
    <>
    <div className="cart-container">
      {cart.map((producto, index) => (
        <ItemCart key={index} producto={producto} />
      ))}
    </div>
    <div className="checkOutForm">
        <div className="form">
          <div className="">
            <h5 className="my-3 title">Orden de Compra</h5>
              <Form className="container-fluid" onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Mark" onChange={handleChange} type="text" required/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="Apartment, or floor" onChange={handleChange} type="text" required/>
                  </Form.Group>
                
                  <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control placeholder="1512349058" onChange={handleChange} type="text"  required/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="email" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" onChange={handleChange} placeholder="Enter email" required/>
                  </Form.Group>
              
                </Row>
                  <h3 className="totalPrice">
                      TOTAL= $ {totalPrice}
                  </h3>
                
                    <Btn texto={" Generar Orden de Compra "} type="submit"/>
                
              </Form>
          </div>
        </div>
    </div>
  </> 
  )
}

export default Cart;