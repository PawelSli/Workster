import MainProfile from "./MainProfile";
import EditProfile from "./EditProfile";
import React from "react";

export default function SubProfile() {

    const url =window.location.href.split("/")
    if (url.includes("main") || url.includes("main#")) {
        return <MainProfile/>
    }else if(url.includes("edit-profile") || url.includes("edit-profile#")){
        return <EditProfile/>
    }
    return (<div/>)
}