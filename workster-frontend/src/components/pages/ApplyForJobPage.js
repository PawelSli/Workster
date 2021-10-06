import CreatableMultiSearch from "../reusable/CreatableMultiSearch";
import {Editor} from "react-draft-wysiwyg";
import { EditorState } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {useState} from "react";


export default function ApplyForJobPage() {
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
                        <h2 className="text-dark">Apply for a job</h2>
                        <p>Complete the form below to apply for the position listed.</p>
                    </div>
                    <form className="job-desc-form-form">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Add message for employer</label>
                            <div className="draft-editor-root">
                                <Editor
                                    editorState={editorState}
                                    onEditorStateChange={onEditorStateChange}
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Add some CV files from your account</label>
                            <CreatableMultiSearch valueOptions={options}/>
                        </div>
                        <div className="mb-3 form-group d-flex flex-column">
                            <label className="form-label" htmlFor="exampleFormControlFile1">Add some new file if you
                                want</label>
                            <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                        </div>
                        <button className="btn btn-primary" type="submit">Move on</button>
                    </form>
                </div>
            </section>
        </main>
    );
}