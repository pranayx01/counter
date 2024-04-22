import { useState } from "react";
import './App.css';
import './index.css';


function FavColor()
{
    const [color,setColor]= useState("") ;

    return(
        <div className="top">
    <div style={{ backgroundColor: color}}> 
    <h1>My Fav color is {color}!!</h1>
    <button type="button" onClick={() => setColor("red")}  >Red</button>
    <button type="button" onClick={() => setColor("blue")}  >Blue</button>
    <button type="button" onClick={() => setColor("green")}  >green</button>
    <button type="button" onClick={() => setColor("grey")}  >grey</button>
    </div>
    </div>
    );
}

export default FavColor; 