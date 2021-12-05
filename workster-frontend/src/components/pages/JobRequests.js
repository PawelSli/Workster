import CreatableMultiSearch from "../reusable/CreatableMultiSearch";
import React, {useEffect, useState} from "react";
import {EditorState} from "draft-js";
import "../../assets/styles/job-requests.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearchPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import JobOfferListElement from "../reusable/JobOfferListElement";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import AuthService from "../../services/auth.service"
import JobRequestService from "../../services/job-request.service"


export default function JobRequests() {

    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'}
    ];
    const [jobRequests, setJobRequests] = useState([]);
    const [defaultJobRequests, setDefaultJobRequests] = useState([]);
    const [defaultUserNames, setDefaultUserNames] = useState([]);
    const [userNames, setUserNames] = useState([]);
    const [defaultKeyWords, setDefaultKeyWords] = useState([]);
    const [jobDescription, setJobDescription] = useState('');
    const [keyWords, setKeyWords] = useState([]);
    const [currentJobRequest, setCurrentJobRequest] = useState(null);
    const [jobOffer, setJobOffer] = useState(null);
    const [message, setMessage] = useState("");
    const [successful, setSuccessful] = useState(false);


    const loadJobRequest = () => {
        setMessage('');
        setSuccessful(false);
        JobRequestService.getJobRequestForJobOffer(window.location.href.split('/')[4]).then(
            result => {
                setJobOffer(result.data.jobOfferListElementResponse)
                setJobRequests(result.data.userApplicationResponses)
                setDefaultJobRequests(result.data.userApplicationResponses)
                setCurrentJobRequest(result.data.userApplicationResponses[0])
                let tempTableUserNames = result.data.userApplicationResponses
                let tempDefaultUserNames = tempTableUserNames.map((item, index) => (
                    {value: item.username, label: item.username}
                ));
                setDefaultUserNames(tempDefaultUserNames);
                console.log(result.data.jobOfferListElementResponse.description)
                let span = document.createElement('span');
                span.innerHTML = result.data.jobOfferListElementResponse.description;
                let jobDescription = span.textContent || span.innerText;
                let tempTableKeyWords = result.data.jobOfferListElementResponse.title
                    .concat(' ', result.data.jobOfferListElementResponse.companyName, ' ', jobDescription)
                    .split(' ')
                    .map((item, index) => (
                        {value: item, label: item}
                    ));
                setDefaultKeyWords(tempTableKeyWords)
            },
            error => {
                let resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                setMessage(resMessage);
                setSuccessful(false);
            }
        );
    };

    const handleDownloadFile = (event, indexOfFile) => {
        setMessage('');
        setSuccessful(false);
        event.preventDefault();
        JobRequestService.getApplicantFileFromJobRequest(jobOffer.id, currentJobRequest.username, currentJobRequest.files[indexOfFile]).then(
            result => {
                setSuccessful(true);
                result.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = currentJobRequest.files[indexOfFile];
                    a.click();
                })
            },
            error => {
                setSuccessful(false)
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
            }
        )
    };

    const handleSelectUserNames = (selectedOptions) => {
        setUserNames(selectedOptions);
        console.log(selectedOptions);
    };

    const handleSelectKeyWords = (selectedOptions) => {
        setKeyWords(selectedOptions);
        console.log(selectedOptions)
    }

    const handleChooseJobRequest = (index) => {
        setCurrentJobRequest(jobRequests[index]);
    };

    const handleSearchButton = (event) => {
        event.preventDefault();

        if (keyWords.length !== 0) {
            if (userNames.length !== 0) {
                setSuccessful(false);
                setMessage("");
                JobRequestService.searchJobRequestsForJobOffer(jobOffer.id, userNames, keyWords).then(
                    result => {
                        setJobRequests(result.data.userApplicationResponses)
                        setCurrentJobRequest(result.data.userApplicationResponses[0])
                    },
                    error => {
                        setSuccessful(false)
                        const resMessage =
                            (error.response &&
                                error.response.data &&
                                error.response.data.message) ||
                            error.message ||
                            error.toString();

                        setMessage(resMessage);
                    }
                )
            } else {
                setSuccessful(false);
                setMessage("");
                JobRequestService.searchJobRequestsForJobOffer(jobOffer.id, defaultUserNames, keyWords).then(
                    result => {
                        setJobRequests(result.data.userApplicationResponses)
                        setCurrentJobRequest(result.data.userApplicationResponses[0])
                    },
                    error => {
                        setSuccessful(false)
                        const resMessage =
                            (error.response &&
                                error.response.data &&
                                error.response.data.message) ||
                            error.message ||
                            error.toString();

                        setMessage(resMessage);
                    }
                )
            }


        } else if (userNames.length !== 0) {
            let clonedJobRequests = [];
            [...defaultJobRequests].filter(item => {
                userNames.forEach(userName => {
                    if (userName.value.includes(item.username)) {
                        clonedJobRequests.push(item);
                    }
                })
            });
            setJobRequests(clonedJobRequests);
            setCurrentJobRequest(clonedJobRequests[0]);
        } else {
            setJobRequests(defaultJobRequests);
            setCurrentJobRequest(defaultJobRequests[0])
        }
    };

    useEffect(() => {
        loadJobRequest();
    }, []);


    return (
        <div className="container pt-3 mb-5">
            <div className="row d-flex justify-content-center ">
                {jobOffer ?
                    <JobOfferListElement id={jobOffer.id} image={jobOffer.companyImage} title={jobOffer.title}
                                         location={jobOffer.location}
                                         remote={jobOffer.remote} higherGap={jobOffer.salary_high}
                                         lowerGap={jobOffer.salary_low}
                                         date={jobOffer.createdAt} owner={jobOffer.owner} applied={jobOffer.applied}
                                         favourite={jobOffer.favourite}/>
                    :
                    <div/>}

            </div>
            {
                AuthService.isRecruiter(window.location.href.split('/')[4]) ?
                    <div>
                        <div className=" mt-2 d-flex justify-content-center row ">

                            <div className="col-12 col-md-11 card shadow-lg p-2">
                                <div className="row p-2 ">
                                    <div className="col-12 col-md-6 ">
                                        <CreatableMultiSearch value={userNames} setValue={handleSelectUserNames}
                                                              valueOptions={defaultUserNames}
                                                              text={"Select name of applicant"}/>
                                    </div>
                                    <div className="col-12 col-md-6 pt-3 pt-md-0">
                                        <CreatableMultiSearch valueOptions={defaultKeyWords} text={"Select keywords"}
                                                              value={keyWords} setValue={handleSelectKeyWords}/>
                                    </div>
                                    <div className="d-flex flex-row justify-content-end ">
                                        <div className="col-md-3 pt-3 ">
                                            <button type="button" className="btn btn-primary btn-block my-button-class"
                                                    onClick={handleSearchButton}>Search
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" mt-2 d-flex justify-content-center row ">
                            <div className="col-12 col-md-11 card shadow-lg p-1 d-flex flex-row">
                                <div className="col-5 col-sm-4 col-md-3   text-dark bg-light">
                                    <Box sx={{
                                        bgcolor: 'background.paper', position: 'relative',
                                        overflow: 'auto',
                                        maxWidth: 360,
                                        maxHeight: 600,
                                        '& ul': {padding: 0},
                                    }} className={"bg-light"}
                                         subheader={<li/>}
                                    >
                                        <nav aria-label="main mailbox folders">
                                            <List>
                                                {jobRequests ?
                                                    jobRequests.map((item, index) => (
                                                        <ListItem disablePadding
                                                                  onClick={event => handleChooseJobRequest(index)}>
                                                            <ListItemButton>
                                                                <ListItemAvatar>
                                                                    <Avatar
                                                                        src={`${process.env.PUBLIC_URL}/${item.image}`}
                                                                    />
                                                                </ListItemAvatar>
                                                                <ListItemText primary={item.username}/>
                                                            </ListItemButton>
                                                        </ListItem>
                                                    ))
                                                    :
                                                    <div/>}
                                            </List>
                                        </nav>
                                    </Box>
                                </div>
                                {currentJobRequest ?
                                    <div className="col-7 col-sm-8 col-md-9  static-height list-files-request">
                                        <div className="mb-3">
                                            <label className="form-label margin-text-left" htmlFor="name">Applicant
                                                profile</label>
                                            <ul className="list-group margin-text-left">
                                                <a href={`/profile/main/${currentJobRequest.username}`}>
                                                    <li className="list-group-item text-end text-primary">{currentJobRequest.username}</li>
                                                </a>
                                            </ul>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label margin-text-left" htmlFor="name">Message from
                                                the
                                                applicant</label>
                                            <textarea className="form-control disabled margin-text-left" disabled={true}
                                                      rows="5" placeholder={`${currentJobRequest.description}`}>
                                            </textarea>
                                        </div>
                                        <div className="mb-3 ">
                                            <label className="form-label margin-text-left" htmlFor="name">Files from the
                                                applicant</label>
                                            <ul className="list-group margin-text-left ">
                                                {currentJobRequest.files.map((item, index) => (
                                                    <a href={"#"}>
                                                        <li onClick={event => handleDownloadFile(event, index)}
                                                            className="list-group-item text-end text-primary">{item}</li>
                                                    </a>
                                                ))}

                                            </ul>
                                        </div>
                                    </div>
                                    :
                                    <div/>}
                            </div>
                        </div>
                    </div>
                    :
                    <div className=" mt-2 d-flex justify-content-center row ">
                        <div className="col-11 alert alert-danger" role="alert">
                            You are not a recruiter responsible for this job offer, so you can't have access to these
                            resources.
                        </div>
                    </div>
            }
        </div>

    )

}