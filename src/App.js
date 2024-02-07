import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListUser from './components/ListUser'
import EditUser  from './components/EditUser'
import CreateUser from './components/CreateUser'

function App() {
  return (
    <div className='container'>
      <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" >Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" >Home</a>
        <a className="nav-link" >Features</a>
        <a className="nav-link" >Pricing</a>
        
      </div>
    </div>
  </div>
</nav>
  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ListUser/>} exact></Route>
      <Route path='/agregarUsuraio' element={<CreateUser/>} exact></Route>
      <Route path='/editarUsuraio' element={<EditUser/>} exact></Route>
    </Routes>
    </BrowserRouter>
    </div>
  
  )
}

export default App