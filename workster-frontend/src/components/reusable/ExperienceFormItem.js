import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import React, {useState} from "react";

export default function ExperienceFormItem({number,title,company,location,list,setList}) {

    const [disabled,setDisable] = useState(false);

    function removeItem() {
        setList(list.filter(item => item.id !== number))
    }

    return (
        <form className="job-desc-form-form mt-4 shadow-lg">
            <div className="text-end">
                <IconButton color="success" aria-label="add to shopping cart" size="large">
                    <DeleteIcon fontSize="inherit" onClick={()=>removeItem()}/>
                </IconButton>
            </div>
            <div className="text-center">
                <p className="h5">Job nr {number+1}</p>
            </div>
            <div className="mb-3">
                <label htmlFor="inputTitle">Enter title</label>
                <input type="text" className="form-control" id="inputTitle" placeholder={title}/>
            </div>
            <div className="mb-3">
                <label htmlFor="inputCompany">Enter company</label>
                <input type="text" className="form-control" id="inputCompany" placeholder={company}/>
            </div>
            <div className="mb-3">
                <label htmlFor="inputLocation">Enter location</label>
                <input type="text" className="form-control" id="inputLocation" placeholder={location}/>
            </div>
            <div className="mb-3">
                <label htmlFor="inputStart">Indicate the time when you began working in this
                    occupation</label>
                <input type="month" className="form-control" id="inputStart"
                       placeholder="Company location"/>
            </div>
            <div className="mb-3">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" onClick={()=>setDisable(!disabled)}/>
                <label className="form-check-label checkbox-margin" htmlFor="defaultCheck1">
                    I still work there now
                </label>
            </div>
            <div className="mb-3">
                <label htmlFor="inputEnd">Indicate the time when you ended working in this
                    occupation</label>
                <input lang="eng-us" type="month" className="form-control" id="inputEnd"
                       placeholder="Company location" disabled={disabled? "disabled":""}/>
            </div>
            <div className="mb-3 form-group d-flex flex-column">
                <label className="form-label" htmlFor="exampleFormControlFile1">Add company logo if you
                    want</label>
                <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
            </div>
        </form>
    )

}