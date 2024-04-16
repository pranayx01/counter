import { useState } from "react";


function FavColor()
{
    const [color,setcolor]= useState("red") ;

    return(
    <div>
    <h1>My Fav color is {color}!!</h1>
    </div>
    );
}

export default FavColor;