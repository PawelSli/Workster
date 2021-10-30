import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

export default function CompanyUserCard() {

    return (
        <div className="col-6 col-md-4 col-xl-3 mt-2 ">
            <div className="card shadow-lg">
                <img className="card-img-top img-fluid user-photo-company"
                     src={`${process.env.PUBLIC_URL}/star-sky.jpg`} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">John Kowalski</h5>
                    <small>Junior Java Developer</small>
                    <br/>
                    <small>Status: Admin</small>
                    <br/>
                    <small>Created: 01/01/2021</small>
                </div>
                <div className="card-body d-flex justify-content-evenly">
                    <FontAwesomeIcon icon={faCheck}/>
                    <FontAwesomeIcon icon={faTrashAlt}/>
                </div>
            </div>
        </div>
    )
}