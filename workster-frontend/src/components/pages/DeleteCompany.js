import $ from "jquery";
import CreatableMultiSearch from "../reusable/CreatableMultiSearch";
import React from "react";
import CompanyHeader from "../reusable/CompanyHeader";
import List from "@mui/material/List";
import ExperienceItem from "../reusable/ExperienceItem";
import Divider from "@mui/material/Divider";
import CompanyItem from "../reusable/CompanyItem";

export default function DeleteCompany() {

    window.$ = $;

    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
    ];


    return (
        <main className="page landing-page main-jobs-color-background">
            <div className="container  p-1 mt-3 ">
                <div className="row  ml-1 mr-1">
                    <div className="col-12 card p-5 shadow-lg">
                        <div className="row  ">
                            <div className="col-12 col-md-6">
                                <CreatableMultiSearch valueOptions={options} text={"Select name of company"}/>
                            </div>
                            <div className="col-12 mt-3 mt-md-0 col-md-6">
                                <button type="button" className="btn btn-primary search-user-button">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container p-1 mt-3 card shadow-lg">
                <div className="card-body ">
                    <div className="text-center">
                        <p className="h5">Companies:</p>
                    </div>
                    <div >
                        <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
                            <CompanyItem title="Sabre Company" image="sabre.jpg" from="01.01.2008"/>
                            <Divider variant="inset" component="li" />
                            <CompanyItem title="Sabre Company" image="ibm.jpg" from="01.01.2008"/>
                            <Divider variant="inset" component="li" />
                            <CompanyItem title="Sabre Company" image="sabre.jpg" from="01.01.2008"/>
                            <Divider variant="inset" component="li" />
                            <CompanyItem title="Sabre Company" image="ibm.jpg" from="01.01.2008"/>
                            <Divider variant="inset" component="li" />
                            <CompanyItem title="Sabre Company" image="sabre.jpg" from="01.01.2008"/>
                            <Divider variant="inset" component="li" />
                            <CompanyItem title="Sabre Company" image="ibm.jpg" from="01.01.2008"/>
                            <Divider variant="inset" component="li" />
                            <CompanyItem title="Sabre Company" image="sabre.jpg" from="01.01.2008"/>
                            <Divider variant="inset" component="li" />
                            <CompanyItem title="Sabre Company" image="ibm.jpg" from="01.01.2008"/>
                            <Divider variant="inset" component="li" />
                            <CompanyItem title="Sabre Company" image="sabre.jpg" from="01.01.2008"/>
                            <Divider variant="inset" component="li" />
                            <CompanyItem title="Sabre Company" image="ibm.jpg" from="01.01.2008"/>
                            <Divider variant="inset" component="li" />
                        </List>
                    </div>
                </div>
            </div>
        </main>
    )
}