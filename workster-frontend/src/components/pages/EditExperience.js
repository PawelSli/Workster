import React, {useEffect, useState} from "react";
import {EditorState} from "draft-js";
import {Editor} from "react-draft-wysiwyg";
import CreatableMultiSearch from "../reusable/CreatableMultiSearch";
import "../../assets/styles/edit-experience.css"
import IconButton from "@mui/material/IconButton";
import AddCircle from '@mui/icons-material/AddCircle';
import ExperienceFormItem from "../reusable/ExperienceFormItem";
import ExperienceService from "../../services/experience.service";


export default function EditExperience() {

    const [list, setList] = useState([]);

    useEffect(() => {
        loadExperiences();
    }, []);

    const loadExperiences = () => {
        ExperienceService.getExperiences()
            .then(response => {
                console.log(response);
                setList(response.data.experienceList);
                console.log(response.data)
            }, error => console.log(error));
    };

    const onInputChange = ({name, value}, position) => {
        const clonedList = [...list];
        clonedList.splice(position, 1, {
            ...list[position],
            [name]: value
        });
        setList(clonedList);
        console.log(list)
    };

    const onCheckboxChange = (position) => {
        const clonedList = [...list];
        const previousValue = clonedList[position].stillWork;
        clonedList.splice(position, 1, {
            ...list[position],
            stillWork: !previousValue
        });
        setList(clonedList);
        console.log(list)
    };

    const onInputRemove = (position) => {
        const clonedList = [...list];
        clonedList.splice(position, 1);
        setList(clonedList);
    };

    const onInputAdd = () => {
        setList(list => [...list, {title: 'Title', company: 'Company', location: 'Location'}])
    };

    const saveExperiences = () => {
        ExperienceService.saveExperiences(list)
            .then(response => console.log(response),
                error => console.log(error));
    };


    return (
        <main>
            <section className="clean-block clean-form dark">
                <div className="container job-desc-form">
                    <div className="block-heading">
                        <h2 className="text-dark">Edit your experience</h2>
                        <p>Create your work list for recruiters to see.</p>
                    </div>
                    {
                        list.map((item, index) =>
                            <ExperienceFormItem location={item.location} company={item.company} title={item.title}
                                                position={index} update={onInputChange} remove={onInputRemove}
                                                startDate={item.startDate} endDate={item.endDate}
                                                stillWork={item.stillWork}
                                                updateCheckbox={onCheckboxChange}/>
                        )
                    }
                    <div className="mt-4 d-flex justify-content-center ">
                        <button type="button" className="btn btn-secondary" onClick={onInputAdd}>Add new
                            item
                        </button>
                        <button type="button" onClick={saveExperiences}
                                className="btn btn-primary buttons-submit">Submit
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );

}