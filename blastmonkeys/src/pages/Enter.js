import React from "react"
import circle from '../imgs/crayoncircle.svg'
import {Link} from "react-router-dom";
import './Enter.css';

function Enter(){
    return(

<div className="App">
      <header className="App-header">
        <div class="title">THE BLAST MONKEYS</div>
        <div class="enterContainer">
          <img src={circle} class="circle"/>
          <div class="enter">
            <Link to="/home">ENTER</Link></div>
          </div>
      </header>
    </div>
    )

}

export default Enter;