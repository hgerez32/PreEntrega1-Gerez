import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Components
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
  )
}

export default App
