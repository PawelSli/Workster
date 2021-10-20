import {Editor} from "react-draft-wysiwyg";
import CreatableMultiSearch from "../reusable/CreatableMultiSearch";
import {useState} from "react";
import {EditorState} from "draft-js";
import "../../assets/styles/job-requests.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBars,
    faCrown,
    faHome,
    faMapMarker,
    faMoneyBill,
    faSearchPlus,
    faTrash
} from "@fortawesome/free-solid-svg-icons";
import ApplyForJobPage from "./ApplyForJobPage";

export default function JobRequests() {

    const [editorState, onEditorStateChange] = useState(EditorState.createEmpty());


    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
    ];


    return (
        <main className="d-flex  ">
            <div className="container   ">
                <div className="row mt-4">
                    <div className="col-9">
                        <ul className="list-group shadow">

                            <li className="list-group-item d-flex flex-reverse ">
                                <img src={`${process.env.PUBLIC_URL}/star-sky.jpg`} alt="Generic placeholder image"
                                     className="logo-size"/>
                                <div className="job-desc d-flex flex-column justify-content-between">
                                    <div className="d-flex flex-row justify-content-between">
                                        <div>
                                            <h5 className="font-weight-bold m-company">Junior Java Developer</h5>
                                            <small>Brown Brothers Harriman</small>
                                        </div>
                                        <div>
                                            <small>01.01.2021</small>
                                            <a href="#" className="text-dark"><FontAwesomeIcon icon={faBars}
                                                                                               className="fav-job-options-icon"/></a>
                                        </div>
                                    </div>
                                    <small>
                                        <FontAwesomeIcon icon={faMapMarker} className="fav-job-offers-icons-right"/>Warsaw
                                        <FontAwesomeIcon icon={faMoneyBill}
                                                         className="fav-job-offers-icons-left fav-job-offers-icons-right"/> 10.000$-20.000$
                                        <FontAwesomeIcon icon={faHome}
                                                         className="fav-job-offers-icons-left fav-job-offers-icons-right"/>Remote
                                    </small>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-9">
                        <div className="container-fluid bg-light p-2 shadow-lg">
                            <div className="row align-items-center justify-content-left">
                                <div className="col-md-3 pt-3 input-name-of-applicant">
                                    <div className="form-group ">
                                        <label htmlFor="exampleInputEmail1">Search for applicant's name</label>
                                        <input type="email" className="form-control " id="exampleInputEmail1"
                                               aria-describedby="emailHelp"
                                               placeholder="Type name of an applicant" />
                                    </div>
                                </div>
                                <div className="col-md-3 pt-3 input-key-words form-group">
                                    <label for="creatableMultiSearch">Based on selected words you can filter applications for this job</label>
                                    <CreatableMultiSearch id="creatableMultiSearch" valueOptions={options}/>
                                </div>
                            </div>
                            <div className="row d-flex flex-row justify-content-end ">
                                <div className="col-md-3 pt-3 ">
                                    <button type="button" className="btn btn-primary btn-block my-button-class">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-3">
                        <div className="list-group shadow-lg" id="list-tab" role="tablist">
                            <a className="list-group-item list-group-item-action active" id="list-home-list"
                               data-toggle="list"
                               href="#list-home" role="tab" aria-controls="home">Raisa O'Brien
                            </a>
                            <a className="list-group-item list-group-item-action" id="list-profile-list"
                               data-toggle="list"
                               href="#list-profile" role="tab" aria-controls="profile">Tahlia Velasquez
                            </a>
                            <a className="list-group-item list-group-item-action" id="list-messages-list"
                               data-toggle="list"
                               href="#list-messages" role="tab" aria-controls="messages">Donte Roman
                            </a>
                            <a className="list-group-item list-group-item-action" id="list-settings-list"
                               data-toggle="list"
                               href="#list-settings" role="tab" aria-controls="settings">Leanna Rayner
                            </a>
                            <a className="list-group-item list-group-item-action" id="list-profile-list"
                               data-toggle="list"
                               href="#list-profile" role="tab" aria-controls="profile">Shanaya Sanders
                            </a>
                            <a className="list-group-item list-group-item-action" id="list-messages-list"
                               data-toggle="list"
                               href="#list-messages" role="tab" aria-controls="messages">Jace Hills
                            </a>
                            <a className="list-group-item list-group-item-action" id="list-settings-list"
                               data-toggle="list"
                               href="#list-settings" role="tab" aria-controls="settings">Reginald Mejia
                            </a>
                            <a className="list-group-item list-group-item-action" id="list-profile-list"
                               data-toggle="list"
                               href="#list-profile" role="tab" aria-controls="profile">Mikaeel Garner
                            </a>
                            <a className="list-group-item list-group-item-action" id="list-messages-list"
                               data-toggle="list"
                               href="#list-messages" role="tab" aria-controls="messages">Sol Hope
                            </a>
                            <a className="list-group-item list-group-item-action" id="list-settings-list"
                               data-toggle="list"
                               href="#list-settings" role="tab" aria-controls="settings">Zayden Kerr
                            </a>

                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card card-box shadow-lg">
                            <form className="job-desc-form-form">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="name">Applicant:</label>
                                    <div className="d-flex justify-content-center">
                                        <div className="card col-8 shadow-lg">
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
                                                <FontAwesomeIcon icon={faSearchPlus}/>
                                                <FontAwesomeIcon icon={faTrash}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="name">Message from the applicant</label>
                                    <textarea className="form-control disabled" rows="5"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="name">Files from the applicant</label>
                                    <ul className="list-group">
                                        <a>
                                            <li className="list-group-item text-end">References.doc</li>
                                        </a>
                                        <a>
                                            <li className="list-group-item text-end">Qualifications.txt</li>
                                        </a>
                                    </ul>
                                </div>
                                <button className="btn btn-primary" type="submit">Move on</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )

}