import React, {useState} from "react";
import {EditorState} from "draft-js";
import CreatableSingleSearch from "./reusable/CreatableSingleSearch";
import {Editor} from "react-draft-wysiwyg";

export default function AddCompany() {

    const [page, setPage] = useState(0);
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
                        <h2 className="text-dark">Create a company profile </h2>
                        <p>Fill out the information below to create your company profile.</p>
                    </div>
                    <form className="job-desc-form-form-add-job shadow-lg">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Enter your company name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Add your company logo</label>
                            <input type="file" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Add a description of your company and what it does</label>
                            <div className="draft-editor-root">
                                <Editor editorState={editorState} onEditorStateChange={onEditorStateChange} editorClassName="editor-height"/>
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