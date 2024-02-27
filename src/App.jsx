import React from "react"
import './App.css'
import Erro from "./assets/erro.png"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <img src={Erro} alt="icone de erro" />
  <h1>ERROR 420!</h1>
  <h3>Está página não foi encontrada, tente novamente</h3>
  <button>Carregar novamente</button>
    </>
  )
}

export default App
