import { BrowserRouter as Router,Link ,Route,Routes } from "react-router-dom";
import './Home.css'
import Hero from "./Hero";
//import Navbar from "./Navbar";
import SellHouse from "./Sellhouse";
import How from "./Howit works";
import Buy from "./Buy";

export default function Home()
{
    return(
        <Router>
           
                <ul className="horizontal">
                    <li><Link to="/Hero">Home</Link></li> 
                    <li><Link to="/SellHouse">SellHouse</Link></li> 
                    <li><Link to="/HowitWorks">Howitworks</Link></li> 
                    <li><Link to="/Buy">Buy</Link></li> 
                   
                </ul>
                <Routes>
                    <Route exact path="/Hero" element={<Hero/>}></Route>
                    <Route exact path="/SellHouse" element={<SellHouse/>}></Route>
                    <Route exact path="/HowitWorks" element={<How/>}></Route>
                    <Route exact path="/Buy" element={<Buy/>}></Route>
                 
                  
               
                </Routes>
            

        </Router>
    )
}