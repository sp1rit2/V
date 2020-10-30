import React from 'react'
import {Route,Link} from 'react-router-dom'
import './Navbar.css'

function navigate(obj){
    console.log(obj)
    if(obj=='')
    {
        window.location.href="/"
    }
    else if(obj=='sorting')
    {
        window.location.href="sorting"
    }
    else if(obj=='string')
    {
        window.location.href="string"
    }
    else if(obj=='shortestpath')
    {
        window.location.href="shortestpath"
    }
    else if(obj=='R&G')
    {
        window.location.href="R&G"
    }
    else if(obj=='help')
    {
        window.location.href="help"
    }

}
const Navbar = () =>{
    return(
        <div className="navbar">
            <center>
                <div className="keys">
                    <label className="active_class" extact to='/'onClick={()=>navigate('')}>Home</label>
                    <label className="active_class" extact to='/sorting' onClick={()=>navigate('sorting')}>Sorting Algorithm</label>
                    <label className="active_class" extact to='/string' onClick={()=>navigate('string')}>String Algorithm</label>
                    <label className="active_class" extact to='/shortestpath' onClick={()=>navigate('shortestpath')}>Shortest Path</label>
                    <label className="active_class" extact to='/rng' onClick={()=>navigate('R&G')}>Recursion & Graph</label>
                    <label className="active_class" extact to='/help' onClick={()=>navigate('help')}>Help</label>
                    {/* <div className='range-div'>
                        <label className='range-label'>Sixe : </label>
                        <input className='range-input' type="range" min="1" max="1000" defaultValue="500"></input>
                    </div> */}
                </div>
            </center>
        </div>
    );
}
export default Navbar