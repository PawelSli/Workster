import React, {useEffect, useState} from "react";
import EducationService from "../../services/education.service";
import ExperienceService from "../../services/experience.service";
import EducationFormItem from "../reusable/EducationFormItem";


export default function EditEducation() {

    const [list, setList] = useState([]);

    useEffect(() => {
        loadEducations();
    }, []);

    const loadEducations = () => {
        EducationService.getEducations()
            .then(response => {
                console.log(response);
                setList(response.data.educationList);
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
        const previousValue = clonedList[position].stillEducate;
        clonedList.splice(position, 1, {
            ...list[position],
            stillEducate: !previousValue
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
        setList(list => [...list, {title: 'Title', school: 'School', location: 'Location'}])
    };

    const saveEducations = () => {
        EducationService.saveEducaions(list)
            .then(response => console.log(response),
                error => console.log(error));
    };


    return (
        <main>
            <section className="clean-block clean-form dark">
                <div className="container job-desc-form">
                    <div className="block-heading">
                        <h2 className="text-dark">Edit your education</h2>
                        <p>Create your list of your educational institutions so recruiters can see them..</p>
                    </div>
                    {
                        list.map((item,index) =>
                            <EducationFormItem title={item.title} school={item.school} location={item.location}
                                position={index} update={onInputChange} remove={onInputRemove}
                                startDate={item.startDate} endDate={item.endDate}
                                stillEducate={item.stillEducate}
                                updateCheckbox={onCheckboxChange}/>
                        )
                    }
                    <div className="mt-4 d-flex justify-content-center ">
                        <button type="button" className="btn btn-secondary" onClick={onInputAdd}>Add new item</button>
                        <button type="button" className="btn btn-primary buttons-submit" onClick={saveEducations}>Submit</button>
                    </div>
                </div>
            </section>
        </main>
    );

}