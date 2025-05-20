import { useState } from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import BlogDetailPage from "./pages/BlogDetail"
import Footer from "./components/Footer"
import Nav from "./components/Nav"

const App = () => {

  return (
  <HashRouter>
  <Nav />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Blog" element={<Blog />} />
    <Route path="/blog/:id" element={<BlogDetailPage />} />
   </Routes>
   <Footer />
  </HashRouter>
  )
}

export default App
