import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import Login from './components/Login'
import Register from './components/Register'
import Footer from './components/Footer'
import CartProvider from './components/CartContext'
import { ToastContainer } from 'react-toastify'
import { Route, Routes } from 'react-router'
import { ProctectedRoute } from './components/ProtectedRoute'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  
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
                  <ItemListContainer />
                </ProctectedRoute>} />
          <Route path="/products/:id" element={
                <ProctectedRoute>
                  <ItemDetailContainer  />
                </ProctectedRoute>} />
          <Route path="/products/category/deck" element={
                <ProctectedRoute>
                  <ItemListContainer />
                </ProctectedRoute>} />
          <Route path="/products/category/juegos de mesa" element={
                <ProctectedRoute>
                  <ItemListContainer />
                </ProctectedRoute>} />
          <Route path="/products/category/figuras de colección" element={
                <ProctectedRoute>
                  <ItemListContainer />
                </ProctectedRoute>} />
          <Route path="/products/category/merchandansing" element={
                <ProctectedRoute>
                  <ItemListContainer />
                </ProctectedRoute>} />
          <Route path="/products/category/deck/:id" element={
                <ProctectedRoute>
                  <ItemDetailContainer />
                </ProctectedRoute>} />
          <Route path="/products/category/juegos de mesa/:id" element={
                <ProctectedRoute>
                  <ItemDetailContainer  />
                </ProctectedRoute>} />
          <Route path="/products/category/figuras de colección/:id" element={
                <ProctectedRoute>
                  <ItemDetailContainer  />
                </ProctectedRoute>} />
          <Route path="/products/category/merchandansing/:id" element={
                <ProctectedRoute>
                  <ItemDetailContainer  />
                </ProctectedRoute>} />
          <Route path="/cart" element={
                <ProctectedRoute>
                  <Cart />
              </ProctectedRoute>} />
          <Route path="/register" element={<Register />} />
          <Route path="/404" element={<img className="img-error" src='src/assets/404.png' />} />
        </Routes> 
    </CartProvider>        
    <Footer/>
    </>
  )
}

export default App;