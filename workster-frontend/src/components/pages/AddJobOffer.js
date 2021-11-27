import React, {useEffect, useState} from "react";
import JobOfferStep from "../steps/JoOfferStep";
import {Editor} from "react-draft-wysiwyg";
import CreatableMultiSearch from "../reusable/CreatableMultiSearch";
import {convertToRaw, EditorState} from "draft-js";
import CreatableSingleSearch from "../reusable/CreatableSingleSearch";
import "../../assets/styles/add-job-offer.css"
import PlacesAutocomplete, {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';
import {get} from "react-hook-form";
import AuthService from "../../services/auth.service";
import CompanyService from "../../services/company.service";
import draftToHtml from "draftjs-to-html";
import CreatableSelect from "react-select/creatable/dist/react-select.esm";
import JobService from "../../services/job.service"

export default function AddJobOffer() {

    let editorState = EditorState.createEmpty();
    const [message, setMessage] = useState('');
    const [successful, setSuccessful] = useState(false);
    const [description, setDescription] = useState(editorState);
    const [address, setAddress] = useState("");
    const [companies, setCompanies] = useState([]);
    const [companyName, setCompanyName] = useState('');
    const [jobOfferInfo, setJobOfferInfo] = useState({
        title: '',
        remote: false,
    });
    const onChangeValue = (e) => {
        setJobOfferInfo({
            ...jobOfferInfo,
            [e.target.name]: e.target.value
        });
        console.log(jobOfferInfo)
    };

    const onEditorStateChange = (editorState) => {
        setDescription(editorState);
    };
    const handleSelect = (value) => {
        setAddress(value);
    };
    const handleCheckboxChange = (e) => {
        setJobOfferInfo({
            ...jobOfferInfo,
            remote: !jobOfferInfo.remote
        });
        console.log(jobOfferInfo)
    };

    const handlePostJobOffer = async (event) => {
        event.preventDefault();
        event.persist();
        setMessage("");
        setSuccessful(false);
        if (jobOfferInfo.description.value.length < 50) {
            setMessage("Description must have at least 50 characters.")
            return;
        }
        JobService.postJobOffer(jobOfferInfo, address, companyName).then(
            result => {
                setMessage(result.data.message);
                setSuccessful(true);
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
        )
    };

    useEffect(() => {
        CompanyService.getAllCompaniesNames()
            .then(result => {
                result.data.companyNames.map((item) => {
                    setCompanies(companies => [...companies, {value: `${item}`, label: `${item}`}])
                });
            }, error => {
                console.log(error);
            })

    }, []);


    /*
    * REMEMBER TO DELETE GOOGLE CLOUD ACCOUNT AFTER ENGINEERING PROGRAM
    *
    * */


    return (
        <main>
            <section className="clean-block clean-form dark">
                <div className="container job-desc-form">
                    <div className="block-heading">
                        <h2 className="text-dark">Add job offer</h2>
                        <p>Fill out the form below to create your own job offer.</p>
                    </div>
                    <form className="job-desc-form-form-add-job shadow-lg" onSubmit={handlePostJobOffer}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Choose a company location</label>
                            <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
                                {
                                    ({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                                        <div>
                                            <input {...getInputProps({placeholder: "Type address"})}
                                                   className={"form-control"}/>

                                            <div>
                                                {loading ? <div>...Loading</div> : null}
                                                {suggestions.map(suggestion => {

                                                    const style = {
                                                        backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                                                    };

                                                    return <div {...getSuggestionItemProps(suggestion, {style})}>
                                                        {suggestion.description}
                                                    </div>
                                                })}
                                            </div>
                                        </div>
                                    )
                                }
                            </PlacesAutocomplete>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Assign a company to a job ad</label>
                            <CreatableSelect isClearable options={companies} onChange={(value) => setCompanyName(value)}
                                             value={companyName}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Enter job title</label>
                            <input type="text" className="form-control" name="title" value={jobOfferInfo.title}
                                   onChange={onChangeValue}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Specify the lower payout spread ($
                                monthly)</label>
                            <input type="number" className="form-control" min="100" name="lowerGap"
                                   onChange={onChangeValue} value={jobOfferInfo.lowerGap}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Specify the upper payout spread ($
                                monthly)</label>
                            <input type="number" className="form-control" min="100" name="higherGap"
                                   onChange={onChangeValue} value={jobOfferInfo.higherGap}/>
                        </div>
                        <div className="mb-3">
                            <input className="form-check-input" type="checkbox" id="defaultCheck1"
                                   value={jobOfferInfo.remote} onChange={handleCheckboxChange}/>
                            <label className="form-label checkbox-margin" htmlFor="name">Remote job</label>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Add a description for viewers</label>
                            <div className="draft-editor-root">
                                <Editor
                                    editorState={description}
                                    toolbarClassName="toolbarClassName"
                                    wrapperClassName="wrapperClassName"
                                    editorClassName="editorClassName"
                                    onEditorStateChange={onEditorStateChange}
                                />
                                <textarea style={{display: 'none'}} disabled
                                          ref={(val) => jobOfferInfo.description = val}
                                          value={draftToHtml(convertToRaw(description.getCurrentContent()))}/>
                            </div>
                        </div>
                        {message && (
                            <div className="form-group">
                                <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                        <div className="text-center">
                            <button className="btn btn-primary" type="submit">Publish a job offer</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}