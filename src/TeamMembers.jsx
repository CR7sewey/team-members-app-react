import TeamMembersCard from "./TeamMembersCard"

const TeamMembers = ({employees, selectedTeam, handleEmployeeCardClick}) => {
    return (
        employees.map((value, index) => (
            <TeamMembersCard key={value.id} value={value} selectedTeam={selectedTeam} 
            handleEmployeeCardClick={handleEmployeeCardClick} />
    ))
    )
}

export default TeamMembers