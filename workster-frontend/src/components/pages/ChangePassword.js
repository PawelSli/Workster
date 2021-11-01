import React, {useState} from "react";
import {EditorState} from "draft-js";
import CreatableSingleSearch from "../reusable/CreatableSingleSearch";
import {Editor} from "react-draft-wysiwyg";

export default function EditPassword() {
    const [editorState, onEditorStateChange ] = useState(EditorState.createEmpty());

    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
    ];

    return (
        <main>
            <section className="clean-block clean-form ">
                <div className="container job-desc-form ">
                    <div className="block-heading">
                        <h2 className="text-dark">Edit your profile information</h2>
                        <p>Fill out the form below to make changes to your own profile.</p>
                    </div>
                    <form className="job-desc-form-form-add-job shadow-lg">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Enter your current password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Enter your new password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Repeat your new password</label>
                            <input type="password" className="form-control" />
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