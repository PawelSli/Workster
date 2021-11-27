import CreatableSelect from "react-select/creatable/dist/react-select.esm";
import React from "react";

export default function CreatableSingleSearch({valueOptions,handleChange,value}) {

    return <CreatableSelect isClearable onChange={(value)=>handleChange(value)} value={value} options={valueOptions} />

}