import React from "react";
import iphone from "../assets/images/iphone-14.jpg"
import HoldIphon from "../assets/images/iphone-hand.png"

function jumbotron() {
    const handleLearn = ()=>{
const element = document.querySelector(".sound-section");
window.scrollTo({
    top:element.getBoundingClientRect().top,
    left:0,
    behavior: 'smooth'
});
    }
    return(

        <div className="jumbotron-section wrapper">
            <h1 className="title">welcome </h1>
            <img src={iphone} className="logo " alt="Logo"/>
            <p className="text"> our spical project</p>
            <span className="description"> form 8.99$/mo.for 100.00$ </span>

            <ul className="links">
            <li>
                <button className="button">BUY now</button>
            </li>
                <li>
                    <a className="link" onClick={handleLearn}> learn more</a>
                </li>
            </ul>
            <img className="iphone-img" src={HoldIphon} alt="hand-iphone"/>
        </div>
    );
}
export default jumbotron