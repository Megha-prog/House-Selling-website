import React  from 'react'
import './Hero.css'

const Hero = () => {
    return (
        
        <div className='hero style:{{width:"100%"}}'>
            <div className='content'>
                <h1>Find the perfect place</h1>
                <p className='search-text'> Search the largest selection of luxury high-rise apartments, multi-family homes, and luxury homes. </p>
                <form className='search'>

                    <div>
                        <input type='text' placeholder='Enter Keyword..' />
                    </div>
                    <div className='radio'> 
                        <input type='radio'name="select" checked />
                        <label>Buy</label>
                        <input type='radio' name="select" />
                        <label>Rent</label>
                      
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero