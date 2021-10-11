import {useState} from "react";
import {EditorState} from "draft-js";
import {Editor} from "react-draft-wysiwyg";
import CreatableMultiSearch from "../reusable/CreatableMultiSearch";

export default function AddJobDescription() {
    const [editorState, onEditorStateChange] = useState(EditorState.createEmpty());

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
                        <h2 className="text-dark">Add job description</h2>
                        <p>Add a basic description, requirements, and other necessary information pertaining to the job
                            posting.</p>
                    </div>
                    <form className="job-desc-form-form">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Add message for employer</label>
                            <div className="draft-editor-root">
                                <Editor editorState={editorState} onEditorStateChange={onEditorStateChange}/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Add skills </label>
                            <CreatableMultiSearch valueOptions={options}/>
                        </div>
                        <button className="btn btn-primary" type="submit">Move on</button>
                    </form>
                </div>
            </section>
        </main>
    );

}