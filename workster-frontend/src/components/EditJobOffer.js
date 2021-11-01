import React, {useState} from "react";
import {EditorState} from "draft-js";
import CreatableSingleSearch from "./reusable/CreatableSingleSearch";
import {Editor} from "react-draft-wysiwyg";

export default function EditJobOffer() {

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
                        <h2 className="text-dark">Edit job offer</h2>
                        <p>Fill out the form below to edit your own job offer.</p>
                    </div>
                    <form className="job-desc-form-form-add-job shadow-lg">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Assign a company to a job ad</label>
                            <select className="js-example-basic-single form-control item" name="state">
                                <option value="AL">Alabama</option>
                                <option value="WY">Wyoming</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Enter job title</label>
                            <CreatableSingleSearch valueOptions={options} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Enter job location</label>
                            <CreatableSingleSearch valueOptions={options} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Specify the lower payout spread ($)</label>
                            <input type="number" className="form-control"  min="100"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Specify the upper payout spread ($)</label>
                            <input type="number" className="form-control" min="100" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Specify the payout period</label>
                            <CreatableSingleSearch valueOptions={options} />
                        </div>
                        <div className="mb-3">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label className="form-label checkbox-margin" htmlFor="name">Remote job</label>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Add a description for viewers</label>
                            <div className="draft-editor-root">
                                <Editor editorState={editorState} onEditorStateChange={onEditorStateChange} editorClassName="editor-height"/>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary" type="submit">Save changes to job offer</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}