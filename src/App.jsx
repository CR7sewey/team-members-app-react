import './App.css'
import Content from './Content'
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

  // buscar data da local storage
  const [selectedTeam, setSelectedTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamA");

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [...data]);    
  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees))
  }, [employees]); // only executes when the state of employees changes ([employees])

  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
  }, [selectedTeam]); // only executes when the state of employees changes ([employees])


    
  const handleTeamSelectionChange = (e) => {
      console.log(e.target.value);

      setSelectedTeam(e.target.value);
      console.log(selectedTeam);
    }
    
  function handleEmployeeCardClick(e) {
      const transformedEmployees = employees.map((employee) => employee.id === parseInt(e.currentTarget.id)
      ? (employee.teamName === selectedTeam)?{...employee, teamName: ''}:{...employee, teamName: selectedTeam}:employee);
      console.log(transformedEmployees);
      setEmployees(transformedEmployees);
    }

  return (
    <>
      <Router>
      <Nav />

        <Header selectedTeam={selectedTeam} 
        teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length} />
        <Routes>
          <Route path='/' element={<Employees 
            employees={employees}
            selectedTeam={selectedTeam}
            handleEmployeeCardClick={handleEmployeeCardClick}
            handleTeamSelectionChange={handleTeamSelectionChange}
            />}>
          </Route>
          <Route path='/GroupedTeamMembers' element = {<GroupedTeamMembers  employees={employees}
            selectedTeam={selectedTeam} setTeam={setSelectedTeam} />}>
          </Route>
          <Route path='*' element ={<NotFound />}>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
