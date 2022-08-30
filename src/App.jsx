import { useState } from 'react'
import quizLogo from './assets/quizzicalLogo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={quizLogo} className="logo react" alt="React logo" />
        </a>
      </div> 
      <button className="quizBtn">
        Start Quiz!
      </button>
    </div>
  )
}

export default App
