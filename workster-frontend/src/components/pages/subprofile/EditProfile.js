import {Editor} from "react-draft-wysiwyg";
import CreatableMultiSearch from "../../reusable/CreatableMultiSearch";
import {useState} from "react";
import {EditorState} from "draft-js";

export default function EditProfile() {

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
                        <h2 className="text-dark">Edit profile</h2>
                        <p>Edit basic profile information, links and description</p>
                    </div>
                    <form className="job-desc-form-form">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Name</label>
                            <input className="form-control item" type="text" id="name"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Job position</label>
                            <input className="form-control item" type="text" id="name"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Email</label>
                            <input className="form-control item" type="email" id="name"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Phone</label>
                            <input className="form-control item" type="tel" id="name"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Mobile</label>
                            <input className="form-control item" type="tel" id="name"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Address</label>
                            <input className="form-control item" type="text" id="name"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Website</label>
                            <input className="form-control item" type="text" id="name"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Github</label>
                            <input className="form-control item" type="text" id="name"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Twitter</label>
                            <input className="form-control item" type="text" id="name"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Instagram</label>
                            <input className="form-control item" type="text" id="name"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Facebook</label>
                            <input className="form-control item" type="text" id="name"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="description">Edit description</label>
                            <textarea className="form-control" id="description" name="message"/>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-secondary" type="submit">Go back</button>
                            <button className="btn btn-primary edit-button" type="submit">Edit</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )

}