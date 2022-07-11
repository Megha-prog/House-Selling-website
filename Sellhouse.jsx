import React from "react";
import { useState } from "react";
import "./SellHouse.css"
function SellHouse(){

const[inputs,setInputs]=useState("")
    const GetData=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInputs(values=>({...values,[name]:value}))
        //... A component is changing the default value state to an uncontrolled state
        //in some UI we will call in OnChange, OnInput

    }
    const ShowData=(e)=>{
        e.preventDefault();
        alert(inputs.name + ","+inputs.email + ","+inputs.address+" ,"+ inputs.city+" ,"+inputs.hour+","+ inputs.phone);
        localStorage.setItem("Name" ,inputs.name);
        localStorage.setItem("Email" ,inputs.email);
        localStorage.setItem("Address" ,inputs.address);
        localStorage.setItem("Hour" ,inputs.hour);
        localStorage.setItem("phone" ,inputs.phone);
        alert("data stored in local storage");
        
        
    }
  return (
    
     
     <div className="row">
    <div className="col-75">
    <div className="container">
      <form >

        <div className="row">
          <div className="col-50">
            <h1><strong  >Sell Your Home</strong></h1>
            <label for="fname"><i className="fa fa-user" ></i> Title</label>
            <input type="text" id="fname" name="name" onChange={GetData} placeholder="Megha"/>

            <label for="email"><i class="fa fa-envelope" name="email"></i> Email</label>
            <input type="text" id="email" name="email" onChange={GetData}  placeholder="megha@example.com"/>
           
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" onChange={GetData} placeholder="542 W. 15th Street"/>

            <input type="checkbox"  name="map" value="map"  onChange={GetData} />
            <label for="map"> Show Map</label>


            <label for="adr"><i class="fa fa-address-card-o"></i> Phone Number</label>
            <input type="text" id="email" name="phone" onChange={GetData}  placeholder="+91-92321-36335"/>

            

            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" onChange={GetData} placeholder="India"/>
            
            <label for="city"><i class="fa fa-institution"></i> Hour</label>
            <input type="text" id="city" name="hour" onChange={GetData} placeholder=""/>
            
           
            </div> 
             </div>
             </form>
             <div >
                <a className="text" href="." style={{padding:"10px"}} >Remove</a>
                

                <a className="text" href="."  ml-10px>Done</a>
           
                <button className="btn"   type="button" onClick={ShowData}>Visibility</button>
            </div>
            </div>
         
  
    </div>
  </div>

  );

  }
export default SellHouse;