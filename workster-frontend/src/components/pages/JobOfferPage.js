import IonRangeSlider from 'react-ion-slider';
import React, {useEffect} from "react";
import $ from 'jquery';
import CreatableMultiSearch from "../reusable/CreatableMultiSearch";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import ListItemText from "@mui/material/ListItemText";
import {Event, HomeWork, LocationOn, Payment} from "@mui/icons-material";
import "../../assets/styles/my-job-offer.css"
import CompanyHeader from "../reusable/CompanyHeader";

export default function JobOfferPage() {
    window.$ = $;

    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
    ];

    useEffect(() => {
        const script = document.createElement('script');
        script.innerHTML = "$('#demo_1').ionRangeSlider({type: 'double',grid: true,min: 0,max: 1000,from: 200,to: 800,prefix: '$'})"
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <main className="  ">
            <CompanyHeader image="star-sky.jpg" name="Atos Poland Global Services Sp. z o.o."/>
            <div className="row mt-2 d-flex justify-content-center">
                <div className="col-12 col-md-8 card d-flex flex-column shadow-lg p-4">
                    <h4 className="display-6 m-company mt-1 text-center">Junior Java Developer</h4>
                    <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <LocationOn />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Location" secondary="Cracow, Lesser Poland, Poland" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <Payment />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Salary" secondary="10 000 $ monthly" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <HomeWork />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Remote job"  />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <Event />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Published" secondary="01.02.2022"  />
                        </ListItem>
                    </List>
                    <div className="d-flex flex-row  mt-2 ">
                        <button type="button" className="btn btn-dark  ">Apply for a job</button>
                        <button type="button" className="btn btn-secondary  apply-buttons ">Save a post</button>
                    </div>
                    <div className="mt-4">
                        At Transporeon we embrace transformation and change in total sync with one another. We rethink, reinvent and rework ideas from one moment to the next – as many times as is necessary to get the job done right. That’s how we respond to the new challenges that we face each and every day. And regardless of whether you are just starting your career or are already a pro – we believe you can be the transformation. Are you ready?


                        You are ready, if you ...


                        are willing to participate on our mission to digitize logistics world by bringing modern solutions to the users, which significantly improve their daily work
                        have the ability to transfer ideas or customer wishes into solutions and features
                        the stubbornness not to give up till it works and you can be proud of your work
                        have at least first professional experience in full-stack software development
                        can bring one year of experience in following technologies: Java, Spring Boot, Hibernate, SQL Database
                        enjoy a combination of a team work with individual responsibility for given tasks
                        like working in an international team speaking English on daily basis, Polish is as well spoken within the offices
                        prefer a hybrid working model with the combination of office time and remote work

                        Team Snow is ready and waiting with ...


                        responsibility for the Rate Management application within Transporeon platform. Rate Management uses defined criteria to find the most suitable forwarding agent and calculates the transport prices for a transport. For this purpose, customers can flexibly define their rate structures and store associated rates in the system. In addition, users can perform pricing based on various transport parameters within the user interface.
                        cross-functional team working in an agile way using Jira as a project management tool
                        the possibility to participate on meaningful projects in close cooperation with colleagues from product management, other software development teams, UX/UI and quality management
                        security of a permanent contract within successful IT company with the chance to develop our own product
                        friendly recruitment process which gives you the chance to get to know us as well as to show your attitude and your coding skills

                        Some tech-stack information for you ...


                        Back- end: Java 11, Framework: Spring, Spring-Boot
                        Front-end: Angular 11
                        Database: PostgreSQL, Database framework: Hibernate
                        Project management tool: JIRA
                        Version control tool: Git
                        Build management tool: Jenkins
                        Docker
                    </div>
                </div>
            </div>
        </main>
    );

}