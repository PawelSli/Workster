import React from "react";
import ExperienceFormItem from "../reusable/ExperienceFormItem";

export default function EditEducation() {

    const initialList = [
        {id: 0, title: 'A', company: 'Sabre', location: 'Cracow'},
        {id: 1, title: 'B', company: 'Sabre', location: 'Cracow'},
        {id: 2, title: 'C', company: 'Sabre', location: 'Cracow'},
    ];

    const [list, setList] = React.useState(initialList);
    const handleAddItem = () => {
        let value = null;
        if(list && list.length){
            value = {id:list[list.length-1].id+1 ,title: 'Title',company: 'Company', location: 'Location'};
        }else {
            value = {id:0 ,title: 'Title',company: 'Company', location: 'Location'};
        }
        console.log(value.id)
        setList(prevState => [...prevState,value])
    }


    return (
        <main>
            <section className="clean-block clean-form dark">
                <div className="container job-desc-form">
                    <div className="block-heading">
                        <h2 className="text-dark">Edit your education</h2>
                        <p>Create your list of your educational institutions so recruiters can see them..</p>
                    </div>
                    {list.map((item) => (
                        <ExperienceFormItem location={item.location} company={item.company} title={item.title}
                                            number={item.id} list={list} setList={setList}/>
                    ))}
                    <div className="mt-4 d-flex justify-content-center ">
                        <button type="button" className="btn btn-secondary" onClick={()=>handleAddItem()}>Add new item</button>
                        <button type="button" className="btn btn-primary buttons-submit">Submit</button>
                    </div>
                </div>
            </section>
        </main>
    );

}