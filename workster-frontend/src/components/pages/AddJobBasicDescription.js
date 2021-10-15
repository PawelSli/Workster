export default function AddJobBasicDescription() {
    return (
        <main>
            <section className="clean-block clean-form dark">
                <div className="container">
                    <div className="block-heading">
                        <h2 className="text-info">Add job post</h2>
                        <p>Add some basic information to create your job announcement.</p>
                    </div>
                    <form>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Job title</label>
                            <input className="form-control item" type="text" id="name"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">Job location</label>
                            <select className="js-example-basic-single form-control item" name="state">
                                <option value="AL">Alabama</option>
                                ...
                                <option value="WY">Wyoming</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">Employment type</label>
                            <select className="form-control item js-example-tags">
                                <option selected="selected">Full time employment</option>
                                <option>Partial employment</option>
                                <option>Something else</option>
                            </select>
                        </div>

                        <button className="btn btn-primary" type="submit">Move on</button>
                    </form>
                </div>
            </section>
        </main>
    )
}