import React from 'react';
import PersonCard from './components/PersonCard';

function App() {


  const persona = {
    name: "Cristina",
    joined: 2019,
    quote: "Soy fotógrafa de bodas",
    friends: 13
  }

  return (
    <div className="App">
      <PersonCard persona ={persona} ></PersonCard>
    </div>
  );
}

export default App;
