import MainProfile from "./MainProfile";
import EditProfile from "./EditProfile";
import React, {useEffect, useState} from "react";
import UserFiles from "./UserFiles";

export default function SubProfile() {

    const url = window.location.href.split("/");

    if (url.includes("main") || url.includes("main#")) {
        return <MainProfile/>
    } else if (url.includes("edit-profile") || url.includes("edit-profile#")) {
        return <EditProfile/>
    } else if (url.includes("files") || url.includes("files#")) {
        return <UserFiles/>
    }
    return (<div/>)
}