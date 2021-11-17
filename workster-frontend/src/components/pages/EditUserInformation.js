import React, {useEffect, useState} from "react";
import {EditorState} from "draft-js";
import CreatableSingleSearch from "../reusable/CreatableSingleSearch";
import {Editor} from "react-draft-wysiwyg";
import UserService from "../../services/user.service";

export default function EditUserInformation() {

    const [editorState, onEditorStateChange] = useState(EditorState.createEmpty());
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [birth, setBirth] = useState('');
    const [description, setDescription] = useState('');
    const [facebook, setFacebook] = useState('');
    const [github, setGithub] = useState('');
    const [image, setImage] = useState('');
    const [instagram, setInstagram] = useState('');
    const [phone, setPhone] = useState('');
    const [title, setTitle] = useState('');
    const [twitter, setTwitter] = useState('');
    const [website, setWebsite] = useState('');

    useEffect(() => {
        UserService.getMainProfileInformationForEdit()
            .then(response => {
                setName(response.data.username);
                setEmail(response.data.email);
                setAddress(response.data.address);
                setBirth(response.data.birth);
                setDescription(response.data.description);
                setFacebook(response.data.facebook);
                setGithub(response.data.github);
                setImage(response.data.image);
                setInstagram(response.data.instagram);
                setPhone(response.data.phone);
                setTitle(response.data.title);
                setTwitter(response.data.twitter);
                setWebsite(response.data.website);
            })
            .catch(error => console.log(error));
    }, []);

    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
    ];

    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const handleEditUserInformation = (event) => {
        event.preventDefault();
        setMessage("");
        setSuccessful(false);

        UserService.editMainProfileInformation(name, email, address, birth, description, facebook, github, image, instagram, phone, title, twitter, website)
            .then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                },
                (error) => {
                    let resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setMessage(resMessage);
                    setSuccessful(false)
                }
            )
    };


    return (
        <main>
            <section className="clean-block clean-form dark">
                <div className="container job-desc-form">
                    <div className="block-heading">
                        <h2 className="text-dark">Edit your profile information</h2>
                        <p>Fill out the form below to make changes to your own profile.</p>
                    </div>
                    <form onSubmit={handleEditUserInformation} className="job-desc-form-form-add-job shadow-lg">
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
                            <label className="form-label" htmlFor="name">Edit your name</label>
                            <input type="text" className="form-control" value={name} onChange={(event => setName(event.target.value))}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Edit your email</label>
                            <input type="text" className="form-control" value={email} onChange={(event => setEmail(event.target.value))}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Edit your title</label>
                            <input type="text" className="form-control" value={title} onChange={(event => setTitle(event.target.value))}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Edit your location</label>
                            <input type="text" className="form-control" value={address} onChange={(event => setAddress(event.target.value))}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Edit your mobile phone</label>
                            <input type="phone" className="form-control" value={phone} onChange={(event => setPhone(event.target.value))}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Edit your website link</label>
                            <input type="phone" className="form-control" value={website} onChange={(event => setWebsite(event.target.value))}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Edit your Github account link</label>
                            <input type="phone" className="form-control" value={github} onChange={(event => setGithub(event.target.value))}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Edit your Twitter account link</label>
                            <input type="phone" className="form-control" value={twitter} onChange={(event => setTwitter(event.target.value))}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Edit your Instagram account linkn</label>
                            <input type="phone" className="form-control" value={instagram} onChange={(event => setInstagram(event.target.value))}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Edit your Facebook account link</label>
                            <input type="phone" className="form-control" value={facebook} onChange={(event => setFacebook(event.target.value))}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Edit your profile description</label>
                            <div className="draft-editor-root">
                                <Editor editorState={editorState} onEditorStateChange={onEditorStateChange}
                                        editorClassName="editor-height"/>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary" type="submit">Save changes to your profile</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )

}