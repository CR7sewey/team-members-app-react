import { useState } from "react";
import PropTypes from 'prop-types';


const GroupedTeamMembers = ({employees, selectedTeam, setTeam}) => {

    const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

    function groupTeamMembers() {
      var teams = [];     
      var teamAMembers = employees.filter((value) => value.teamName === 'TeamA');  
      var teamA = {team:'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamA'?false:true};
      teams.push(teamA)

      var teamBMembers = employees.filter((value) => value.teamName === 'TeamB');  
      var teamB = {team:'TeamB', members: teamBMembers, collapsed: selectedTeam === 'TeamB'?false:true};
      teams.push(teamB)

      var teamCMembers = employees.filter((value) => value.teamName === 'TeamC');  
      var teamC = {team:'TeamC', members: teamCMembers, collapsed: selectedTeam === 'TeamC'?false:true};
      teams.push(teamC)

      var teamDMembers = employees.filter((value) => value.teamName === 'TeamD');  
      var teamD = {team:'TeamD', members: teamDMembers, collapsed: selectedTeam === 'TeamD'?false:true};
      teams.push(teamD)
      console.log(teams)
      return teams
    }

    function showTeam(e) {
      console.log(e.target.innerText.split(" ")[2])
      const chosenTeam = e.target.innerText.split(" ")[2];
      if (chosenTeam === selectedTeam) {
        setTeam("");
      }
      else {
        setTeam(chosenTeam);
      }
    }

    function showElements(element) {
      return(
      <>
      <h5><b>Full Name: {element.fullName}</b></h5>
      <h6>Designation: {element.designation}</h6>
      </>)
    }

    return (
      <main className="container">
        <div className="row justify-content-center mt-3 mb-4">
        
        <div className="col-8">
          <div>
            <div onClick={showTeam} className="card mt-2" style={{cursor: "pointer"}}>
              <h3 className={selectedTeam === 'TeamA' ? 'selected':''}>Team Name: TeamA</h3>
              <div>
                {selectedTeam === 'TeamA' ? groupedEmployees.filter((value) => value.team === selectedTeam)[0]
                .members.map((member) => showElements(member)):<></>}
              </div>
            </div>
            <div onClick={showTeam}>
              <h3>Team Name: TeamB</h3>
              <div>
                {selectedTeam === 'TeamB' ? groupedEmployees.filter((value) => value.team === selectedTeam)[0]
                .members.map((member) => showElements(member)):<></>}
              </div>
            </div>
            <div onClick={showTeam}>
              <h3>Team Name: TeamC</h3>
              <div>
                {selectedTeam === 'TeamC' ? groupedEmployees.filter((value) => value.team === selectedTeam)[0]
                .members.map((member) => showElements(member)):<></>}
              </div>
            </div>
            <div onClick={showTeam}>
              <h3>Team Name: TeamD</h3>
              <div>
                {selectedTeam === 'TeamD' ? groupedEmployees.filter((value) => value.team === selectedTeam)[0]
                .members.map((member) => showElements(member)):<></>}
              </div>
            </div>


          </div>
             
        </div>
        </div>
        
      </main>
    )
  }

GroupedTeamMembers.propTypes = {
  employees: PropTypes.array,
  selectedTeam: PropTypes.string,
  setTeam: PropTypes.func
}
  
  export default GroupedTeamMembers
  