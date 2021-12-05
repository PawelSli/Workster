import CreatableMultiSearch from "../reusable/CreatableMultiSearch";
import "../../assets/styles/add-job-offer.css"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import React, {useEffect, useState} from "react";
import DocumentService from "../../services/document.service";
import JobRequestService from "../../services/job-request.service"


export default function ApplyForJobPage() {

    const [message, setMessage] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [userFiles, setUserFiles] = useState([]);
    const [filesToPost, setFilesToPost] = useState([]);
    const [newFile,setNewFile] = useState(null);
    const [jobRequestMessage,setJobRequestMessage] = useState("");


    const handleSetFiles = (selectedFiles) => {
        setFilesToPost(selectedFiles);
    };

    const loadFiles = () => {
        DocumentService.getAllUserDocuments().then(
            result => {
                let tempArray = result.data.files;
                tempArray = tempArray.map((item, index) => (
                    {value: item.fileName, label: item.fileName}
                ));
                setUserFiles(tempArray);
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

    const uploadJobRequest = (event) => {
        event.preventDefault();
        setMessage("");
        setSuccessful(false);
        if (jobRequestMessage.length < 50) {
            setMessage("Job request description must have at least 50 characters.")
            setSuccessful(false);
            return;
        }
        JobRequestService.postJobRequest(jobRequestMessage,filesToPost,newFile,window.location.href.split('/')[4]).then(
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
        loadFiles()
    }, []);

    return (
        <main>
            <section className="clean-block clean-form dark">
                <div className="container job-desc-form">
                    <div className="block-heading">
                        <h2 className="text-dark">Apply for a job</h2>
                        <p>Complete the form below to apply for the position listed.</p>
                    </div>
                    <form className="job-desc-form-form-add-job shadow-lg" onSubmit={uploadJobRequest}>
                        {message && (
                            <div className="form-group">
                                <div
                                    className={
                                        successful ? "alert alert-success" : "alert alert-danger"
                                    }
                                    role="alert"
                                >
                                    {message}
                                </div>
                            </div>
                        )}
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Add message for employer</label>
                            <textarea className="form-control" rows="8" value={jobRequestMessage} onChange={e => setJobRequestMessage(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Add some CV files from your account</label>
                            <CreatableMultiSearch text={"Select files for job request"} valueOptions={userFiles}
                                                  setValue={handleSetFiles} />
                        </div>
                        <div className="mb-3 form-group d-flex flex-column">
                            <label className="form-label" htmlFor="exampleFormControlFile1">Add some new document if you
                                want</label>
                            <input type="file" className="form-control" onChange={event => setNewFile(event.target.files[0])}/>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary" type="submit">Publish the application</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}