import React from 'react';
import TablaFiltrada from './components/TablaFiltrada'
import Fotos from './components/Fotos'
import Header from './components/Header'
import { MemoryRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App ">
      {/* <TablaFiltrada></TablaFiltrada> */}

      <Router>
        <Header></Header>
        <div className="ui container">
          <Route exact path="/fotos" component={Fotos}></Route>
          <Route exact path="/posts" component={TablaFiltrada}></Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
