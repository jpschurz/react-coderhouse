import React from 'react'
import db from '../db/firebase-config'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import Login from './components/Login'
import Register from './components/Register'
import Footer from './components/Footer'
import CartProvider from './components/CartContext'
import { getDocs, collection } from 'firebase/firestore'
import { ToastContainer } from 'react-toastify'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import { ProctectedRoute } from './components/ProtectedRoute'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  const [productos, setProductos] = useState([]);

  const itemRef = collection(db, "products")

  const getItems = async () => {
    const productsCollection= await getDocs(itemRef)
    const items = productsCollection.docs.map((doc) => ({
      ...doc.data(), 
      id: doc.id
    }));
    setProductos(items)
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
      <>
      <CartProvider>
        <Navbar />
        <ToastContainer />
        <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/" element={
                <ProctectedRoute>
                  <Home />   
                </ProctectedRoute>}/>
          <Route path="/home" element={
                <ProctectedRoute>
                  <Home />   
                </ProctectedRoute>}/>
          <Route path="/products" element={
                <ProctectedRoute>
                  <ItemListContainer productos={productos}/>
                </ProctectedRoute>} />
          <Route path="/products/:id" element={
                <ProctectedRoute>
                  <ItemDetailContainer productos={productos} />
                </ProctectedRoute>} />
          <Route path="/products/category/beauty" element={
                <ProctectedRoute>
                  <ItemListContainer productos={productos}/>
                </ProctectedRoute>} />
          <Route path="/products/category/jewelery" element={
                <ProctectedRoute>
                  <ItemListContainer productos={productos}/>
                </ProctectedRoute>} />
          <Route path="/products/category/men's clothing" element={
                <ProctectedRoute>
                  <ItemListContainer productos={productos}/>
                </ProctectedRoute>} />
          <Route path="/products/category/women's clothing" element={
                <ProctectedRoute>
                  <ItemListContainer productos={productos}/>
                </ProctectedRoute>} />
          <Route path="/products/category/men's clothing/:id" element={
                <ProctectedRoute>
                  <ItemDetailContainer productos={productos} />
                </ProctectedRoute>} />
          <Route path="/products/category/beauty/:id" element={
                <ProctectedRoute>
                  <ItemDetailContainer productos={productos} />
                </ProctectedRoute>} />
          <Route path="/products/category/jewelery/:id" element={
                <ProctectedRoute>
                  <ItemDetailContainer productos={productos} />
                </ProctectedRoute>} />
          <Route path="/products/category/women's clothing/:id" element={
                <ProctectedRoute>
                  <ItemDetailContainer productos={productos} />
                </ProctectedRoute>} />
          <Route path="/cart" element={
                <ProctectedRoute>
                  <Cart />
              </ProctectedRoute>} />
          <Route path="/register" element={<Register />} />
          <Route path="/404" element={<img className="img-error" src="src/assets/404.png" />} />
        </Routes> 
    </CartProvider>        
    <Footer/>
    </>
  )
}

export default App