export default function JobOfferBasicInformation({goForwardFunction}) {

    return (
        <div>
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
            <button onClick={()=>goForwardFunction()} className="btn btn-primary" type="submit">Move on</button>
        </div>
    )
}