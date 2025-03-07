import { useContext, useState } from "react";
import PropTypes from 'prop-types';
import DataContext from "./context/DataContext";


const GroupedTeamMembers = () => {

    const {employees, selectedTeam, setTeam} = useContext(DataContext);

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

    function handleTeamClick(event) {
      var newGroupedData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id ? { ...groupedData, collapsed: !groupedData.collapsed } : groupedData);
      setGroupedData(newGroupedData);
      setTeam(event.currentTarget.id);
  
    }
  
    return (
      <main className="container">
        {groupedEmployees.map((item) => {
          return (
            <div key={item.team} className="card mt-2" style={{ cursor: "pointer" }}>
              <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                Team Name: {item.team}
              </h4>
              <div id={"collapse_" + item.team} className={item.collapsed === true ? "collapse" : ""}>
                <hr />
                {item.members.map((member) => {
                  return (
                    <div key={member.id} className="mt-2">
                      <h5 className="card-title mt-2">
                        <span className="text-dark"><b>Full Name:</b> {member.fullName}</span>
                      </h5>
                      <p className="card-text text-dark mt-2">
                        <b>Designation:</b> {member.designation}
                      </p>
                    </div>
                  );
                })}
              </div>
              <hr />
            </div>
          );
        })}
      </main>
    )
  }
GroupedTeamMembers.propTypes = {
  employees: PropTypes.array,
  selectedTeam: PropTypes.string,
  setTeam: PropTypes.func
}
  
  export default GroupedTeamMembers
  