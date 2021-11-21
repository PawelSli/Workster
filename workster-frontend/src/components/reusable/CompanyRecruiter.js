import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCrown, faSearchPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import "../../assets/styles/user-card-company.css"
import RecruiterService from "../../services/recruiter.service"

export default function CompanyRecruiter({image, title, username, status, createdAt, admin, companyName}) {


    let displayStatus;
    if (status === "RECRUITER_BASIC") {
        displayStatus = "Recruiter"
    } else if (status === "RECRUITER_ADMIN") {
        displayStatus = "Admin"
    }

    const localUser = JSON.parse(localStorage.getItem('user')).username;
    const whenToDisplayTrashCan = (displayStatus !== "Admin" && admin) || (localUser === username);

    const handleDeleteUserButton = (event) => {
        event.preventDefault();
        RecruiterService.deleteRecruiter(companyName, username)
            .then(result => console.log(result),
                error => console.log(error));
        window.location.reload();
    };

    return (
        <div className="col-6 col-md-4 col-xl-3 mt-2 ">
            <div className="card shadow-lg">
                <img className="card-img-top img-fluid user-photo-company"
                     src={`${process.env.PUBLIC_URL}/photo/${image}`} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{username}</h5>
                    <small>{title}</small>
                    <br/>
                    <small>Status: {displayStatus}</small>
                    <br/>
                    <small>Created: {createdAt}</small>
                </div>
                <div className="card-body d-flex justify-content-evenly">
                    <a href={`http://localhost:3000/profile/main/${username}`}>
                        <FontAwesomeIcon icon={faSearchPlus}/>
                    </a>
                    {
                        displayStatus === "Admin" && (
                            <a href="#">
                                <FontAwesomeIcon icon={faCrown} className="text-info"/>
                            </a>
                        )
                    }
                    {
                        whenToDisplayTrashCan && (
                            <a href="#">
                                <FontAwesomeIcon icon={faTrash} className="text-danger" onClick={handleDeleteUserButton}/>
                            </a>
                        )
                    }
                </div>
            </div>
        </div>
    )

}