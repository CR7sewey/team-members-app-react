import femaleProfile from './assets/images/femaleProfile.jpg'
import maleProfile from './assets/images/maleProfile.jpg'
import { useContext } from "react"

import DataContext from "./context/DataContext"


const TeamMembersCard = ({value}) => {

    const {selectedTeam, handleEmployeeCardClick} = useContext(DataContext);
    
    return (
        <div id={value.id} className={(value.teamName === selectedTeam ? 'card m-2 standout':'card m-2')} style={{cursor: "pointer"}} key={value.id} onClick={handleEmployeeCardClick}>
                    {value.gender === "female" ? <img src={femaleProfile} className="card-img-top"/> : <img src={maleProfile} className="card-img-top"/>}
                    <div className="card-body">
                        <h5 className="card-title">Full name: {value.fullName}</h5>
                        <p className="card-text"><b>Designation:</b> {value.designation}</p>
                    </div>
        </div>
    )
}

export default TeamMembersCard