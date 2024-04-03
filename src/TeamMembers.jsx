import { useContext } from "react"
import TeamMembersCard from "./TeamMembersCard"
import DataContext from "./context/DataContext"

const TeamMembers = () => {
    const { employees } = useContext(DataContext)
    return (
        employees.map((value, index) => (
            <TeamMembersCard key={value.id} value={value} />
    ))
    )
}

export default TeamMembers