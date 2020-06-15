import React, { Component } from 'react';
import './App.css';
import Meme1 from "./pics/meme123.png"
import Meme2 from "./pics/meme456.png"
import MemeGenerator from "./Memegenerator.js"

class pics extends Component{
render() {
const imageArray = [Meme1, Meme2]
let randomMemeNum  = Math.floor(Math.random() * imageArray.length)
let imageMapper = imageArray.map((image) => {
     return <img src={image} width="45%" height="45%"></img>
});
console.log(imageMapper[randomMemeNum])
return (
<div className= "App">
    {imageMapper[randomMemeNum]}
</div>

);

}
} 
export default pics;
