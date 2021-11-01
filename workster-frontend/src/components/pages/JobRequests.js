import {Editor} from "react-draft-wysiwyg";
import CreatableMultiSearch from "../reusable/CreatableMultiSearch";
import React, {useState} from "react";
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
import CompanyHeader from "../reusable/CompanyHeader";

export default function JobRequests() {

    const [editorState, onEditorStateChange] = useState(EditorState.createEmpty());


    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
        {value: 'vanilla', label: 'Vanilla'},
        {value: 'vanilla', label: 'Vanilla'},
    ];


    return (
        <main className="d-flex flex-column justify-content-center  ">
            <CompanyHeader image="star-sky.jpg" name="Sabre Company"/>
            <div className="row mt-2 d-flex justify-content-center">
                <div className="col-12 col-md-8 card shadow-lg">
                    <div className="row p-2 ">
                        <div className="col-12 col-md-6 ">
                            <select className="js-example-basic-single form-control item" name="state" >
                                <option selected disabled >Select name of recruiter</option>
                                <option value="AL">Alabama</option>
                                <option value="WY">Wyoming</option>
                                <option value="WY">Wyoming</option>
                                <option value="WY">Wyoming</option>
                                <option value="WY">Wyoming</option>
                                <option value="WY">Wyoming</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-6 pt-3 pt-md-0">
                            <CreatableMultiSearch valueOptions={options}  text={"Select keywords"}/>
                        </div>
                        <div className="d-flex flex-row justify-content-end ">
                            <div className="col-md-3 pt-3 ">
                                <button type="button" className="btn btn-primary btn-block my-button-class">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4 d-flex justify-content-center">
                <div className="col-3 col-md-2">
                    <div className="list-group shadow-lg" id="list-tab" role="tablist">
                        <a className="list-group-item list-group-item-action  text-hidden-requests" id="list-home-list"
                           data-toggle="list"
                           href="#list-home" role="tab" aria-controls="home">Raisa O'Brien
                        </a>
                        <a className="list-group-item list-group-item-action text-hidden-requests" id="list-profile-list"
                           data-toggle="list"
                           href="#list-profile" role="tab" aria-controls="profile">Tahlia Velasquez
                        </a>
                        <a className="list-group-item list-group-item-action text-hidden-requests" id="list-messages-list"
                           data-toggle="list"
                           href="#list-messages" role="tab" aria-controls="messages">Donte Roman
                        </a>
                        <a className="list-group-item list-group-item-action text-hidden-requests" id="list-settings-list"
                           data-toggle="list"
                           href="#list-settings" role="tab" aria-controls="settings">Leanna Rayner
                        </a>
                        <a className="list-group-item list-group-item-action text-hidden-requests" id="list-profile-list"
                           data-toggle="list"
                           href="#list-profile" role="tab" aria-controls="profile">Shanaya Sanders
                        </a>
                        <a className="list-group-item list-group-item-action text-hidden-requests" id="list-messages-list"
                           data-toggle="list"
                           href="#list-messages" role="tab" aria-controls="messages">Jace Hills
                        </a>
                        <a className="list-group-item list-group-item-action text-hidden-requests" id="list-settings-list"
                           data-toggle="list"
                           href="#list-settings" role="tab" aria-controls="settings">Reginald Mejia
                        </a>
                        <a className="list-group-item list-group-item-action text-hidden-requests" id="list-profile-list"
                           data-toggle="list"
                           href="#list-profile" role="tab" aria-controls="profile">Mikaeel Garner
                        </a>
                        <a className="list-group-item list-group-item-action text-hidden-requests" id="list-messages-list"
                           data-toggle="list"
                           href="#list-messages" role="tab" aria-controls="messages">Sol Hope
                        </a>
                        <a className="list-group-item list-group-item-action text-hidden-requests" id="list-settings-list"
                           data-toggle="list"
                           href="#list-settings" role="tab" aria-controls="settings">Zayden Kerr
                        </a>

                    </div>
                </div>
                <div className="col-9 col-md-6">
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
        </main>
    )

}