import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Prediction from './pages/prediction/Prediction'
import News from './pages/news/News'
import Scores from './pages/scores/Scores'
import Register from './pages/others/Register'
import Login from './pages/others/Login'
import PredictionForm from './pages/prediction/PredictionForm'
import Navbar from './components/Navbar'
import { AuthContext } from './components/AuthContext'




function App() {
  const [user, setUser] = React.useState(null);


  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/prediction' element={<Prediction />} /> 
          <Route path='/' element={<News />} />
          <Route path='/scores' element={<Scores/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/prediction_form/:id' element={<PredictionForm />} />
        </Routes>
      </BrowserRouter>
      </AuthContext.Provider>
    </>
  )
}

export default App
