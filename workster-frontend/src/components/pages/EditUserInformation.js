import React, {useState} from "react";
import {EditorState} from "draft-js";
import CreatableSingleSearch from "../reusable/CreatableSingleSearch";
import {Editor} from "react-draft-wysiwyg";

export default function EditUserInformation() {

    const [editorState, onEditorStateChange ] = useState(EditorState.createEmpty());

    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
    ];

    return (
        <main>
            <section className="clean-block clean-form dark">
                <div className="container job-desc-form">
                    <div className="block-heading">
                        <h2 className="text-dark">Edit your profile information</h2>
                        <p>Fill out the form below to make changes to your own profile.</p>
                    </div>
                    <form className="job-desc-form-form-add-job shadow-lg">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Edit your name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Edit your title</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Edit your location</label>
                            <select className="js-example-basic-single form-control item" name="state">
                                <option value="AL">Alabama</option>
                                <option value="WY">Wyoming</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Edit your mobile phone</label>
                            <input type="phone" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Edit your website link</label>
                            <CreatableSingleSearch valueOptions={options} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Edit your Github account link</label>
                            <CreatableSingleSearch valueOptions={options} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Edit your Twitter account link</label>
                            <CreatableSingleSearch valueOptions={options} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Edit your Instagram account linkn</label>
                            <CreatableSingleSearch valueOptions={options} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Edit your Facebook account link</label>
                            <CreatableSingleSearch valueOptions={options} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Edit your profile description</label>
                            <div className="draft-editor-root">
                                <Editor editorState={editorState} onEditorStateChange={onEditorStateChange} editorClassName="editor-height"/>
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