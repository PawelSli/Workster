import CreatableSelect from "react-select/creatable/dist/react-select.esm";
import React from "react";

export default function CreatableSingleSearch({valueOptions,text}) {

    const handleChange = (newValue, actionMeta) => {
        console.log("Value:", newValue);
    }
    return <CreatableSelect isClearable onChange={handleChange} options={valueOptions} placeholder={text}/>

}