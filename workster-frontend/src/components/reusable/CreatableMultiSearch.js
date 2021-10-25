import React from "react";
import CreatableSelect from "react-select/creatable";

export default function CreatableMultiSearch({valueOptions,text}) {

    const handleChange = (newValue, actionMeta) => {
        console.log("Value:", newValue);
    }
    return <CreatableSelect isMulti onChange={handleChange} options={valueOptions} placeholder={text}/>
}