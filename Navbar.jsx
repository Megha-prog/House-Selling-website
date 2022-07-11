import React from "react";
import "./Navbar.css"
import SellHouse from "./Sellhouse";
const Navbar = () => {
  
      return (
        <div className="container ">
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#services">Location</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#portfolio">Admission</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact Us</a>
                </li>
    
                <li className="nav-item ">
                    <a  type="nav-link"  href={<SellHouse/>} >Sell House </a>
                </li>
                <li className="nav-item ">
                    <a  type="nav-link"  href="#Buy House" >Buy House </a>
                </li>
            </ul>
        </div>
      </div>
 
      )
  }
  
  export default Navbar
  



