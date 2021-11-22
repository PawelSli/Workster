import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import CandidateService from "../../services/candidate.service";

export default function CompanyUserCard({image, username, title, createdAt, companyName}) {

    const handleAcceptSomeone = (event) => {
        event.preventDefault();
        CandidateService.acceptSomeoneAsRecruiter(username, companyName)
            .then(result => {
                console.log(result);
            }, error => {
                console.log(error);
            });
        window.location.reload();
    };

    const handleDenySomeone = (event) => {
        event.preventDefault();
        CandidateService.denySomeoneAsRecruiter(username, companyName)
            .then(result => {
                console.log(result);
            }, error => {
                console.log(error);
            });
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
                    <small>Created: {createdAt}</small>
                </div>
                <div className="card-body d-flex justify-content-evenly">
                    <a href="#">
                        <FontAwesomeIcon icon={faCheck} onClick={handleAcceptSomeone}/>
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faTrashAlt} onClick={handleDenySomeone}/>
                    </a>
                </div>
            </div>
        </div>
    )
}