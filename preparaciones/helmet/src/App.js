import React, { useState } from 'react';
import {Helmet} from 'react-helmet'

function App() {


  const [tema, setTema] = useState("light")

  return (
    <div className="App">
      <Helmet>
        <title>{tema} - Título generado con helmet</title>
        <link rel="stylesheet" href={`${tema}.css`}/>
        <meta name="description"
         content="Descripcion de la página generada con helmet"
      />
      </Helmet>
      
        <h1>
          app
        </h1>
        <button onClick={()=> setTema("light")}>light</button>
        <button onClick={()=> setTema("dark")}>dark</button>
      
    </div>
  );
}

export default App;
