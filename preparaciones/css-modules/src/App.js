import React from 'react';
import styles from './App.module.css';

function App() {

  console.log(styles.header);

  return (
    <div className="App">
      <div className={styles.header}>
        Mi app
      </div>
    </div>
  );
}

export default App;
