import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import PageNotFound from "./Components/PageNotFound"
import Product from "./Components/Product"
import ProductDetails from "./Components/ProductDetails"
import Cart from './Components/Cart'
import User from './Components/User'

import Profile from "./Components/Profile"
import PaginationProvider from './Components/Context/PaginationContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PaginationProvider>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/home" element={<Navigate to="/" />}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/user" element={<User></User>}></Route>
      </Routes>
      </PaginationProvider>
    </>
  )
}

export default App
