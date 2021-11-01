import CreatableSingleSearch from "../reusable/CreatableSingleSearch";
import React from "react";

export default function ContactUs() {

    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
    ];

    return (
        <main>
            <section className="clean-block clean-form dark">
                <div className="container">
                    <div className="block-heading">
                        <h2 className="text-dark">Contact us</h2>
                        <p>Fill out the information below to contact portal support.</p>
                    </div>
                    <form className="job-desc-form-form shadow-lg">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name-1" name="name"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="subject">Subject</label>
                            <CreatableSingleSearch valueOptions={options} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email-1" name="email"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="message">Message</label>
                            <textarea className="form-control" id="message-1" name="message"/>
                        </div>
                        <div className="mb-3 text-center">
                            <button className="btn btn-primary" type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );

}