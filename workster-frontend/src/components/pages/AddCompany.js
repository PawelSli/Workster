import React, {useState} from "react";
import CreatableSingleSearch from "../reusable/CreatableSingleSearch";
import {Editor} from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';
import {EditorState, convertToRaw} from 'draft-js';
import "../../assets/styles/add-company.css"
import CompanyService from "../../services/company.service";

export default function AddCompany() {

    let editorState = EditorState.createEmpty();
    const [message, setMessage] = useState('');
    const [successful, setSuccessful] = useState(false);
    const [logo, setLogo] = useState(null);
    const [description, setDescription] = useState(editorState);
    const [userInfo, setUserInfo] = useState({
        title: '',
    });
    const onChangeValue = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        });
    };

    const onEditorStateChange = (editorState) => {
        setDescription(editorState);
    };

    const postCreateCompany = async (event) => {
        event.preventDefault();
        event.persist();
        setMessage("");
        setSuccessful(false);
        if (userInfo.description.value.length < 50) {
            setMessage("Description must have at least 50 characters.")
            return;
        }
        CompanyService.postCompany(userInfo.title, logo, userInfo.description.value)
            .then(result => {
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
                });
    };


    return (
        <main>
            <section className="clean-block clean-form dark">
                <div className="container job-desc-form">
                    <div className="block-heading">
                        <h2 className="text-dark">Create a company profile </h2>
                        <p>Fill out the information below to create your company profile.</p>
                    </div>
                    <form onSubmit={postCreateCompany} className="job-desc-form-form-add-job shadow-lg">
                        {message && (
                            <div className="form-group">
                                <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Enter your company name</label>
                            <input type="text" name="title" className="form-control" value={userInfo.title}
                                   onChange={onChangeValue}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Add your company logo</label>
                            <input type="file" className="form-control"
                                   onChange={event => setLogo(event.target.files[0])}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Add a description of your company and what it
                                does</label>
                            <div className="draft-editor-root">
                                <Editor
                                    editorState={description}
                                    toolbarClassName="toolbarClassName"
                                    wrapperClassName="wrapperClassName"
                                    editorClassName="editorClassName"
                                    onEditorStateChange={onEditorStateChange}
                                />
                                <textarea style={{display: 'none'}} disabled ref={(val) => userInfo.description = val}
                                          value={draftToHtml(convertToRaw(description.getCurrentContent()))}/>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary" type="submit">Publish your company description</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}