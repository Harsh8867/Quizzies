import React from "react";
import quizLogo from './assets/quizzicalLogo.png'
import './App.css'
import { useEffect } from "react";

export default function Quizzies (){


       function getQues() {
        return  fetch('https://opentdb.com/api.php?amount=5').then(res => res.json());
      }
       
      const data  = getQues();
console.log(data);



    let startQuiz = true;
     function changeQuizState(){
        startQuiz = false
        console.log("working")
     }
  
    return (
        startQuiz  ? 
        <div className="App">
        <div>
          <a href="https://reactjs.org" target="_blank">
            <img src={quizLogo} className="logo react" alt="React logo" />
          </a>
        </div> 
        <button className="bn632-hover bn26" onClick={changeQuizState}>
          Start Quiz!
        </button>
      </div> 
      :
      <div className="App">
      <button className="bn632-hover bn24">
        Start Quiz!
      </button>
    </div> 
    )
}