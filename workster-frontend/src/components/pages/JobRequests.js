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
import JobOfferListElement from "../reusable/JobOfferListElement";
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";


export default function JobRequests() {

    const [editorState, onEditorStateChange] = useState(EditorState.createEmpty());


    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
        {value: 'vanilla', label: 'Vanilla'},
        {value: 'vanilla', label: 'Vanilla'},
    ];

    /*
    * */


    return (
        <div className="container pt-3 mb-5">
            <div className="row d-flex justify-content-center ">
                <JobOfferListElement image="red.jpg" title="Level Designer" company="CD Projekt RED"
                                     location="Warsaw, Mazowieckie, Poland" cash="10.000 $" remote="remote"
                                     date="10.01.2022" posted="Y"/>
            </div>
            <div className=" mt-2 d-flex justify-content-center row ">
                <div className="col-12 col-md-11 card shadow-lg p-2">
                    <div className="row p-2 ">
                        <div className="col-12 col-md-6 ">
                            <select className="js-example-basic-single form-control item" name="state">
                                <option selected disabled>Select name of recruiter</option>
                                <option value="AL">Alabama</option>
                                <option value="WY">Wyoming</option>
                                <option value="WY">Wyoming</option>
                                <option value="WY">Wyoming</option>
                                <option value="WY">Wyoming</option>
                                <option value="WY">Wyoming</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-6 pt-3 pt-md-0">
                            <CreatableMultiSearch valueOptions={options} text={"Select keywords"}/>
                        </div>
                        <div className="d-flex flex-row justify-content-end ">
                            <div className="col-md-3 pt-3 ">
                                <button type="button" className="btn btn-primary btn-block my-button-class">Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mt-2 d-flex justify-content-center  row ">
                <div className="col-4 col-md-2  d-flex justify-content-start">
                    <div className="col-12 card shadow-lg job-card-application-heigth">
                        <Box sx={{ bgcolor: 'background.paper', position: 'relative',
                            overflow: 'auto',
                            maxHeight: 600, }}>
                            <nav aria-label="main mailbox folders">
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemAvatar>
                                                <Avatar
                                                    src={`${process.env.PUBLIC_URL}/star-sky.jpg`}
                                                />
                                            </ListItemAvatar>
                                            <ListItemText primary="User" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemAvatar>
                                                <Avatar
                                                    src={`${process.env.PUBLIC_URL}/star-sky.jpg`}
                                                />
                                            </ListItemAvatar>
                                            <ListItemText primary="User" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemAvatar>
                                                <Avatar
                                                    src={`${process.env.PUBLIC_URL}/star-sky.jpg`}
                                                />
                                            </ListItemAvatar>
                                            <ListItemText primary="User" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemAvatar>
                                                <Avatar
                                                    src={`${process.env.PUBLIC_URL}/star-sky.jpg`}
                                                />
                                            </ListItemAvatar>
                                            <ListItemText primary="User" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemAvatar>
                                                <Avatar
                                                    src={`${process.env.PUBLIC_URL}/star-sky.jpg`}
                                                />
                                            </ListItemAvatar>
                                            <ListItemText primary="User" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemAvatar>
                                                <Avatar
                                                    src={`${process.env.PUBLIC_URL}/star-sky.jpg`}
                                                />
                                            </ListItemAvatar>
                                            <ListItemText primary="User" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemAvatar>
                                                <Avatar
                                                    src={`${process.env.PUBLIC_URL}/star-sky.jpg`}
                                                />
                                            </ListItemAvatar>
                                            <ListItemText primary="User" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemAvatar>
                                                <Avatar
                                                    src={`${process.env.PUBLIC_URL}/star-sky.jpg`}
                                                />
                                            </ListItemAvatar>
                                            <ListItemText primary="User" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemAvatar>
                                                <Avatar
                                                    src={`${process.env.PUBLIC_URL}/star-sky.jpg`}
                                                />
                                            </ListItemAvatar>
                                            <ListItemText primary="User" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemAvatar>
                                                <Avatar
                                                    src={`${process.env.PUBLIC_URL}/star-sky.jpg`}
                                                />
                                            </ListItemAvatar>
                                            <ListItemText primary="User" />
                                        </ListItemButton>
                                    </ListItem>


                                </List>
                            </nav>
                        </Box>
                    </div>
                </div>
                <div className="col-8 col-md-9 card shadow-lg p-2">
                    <form className="job-desc-form-form">
                        <div className="mb-3 pt-2">
                            <div className="d-flex justify-content-center">
                                <div className="card col-10  col-md-4 shadow-lg">
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
                    </form>
                </div>
            </div>
        </div>

    )

}