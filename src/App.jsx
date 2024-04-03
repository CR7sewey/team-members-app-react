import './App.css'
import { DataProvider } from './context/DataContext'
import Footer from './Footer'
import Header from './Header'
import { useEffect, useState } from 'react'
import { data as dados } from "./assets/data/initialData"
import Employees from './Employees'
import GroupedTeamMembers from './GroupedTeamMembers'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import NotFound from './NotFound'

const data = [...dados];

function App() {
    
  return (
    <DataProvider>
      <Router>
      <Nav />

        <Header />
        <Routes>
          <Route path='/' element={<Employees />}>
          </Route>
          <Route path='/GroupedTeamMembers' element = {<GroupedTeamMembers />}>
          </Route>
          <Route path='*' element ={<NotFound />}>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </DataProvider>
  )
}

export default App
