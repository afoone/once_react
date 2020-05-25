import React from 'react';
import './App.css';
import Principal from './components/Principal';

function App() {


  localStorage.setItem(
    "user",
    JSON.stringify(
      {
        nombre: "Luisa",
        rol: "admin"
      }
    )
  )

  return (
    < div className="App" >
      <Principal />
    </div >
  );
}

export default App;
