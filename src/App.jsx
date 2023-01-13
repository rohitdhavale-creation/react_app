import React from "react";
import ReactDom from "react-dom";

import Nav from './Nav';
import Home from './Home';
import About from './About';
import Services from './Services';
import Project from './Project';
import Blog from './Blog';
import Portfolio from './Portfolio';
import Product from './Product';
import Gallary from './Gallary';
import Contact from './Contact';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App(){
  return(
    <>
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path="/Home" element={<Home></Home>}>Home</Route>
        <Route path="/About" element={<About></About>}>About</Route>
        <Route path="/Services" element={<Services></Services>}>Services</Route>
        <Route path="/Project" element={<Project></Project>}>Project</Route>
        <Route path="/Blog" element={<Blog></Blog>}>Blog</Route>
        <Route path="/Portfolio" element={<Portfolio></Portfolio>}>Portfolio</Route>
        <Route path="/Product" element={<Product></Product>}>Product</Route>
        <Route path="/Gallary" element={<Gallary></Gallary>}>Gallary</Route>
        <Route path="/Contact" element={<Contact></Contact>}>Contact</Route>
      </Routes>
    </Router>
    </>
  )
}
export default App;