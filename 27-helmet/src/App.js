import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'


function App() {

  const [tema, setTema] = useState("light")

  useEffect(() => {
    console.log("component did mount")
  }, [])

  return (
    <div className="App">
      <Helmet>
        <title>{tema} - Helmet App</title>
        <meta
          name="description"
          content={"Sitio de helmet en versión " + tema}
        />
        <link rel="stylesheet" href={tema + ".css"}></link>
      </Helmet>
      <h1>App</h1>
      <button onClick={() => setTema("light")}>light</button>
      <button onClick={() => setTema("dark")}>dark</button>
    </div>
  );
}

export default App;
