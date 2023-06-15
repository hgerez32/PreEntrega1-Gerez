import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Components
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar/>
        {/* <ItemListContainer greeting={'Bienvenidos'}/> */}
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>         
        {/* <ItemListContainer greeting={'Bienvenidos'}/>
        <ItemDetailContainer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App
