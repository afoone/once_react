import React from 'react';
import TaskList from './components/TaskList';
import Notifications from './components/Notifications';


function App() {
  return (
    <div className="App">
      <Notifications></Notifications>
      <br></br>
      <TaskList></TaskList>
    </div>
  );
}

export default App;
