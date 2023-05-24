import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const itemList = ({ producto }) => {


  return (
    <Link to={`${producto.id}`} className="link">
      <Card className="productoCard ">
        <div className="productoImg">
          <Card.Img className="cardImg" src={producto.image} alt={producto.nombre} />
        </div>
        <Card.Body>
          <Card.Title>{producto.title}</Card.Title>
          <Card.Subtitle>{producto.description}</Card.Subtitle> 
          <Card.Text> $ {producto.price}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default itemList;