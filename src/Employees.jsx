import PropTypes from 'prop-types'; // validar props
import femaleProfile from './assets/images/femaleProfile.jpg'
import maleProfile from './assets/images/maleProfile.jpg'
import { data as dados } from "./assets/data/initialData"

const data = [...dados];

const Employees = ({employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange}) => {
    return (
        <main className="container">
           <div className="row justify-content-center mt-3 mb-3">
            <div className="col-6">
              <select className="form-select form-select-lg" 
              value={selectedTeam} 
              onChange={handleTeamSelectionChange}>
                <option value="TeamA">TeamA</option>
                <option value="TeamB">TeamB</option>
                <option value="TeamC">TeamC</option>
                <option value="TeamD">TeamD</option>
              </select>
            </div>
            </div>
        <div className="row justify-content-center mt-3 mb-3">
            <div className="col-8">
                <div className="card-collection">
                {employees.map((value, index) => (
                <div id={value.id} className={(value.teamName === selectedTeam ? 'card m-2 standout':'card m-2')} style={{cursor: "pointer"}} key={value.id} onClick={handleEmployeeCardClick}>
                    {value.gender === "female" ? <img src={femaleProfile} className="card-img-top"/> : <img src={maleProfile} className="card-img-top"/>}
                    <div className="card-body">
                        <h5 className="card-title">Full name: {value.fullName}</h5>
                        <p className="card-text"><b>Designation:</b> {value.designation}</p>
                    </div>
                </div>
            ))}
            </div>
            </div>
        </div>
        </main>
    )
}

Employees.propTypes = {
  employees: PropTypes.array.isRequired,
  selectedTeam: PropTypes.string.isRequired,
  handleEmployeeCardClick: PropTypes.func.isRequired,
  handleTeamSelectionChange: PropTypes.func.isRequired,
}

export default Employees