import React, {useState} from "react";
import {Editor} from "react-draft-wysiwyg";
import CreatableMultiSearch from "../../reusable/CreatableMultiSearch";
import draftToHtml from 'draftjs-to-html';
import {EditorState, convertToRaw} from 'draft-js';
import CompanyService from "../../../services/company.service";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import {useHistory} from "react-router";




export default function CompanyEdit({oldName}) {

    let editorState = EditorState.createEmpty();
    const [message, setMessage] = useState('');
    const [successful, setSuccessful] = useState(false);
    const [logo, setLogo] = useState(null);
    const [description, setDescription] = useState(editorState);
    const [open, setOpen] = React.useState(true);
    const history = useHistory();
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

    const postEditCompany = async (event) => {
        event.preventDefault();
        event.persist();
        setMessage("");
        setSuccessful(false);
        setOpen(true)
        if (userInfo.description.value.length < 50) {
            setMessage("Description must have at least 50 characters.")
            return;
        }
        CompanyService.editCompany(userInfo.title, logo, userInfo.description.value,oldName)
            .then(result => {
                    setMessage(result.data.message);
                    setSuccessful(true);
                    history.push(`/company/${userInfo.title}`);
                    window.location.reload();
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
        <div className="body p-2">
            <form onSubmit={postEditCompany} className="job-desc-form-form">
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">Edit your company name</label>
                    <input type="text" name="title" className="form-control" value={userInfo.title}
                           onChange={onChangeValue}/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">Edit your company description</label>
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
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">Edit your company logo</label>
                    <input type="file" className="form-control"
                           onChange={event => setLogo(event.target.files[0])}/>
                </div>
                {message && (
                    successful?
                        (
                            <Collapse in={open}>
                                <Alert
                                    action={
                                        <IconButton
                                            aria-label="close"
                                            color="inherit"
                                            size="small"
                                            onClick={() => {
                                                setOpen(false);
                                            }}
                                        >
                                            <CloseIcon fontSize="inherit" />
                                        </IconButton>
                                    }
                                    severity={"success"}
                                    sx={{ mb: 2 }}
                                >
                                    Editing your company information ended successfully
                                </Alert>
                            </Collapse>

                        )
                        :
                        (
                            <Collapse in={open}>
                                <Alert
                                    severity={"error"}
                                    action={
                                        <IconButton
                                            aria-label="close"
                                            color="inherit"
                                            size="small"
                                            onClick={() => {
                                                setOpen(false);
                                            }}
                                        >
                                            <CloseIcon fontSize="inherit" />
                                        </IconButton>
                                    }
                                    sx={{ mb: 2 }}
                                >
                                    {message}
                                </Alert>
                            </Collapse>
                        )
                )}
                <div className="text-center mb-2">
                    <button className="btn btn-primary" type="submit">Edit your company information</button>
                </div>
            </form>
        </div>
    )

}