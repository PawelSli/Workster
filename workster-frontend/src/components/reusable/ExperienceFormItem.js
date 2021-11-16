import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import React, {useState} from "react";

export default function ExperienceFormItem({position, title, company, location, remove, update, updateCheckbox, startDate, endDate, stillWork}) {

    const onChange = (e) => update(e.target, position);
    const onChangeCheckbox = (e) => updateCheckbox(position);
    const [disabled, setDisable] = useState(stillWork);

    return (
        <form className="job-desc-form-form mt-4 shadow-lg">
            <div className="text-end">
                <IconButton color="success" aria-label="add to shopping cart" size="large">
                    <DeleteIcon fontSize="inherit" onClick={remove}/>
                </IconButton>
            </div>
            <div className="text-center">
                <p className="h5">Job nr {position}</p>
            </div>
            <div className="mb-3">
                <label htmlFor="inputTitle">Enter title</label>
                <input type="text" className="form-control" id="inputTitle" name="title" value={title}
                       onChange={onChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="inputCompany">Enter company</label>
                <input type="text" className="form-control" id="inputCompany" name="company" value={company}
                       onChange={onChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="inputLocation">Enter location</label>
                <input type="text" className="form-control" id="inputLocation" name="location" value={location}
                       onChange={onChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="inputStart">Indicate the time when you began working in this
                    occupation</label>
                <input type="date" name="startDate" className="form-control" id="inputStart" value={startDate}
                       onChange={onChange}
                       placeholder="Company location"/>
            </div>
            <div className="mb-3">
                <input className="form-check-input" type="checkbox" value={stillWork} id="defaultCheck1" name="stillWork"
                       onChange={onChangeCheckbox} checked={stillWork?"true":"false"}/>
                <label className="form-check-label checkbox-margin" htmlFor="defaultCheck1">
                    I still work there now
                </label>
            </div>
            <div className="mb-3">
                <label htmlFor="inputEnd">Indicate the time when you ended working in this
                    occupation</label>
                <input lang="eng-us" type="date" name="endDate" className="form-control" id="inputEnd" value={endDate}
                       onChange={onChange}
                       placeholder="Company location" disabled={stillWork ? "disabled" : ""}/>
            </div>
        </form>
    )

}