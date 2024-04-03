import PropTypes from 'prop-types'; // validar props
import Teams from './Teams';
import TeamMembers from './TeamMembers';


const Employees = () => {
    return (
        <main className="container">
           <div className="row justify-content-center mt-3 mb-3">
            <div className="col-6">
                <Teams />
            </div>
            </div>
        <div className="row justify-content-center mt-3 mb-3">
            <div className="col-8">
                <div className="card-collection">
                
                    <TeamMembers />
        
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