import {Editor} from "react-draft-wysiwyg";
import CreatableMultiSearch from "../reusable/CreatableMultiSearch";
import {useState} from "react";
import {EditorState} from "draft-js";

export default function JobOfferDescription({goBackFunction}){
    const [editorState, onEditorStateChange] = useState(EditorState.createEmpty());

    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
    ];


    return (
        <div>
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
            <button onClick={()=>goBackFunction()} className="btn btn-primary" type="submit">Move on</button>
        </div>
    )
}