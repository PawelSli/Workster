import MainProfile from "./MainProfile";

export default function SubProfile() {

    const url =window.location.href.split("/")
    if (url.includes("profile")) {
        return <MainProfile/>
    }
    return (<div/>)
}