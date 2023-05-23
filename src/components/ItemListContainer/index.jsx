import ItemList from '../ItemList'
import db from '../../../db/firebase-config'
import { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { NavLink } from 'react-router-dom'
import { getDocs, collection } from 'firebase/firestore'
import '../scss/main.scss'


const ItemListContainer = () => {


const [productos, setProductos] = useState([])
const [categorias, setCategorias] = useState([])
const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('')
const [productosFiltrados, setProductosFiltrados] = useState(productos)
const [loading, setLoading] = useState(true)

const itemRef = collection(db, "products")

const getItems = async () => {
  const productsCollection= await getDocs(itemRef)
  const items = productsCollection.docs.map((doc) => ({
    ...doc.data(), 
    id: doc.id
  }));
  setProductos(items)
  setLoading(false)
  const categoriasUnicas = [
    ...new Set(items.map((producto) => producto.category)),
  ];
  setCategorias(categoriasUnicas);
}
useEffect(() => {
  getItems()
}, []);

const handleCategoriaClick = (categoria) => {
  setCategoriaSeleccionada(categoria);
    };

useEffect(() => {
  const productosFiltrados = categoriaSeleccionada ? productos.filter(
      (producto) => producto.category === categoriaSeleccionada) : productos;
    setProductosFiltrados(productosFiltrados);
}, [categoriaSeleccionada, productos]);
    
if (loading) {
  return (
    <section className="sectionSpinner">
      <div className="spinner">
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" />
        <Spinner animation="grow" size="sm" />
      </div>
    </section>
  )
}

  return (
  <> 
  <div className="categorias-btn">
  <div><h4>Categorias</h4></div>
  <div>
    {categorias.map((categoria) => (
      <NavLink key={categoria} to={`/products/category/${categoria}`} 
      onClick={()=> handleCategoriaClick(categoria)}>
        <button className="category-btn">{categoria}</button>
      </NavLink> 
    ))}
  </div>
  </div>
  
    
        <div className="card-container">
          {productosFiltrados.map((producto) => (
            <ItemList key={producto.id} producto={ producto } />
          ))}
        </div>
  </>
  );
};

export default ItemListContainer;