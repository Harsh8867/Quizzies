<<<<<<< HEAD
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Quizzies from "./quizzies";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <Quizzies />
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </div>
  );
=======
import { useState } from 'react'
import './App.css'
import Quizzies from './quiz'

function App() {
  return (
    <Quizzies/>
  )
>>>>>>> d5c13147277ac0b3698b36346902db8b949f25d9
}

export default App;
