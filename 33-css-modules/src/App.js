import React from 'react'
import styles from './App.module.css'
import Componente from './Componente';

const App = () => {


    console.log(styles);

    return (
        <div>
            <div className={styles.header}>
                Bienvenidos a mi app
            </div>
            <Componente></Componente>
        </div>
    )
}

export default App
