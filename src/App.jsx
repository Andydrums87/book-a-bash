import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import BlogDetailPage from "./pages/BlogDetail"
import Footer from "./components/Footer"
import Nav from "./components/Nav"

const App = () => {

  return (
  <BrowserRouter>
  <Nav />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Blog" element={<Blog />} />
    <Route path="/blog/:id" element={<BlogDetailPage />} />
   </Routes>
   <Footer />
  </BrowserRouter>
  )
}

export default App
