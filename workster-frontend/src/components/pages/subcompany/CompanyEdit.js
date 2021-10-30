import React, {useState} from "react";
import {Editor} from "react-draft-wysiwyg";
import CreatableMultiSearch from "../../reusable/CreatableMultiSearch";
import {EditorState} from "draft-js";

export default function CompanyEdit() {

    const [editorState, onEditorStateChange ] = useState(EditorState.createEmpty());

    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
    ];


    return (
        <div className="body p-2">
            <form className="job-desc-form-form">
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">Edit your company description</label>
                    <div className="draft-editor-root">
                        <Editor
                            editorState={editorState}
                            onEditorStateChange={onEditorStateChange}
                        />
                    </div>
                </div>
                <div className="mb-3 form-group d-flex flex-column">
                    <label className="form-label" htmlFor="exampleFormControlFile1">Add new company logo</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                </div>
                <button className="btn btn-primary" type="submit">Approve</button>
            </form>
        </div>
    )

}