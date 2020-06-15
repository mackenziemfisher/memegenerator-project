import React, {Component} from 'react';
import'./App.css';
import Pics from './Pics.js'
import MemeGenerator from "./Memegenerator.js"

class App extends Component{
   onClickerref = () => {window.location.reload()}
   
render() {
return (
   <div className='App'>
     <h1>Meme Generator</h1>
   <Pics />
   <button onClick={this.onClickerref}>New Meme</button>
   </div>


)


}

}

export default App;
