import "../../assets/styles/company.css"
import logo from "../../assets/img/logo.svg";
import React, {useEffect, useState} from "react";
import CompanySubPage from "./subcompany/CompanySubPage";
import CompanyHeader from "../reusable/CompanyHeader";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "../../assets/styles/my-job-offer.css"
import {faCheck, faPaperPlane, faSearchPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CompanyService from "../../services/company.service";
import CandidateService from "../../services/candidate.service";
import AuthService from "../../services/auth.service";

export default function Company() {

    const [subPage, setSubPage] = useState(0);
    const [text, setText] = useState("Send request to join company");
    const [disable, setDisabled] = useState(false);
    const [recruiter, setRecruiter] = useState('');
    const [adminCandidates, setAdminCandidates] = useState('');
    const [adminEdit, setAdminEdit] = useState('');
    const [admin, setAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [applicable, setApplicable] = useState(false);


    const [companyInfo, setCompanyInfo] = useState({
        recruiterRole: '',
        candidates: [],
        recruiters: [],
        jobOffers: [],
        name: '',
        description: '',
        image: ''
    });

    function useGetCompanyInfo() {
        useEffect(async () => {
            try {
                const result = await Promise.resolve(CompanyService.getSpecificCompany(window.location.href.split('/')[4]));
                await setCompanyInfo(prevState => ({...prevState, recruiterRole: result.data.recruiterRole}));
                await setCompanyInfo(prevState => ({...prevState, candidates: result.data.candidates}));
                await setCompanyInfo(prevState => ({...prevState, recruiters: result.data.recruiters}));
                await setCompanyInfo(prevState => ({...prevState, jobOffers: result.data.jobOffers}));
                await setCompanyInfo(prevState => ({...prevState, name: result.data.name}));
                await setCompanyInfo(prevState => ({...prevState, description: result.data.description}));
                await setCompanyInfo(prevState => ({...prevState, image: result.data.image}));
                if (result.data.recruiterRole === "RECRUITER_BASIC") {
                    setRecruiter('Recruiters');
                }
                if (result.data.recruiterRole === "RECRUITER_ADMIN") {
                    setRecruiter('Recruiters');
                    setAdminCandidates('Candidates');
                    setAdminEdit('Edit company');
                    setAdmin(true);
                }
                if (result.data.recruiterRole === "NON_RECRUITER" && AuthService.isLogged()) {
                    setApplicable(true);
                    await checkIfCandidate(result.data.name);
                }

                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }, []);
    }

    const clickItemToSendRequest = () => {
        CandidateService.applyForRecruiter(companyInfo.name).then(
            result => {
                setDisabled(true);
                setText("Request send");
            },
            error => {
                console.log(error)
            }
        )
    };

    const checkIfCandidate = (company) => {
        return CandidateService.checkIfApplied(company)
            .then(result => {
                if (result.data.applied) {
                    setText("You already applied for recruiter in this company.");
                    setDisabled(true);
                }
            }, error => {
                console.log(error);
            });
    };

    useGetCompanyInfo();


    return (
        <main>
            {
                loading ?
                    (
                        <div className="d-flex justify-content-center align-items-center" style={{height: '80vh'}}>
                            <div className="spinner-border" style={{height: '6em', width: '6em'}} role="status">
                            </div>
                        </div>
                    )
                    :
                    (
                        <div>
                            <CompanyHeader image={companyInfo.image} name={companyInfo.name}/>
                            <div className="row mt-2 d-flex justify-content-center">
                                <div className="col-12 col-md-8 card bg-dark">
                                    <nav className="navbar navbar-light navbar-expand-xl  shadow-lg">
                                        <div className="container-fluid">
                                            <button data-bs-toggle="collapse" className="navbar-toggler bg-light"
                                                    data-bs-target="#navcol-3">
                                                <span className="visually-hidden">Toggle navigation</span><span
                                                className="navbar-toggler-icon"/>
                                            </button>
                                            <div className="collapse navbar-collapse" id="navcol-3">
                                                <ul className="navbar-nav">
                                                    <li className="nav-item">
                                                        <a className="nav-link active text-white"
                                                           onClick={() => setSubPage(0)}
                                                           href="#">
                                                            Description
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link text-white" onClick={() => setSubPage(1)}
                                                           href="#">
                                                            Job offers
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link text-white" onClick={() => setSubPage(2)}
                                                           href="#">
                                                            {recruiter}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link text-white" onClick={() => setSubPage(3)}
                                                           href="#">
                                                            {adminCandidates}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link text-white" onClick={() => setSubPage(4)}
                                                           href="#">
                                                            {adminEdit}
                                                        </a>
                                                    </li>
                                                </ul>
                                                {
                                                    applicable && (
                                                        <ul className="navbar-nav ms-auto">
                                                            <li className="nav-item"><a className="nav-link active"
                                                                                        href="#">
                                                                <button disabled={disable}
                                                                        className="btn btn-outline-primary swing animated"
                                                                        type="button"
                                                                        onClick={() => clickItemToSendRequest()}>
                                                                    {text} <FontAwesomeIcon
                                                                    icon={!disable ? faPaperPlane : faCheck}/>
                                                                </button>
                                                            </a></li>
                                                        </ul>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div className="row mt-2 mb-3 d-flex justify-content-center">
                                <div className="col-12 col-md-8  card shadow-lg">
                                    <CompanySubPage subPage={subPage} text={companyInfo.description}
                                                    recruiters={companyInfo.recruiters} admin={admin}
                                                    companyName={companyInfo.name} candidates={companyInfo.candidates}/>
                                </div>
                            </div>
                        </div>
                    )
            }
        </main>
    )
}