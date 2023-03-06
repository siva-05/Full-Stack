import React from "react";
import { useState } from "react";
import './full.css';
import './App.css';

function USESTATE(){
    const [inc,setInc] = useState(0);
    const click = ()=>{
        setInc(inc+450)
    }
    const drop = ()=>{
        setInc(inc-450)
    }

    return (
        <div class="main">
       <h1>Denver-Product</h1>
        <div class="box">
            <a href="payment.html">
            <div class="box-1">
                <img src="https://www.redwolf.in/image/cache/catalog/mens-t-shirts/iron-man-arc-reactor-glow-in-the-dark-t-shirt-438x438.gif" alt="nil" />
            </div>
            <div class="box-2">
                <p>Arc Reactor Marvel Official T-shirt</p>
                <p>T-shirt</p>
                <p>Rs. 450</p>
            </div>
            </a>
        </div>
        <p class="a">{inc}</p>
        <button onClick={click} class="b1">Add</button>
        <button onClick={drop} class="b2">drop</button>
        </div>
    )
    }

    export default USESTATE;
