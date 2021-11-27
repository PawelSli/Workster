import React from "react";
import CreatableSelect from "react-select/creatable";

export default function CreatableMultiSearch({valueOptions,text,value,setValue}) {


    return <CreatableSelect isMulti onChange={setValue} options={valueOptions} placeholder={text}
                value={value} />
}