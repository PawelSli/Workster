import PropTypes from "prop-types";


function TextField({label,name,...props}) {

    return (
        <div className="mb-3">
            <label className="form-label" htmlFor={name}>{label}</label>
            <input className="form-control item" type="text" id={name}/>
        </div>
    )
}

TextField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}