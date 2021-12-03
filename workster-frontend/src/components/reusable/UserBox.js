import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {FileIcon, defaultStyles} from 'react-file-icon';
import "../../assets/styles/user-files.css"
import DocumentService from "../../services/document.service"


export default function UserBox({fileName, fileSize, setMessage, inputRemoveFunction, position,changeOutcome}) {

    const extension = fileName.split(".").pop();

    const handleDownloadFile = (event) => {
        setMessage('');
        changeOutcome(false);
        event.preventDefault();
        DocumentService.downloadFile(fileName).then(
            result => {
                changeOutcome(true);
                result.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = fileName;
                    a.click();
                });
            },
            error => {
                changeOutcome(false);
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

    const handleRemoveFile = (event) => {
        setMessage('');
        changeOutcome(false);
        event.preventDefault();
        DocumentService.deleteFile(fileName).then(
            result => {
                changeOutcome(true);
                setMessage(result.data.message);
                inputRemoveFunction(position);
            },
            error => {
                changeOutcome(false);
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
        <div className="col-6 col-md-4 col-lg-3 col-xl-2 ">
            <div className="file-man-box bg-secondary">
                <a href="#" className="file-close" onClick={handleRemoveFile}>
                    <FontAwesomeIcon icon={faTimesCircle}/>
                </a>
                <div className="file-img-box mb-2">
                    <FileIcon extension={extension}  {...defaultStyles[extension]} />
                </div>
                <a href="#" className="file-download" onClick={handleDownloadFile}><FontAwesomeIcon icon={faDownload}/></a>
                <div className="file-man-title">
                    <h5 className="mb-0 text-overflow">{fileName}</h5>
                    <p className="mb-0"><small>{fileSize} B</small></p>
                </div>
            </div>
        </div>
    )
}