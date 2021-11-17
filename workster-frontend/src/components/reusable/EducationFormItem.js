import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import React, {useState} from "react";

export default function EducationFormItem({position, title, school, location, remove, update, updateCheckbox, startDate, endDate, stillEducate}) {

    const onChange = (e) => update(e.target, position);
    const onChangeCheckbox = (e) => updateCheckbox(position);

    return (
        <form className="job-desc-form-form mt-4 shadow-lg">
            <div className="text-end">
                <IconButton color="success" aria-label="add to shopping cart" size="large">
                    <DeleteIcon fontSize="inherit" onClick={remove}/>
                </IconButton>
            </div>
            <div className="text-center">
                <p className="h5">School nr {position}</p>
            </div>
            <div className="mb-3">
                <label htmlFor="inputTitle">Enter title</label>
                <input type="text" className="form-control" id="inputTitle" name="title" value={title}
                       onChange={onChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="inputCompany">Enter name of school</label>
                <input type="text" className="form-control" id="inputCompany" name="school" value={school}
                       onChange={onChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="inputLocation">Enter location</label>
                <input type="text" className="form-control" id="inputLocation" name="location" value={location}
                       onChange={onChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="inputStart">Indicate the time when you began to educate in this school</label>
                <input type="date" name="startDate" className="form-control" id="inputStart" value={startDate}
                       onChange={onChange}
                       placeholder="Company location"/>
            </div>
            <div className="mb-3">
                <input className="form-check-input" type="checkbox" value={stillEducate} id="defaultCheck1" name="stillEducate"
                       onChange={onChangeCheckbox} checked={stillEducate?"true":"false"}/>
                <label className="form-check-label checkbox-margin" htmlFor="defaultCheck1">
                    I still educate there now
                </label>
            </div>
            <div className="mb-3">
                <label htmlFor="inputEnd">Indicate the time when you ended educating in this facility</label>
                <input lang="eng-us" type="date" name="endDate" className="form-control" id="inputEnd" value={endDate}
                       onChange={onChange}
                       placeholder="School location" disabled={stillEducate ? "disabled" : ""}/>
            </div>
        </form>
    )

}