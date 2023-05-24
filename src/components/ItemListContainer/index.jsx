import ItemList from '../ItemList'
import db from '../../../db/firebase-config'
import { Spinner } from "react-bootstrap";
import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import '../scss/main.scss'


const ItemListContainer = () => {


const [productos, setProductos] = useState([])
const [categorias, setCategorias] = useState([])
const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('')
const [productosFiltrados, setProductosFiltrados] = useState(productos)
const [loading, setLoading] = useState(true)
const {id} = useParams()
const itemRef = id ? query(collection(db, "productos"), where('category', '==', id)):collection(db, "productos")

const getItems = async () => {
  const productsCollection= await getDocs(itemRef)
  const items = productsCollection.docs.map((doc) => ({
    ...doc.data(), 
    id: doc.id
  }));
  setProductos(items)
  const categoriasUnicas = [
    ...new Set(items.map((producto) => producto.category)),
  ];
  setCategorias(categoriasUnicas);
  setLoading(false)
 
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
          <Spinner animation="" size="sm" />
          <span class="sr-only">Loading...</span>          
      </div>
    </section>
  )
}

  return (
  <> 
  <div className="sectionCategorias">
  <div><h2 >Categorias</h2></div>
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