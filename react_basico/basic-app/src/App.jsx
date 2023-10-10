import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppViewer from "./components/AppViewer";

const mudarNumero = (n) => {
  console.log(n);
  return n + 1;
};
let numero = 15;

function App() {
  return (
    <>
      <h1>Meu Primeiro webapp</h1>
      <AppViewer />
      <p>Número: {numero}</p>
      <button onClick={mudarNumero(numero)}>Apertar e Mudar</button>
    </>
  );
}

export default App;
