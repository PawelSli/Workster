import React from "react";
import {useHistory} from "react-router";

export default function NavigationDropdownItem({key,target}) {

    const history = useHistory();
    const handleClick = () => {
        history.push(`/profile/main/${JSON.parse(localStorage.getItem("user")).username}`);
        window.location.reload();
    };

    return (
        <a className="dropdown-item" href={`http://localhost:3000/company/${target}`}>
            {target}
        </a>
    )

}