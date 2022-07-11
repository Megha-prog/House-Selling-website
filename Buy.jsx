import React from "react";
import { useState } from "react";
export default function Buy()
{
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
        alert(inputs.hear + ","+inputs.apply + ","+inputs.view+" ,"+ inputs.username + " ," +inputs.move);
        localStorage.setItem("Social Media" ,inputs.hear);
        localStorage.setItem("Apply" ,inputs.apply);
        localStorage.setItem("username" ,inputs.username);
        localStorage.setItem("View" ,inputs.view);
        localStorage.setItem("move" ,inputs.move);
        alert("data stored in local storage");
    }
    return(
      
        <div className="row ">
        <div className="col-75">
        <div className="container">
          <form >
    
            <div className="row">
              <div className="col-50">
                <h1><label  >Apply for Rent or Rent to Own</label></h1>
                <p>Please fill each field if something is not applicable silply put N/A there... </p>
                 <label>How did you hear about US?</label>

                <input type="radio" id="facebook" name="hear"  onChange={GetData} value=""/>
                <label for="css">Facebook</label>

                <input type="radio" name="hear" id="google" onChange={GetData} value=""/>
                <label for="css">Google</label>

                <input type="radio"  name="hear" id="linkedin"  onChange={GetData} value=""/>
                <label for="css">Linkedin</label>

                <input type="radio"  name="hear"id="website" onChange={GetData} value=""/>
                <label for="css">Our Website</label>


            <br/>
            <br/>
            <label> i would like to apply for ?</label>
           
                <input type="radio"  name="apply"  onChange={GetData} />
                <label for="">Rent</label>
                <input type="radio" name="apply"  onChange={GetData} />
                <label for="">Buy</label>
                <input type="radio"  name="apply"  onChange={GetData} />
                <label for="">Rent by own</label>
              
            </div> 
        </div>
        </form>
          
            <div>
                <h1><label>Accommodation Infromation ?</label></h1>
            </div>
            <div>
                <label>Which house are you interrested In ?</label>
                <input type="text" class="form-control mb-2 mr-sm-2 col-lg-4" name="username" 
                 onChange={GetData}/>
            </div>

            <div>
                <label>When are you interested to view house ?</label>
                <input type="text" class="form-control mb-2 mr-sm-2 col-lg-4" name="view"  onChange={GetData}/>
            </div>
           
            <div>
            <label>When are you looking to move ?</label>
                <input type="text" class="form-control mb-2 mr-sm-2 col-lg-4" name="move"  onChange={GetData}/>
            </div>

            <div>
                <button type="button" onClick={ShowData}>Submit</button>
            </div>

          
            </div>
       
        </div>
        </div>
       
        
     );
}