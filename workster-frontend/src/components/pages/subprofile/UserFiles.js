import "../../../assets/styles/user-files.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle, faDownload} from '@fortawesome/free-solid-svg-icons'
import React, {useEffect, useState} from "react";
import DocumentService from "../../../services/document.service";
import UserBox from "../../reusable/UserBox";

export default function UserFiles() {

    const [message, setMessage] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [userFiles, setUserFiles] = useState([]);

    useEffect(() => {
        getUserDocuments();
    }, []);

    const onFileRemove = (position) => {
        const clonedUserFiles = [...userFiles]
        clonedUserFiles.splice(position, 1)
        setUserFiles(clonedUserFiles)
    };


    const getUserDocuments = () => {
        DocumentService.getAllUserDocuments().then(
            result => {
                setUserFiles(result.data.files)
                console.log(result.data.files)
            },
            error => {
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

    const uploadDocument = (event) => {
        event.preventDefault();
        setMessage("");
        setSuccessful(false);

        DocumentService.uploadDocument(event.target.files[0])
            .then(
                () => window.location.reload(),
                (error) => {
                    setSuccessful(false);
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

    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-4">
                        <div className="card-box shadow-lg">
                            <div className="row">
                                <p className="text-center h4">My files</p>
                            </div>

                            <div className="row mt-2 ">
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
                                {userFiles ? (
                                    userFiles.map((item, index) => (
                                        <UserBox fileName={item.fileName} fileSize={item.fileSize}
                                                 setMessage={setMessage} position={index}
                                                 inputRemoveFunction={onFileRemove}
                                                 changeOutcome={setSuccessful}/>
                                    ))
                                ) : <div/>}
                            </div>
                            <div className="text-center mt-3 mb-2">
                                <button type="button"
                                        className="btn btn-outline-danger w-md waves-effect waves-light"
                                        onClick={() => document.getElementById("getFile").click()}>
                                    Load More Files
                                </button>
                                <input type='file' id="getFile" style={{display: "none"}} onChange={uploadDocument}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}