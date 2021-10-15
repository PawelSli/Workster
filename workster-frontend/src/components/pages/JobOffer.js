import {useState} from "react";
import JobOfferStep from "../steps/JoOfferStep";

export default function JobOffer() {

    const [page, setPage] = useState(0);

    function goForward() {
        setPage(page + 1);
    }

    function goBack() {
        setPage(page - 1);
    }

    return (
        <main>
            <section className="clean-block clean-form dark">
                <div className="container">
                    <div className="block-heading">
                        <h2 className="text-info">Add job post</h2>
                        <p>Add some basic information to create your job announcement.</p>
                    </div>
                    <form>
                        <JobOfferStep step={page} goForwardFunction={()=>goForward()} goBackFunction={()=>goBack()}/>
                    </form>
                </div>
            </section>
        </main>
    )
}