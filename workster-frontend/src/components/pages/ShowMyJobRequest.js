import JobOfferListElement from "../reusable/JobOfferListElement";
import React from "react";

export default function ShowMyJobRequest() {

    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
    ];

    return (
        <div className="container pt-3 mb-5">
            <div className="row d-flex justify-content-center ">
                <JobOfferListElement image="red.jpg" title="Level Designer" company="CD Projekt RED"
                                     location="Warsaw, Mazowieckie, Poland" cash="10.000 $" remote="remote"
                                     date="10.01.2022" favourite="Y" applied="Y"/>
            </div>
            <div className="row mt-2 d-flex justify-content-center ">
                {
                    <div className="col-12 col-md-11 card p-2 pt-3 d-flex justify-content-center shadow-lg">
                        <div className="mb-3">
                            <label className="form-label text-center" htmlFor="name">Message from the
                                applicant</label>
                            <textarea disabled className="form-control disabled" rows="12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt tortor id tincidunt maximus. Maecenas congue hendrerit mauris a vestibulum. Donec tincidunt justo id ornare sodales. Aliquam et dapibus lectus, nec varius ligula. Vestibulum in dapibus felis, vitae lacinia ipsum. Ut lacinia, lorem nec dapibus tristique, ante enim elementum odio, ut ultricies lorem massa eu odio. Etiam dapibus posuere ex ac egestas. Maecenas commodo augue et molestie scelerisque. In hac habitasse platea dictumst. Maecenas et mattis lorem. Vivamus efficitur finibus sapien. Morbi magna magna, placerat et justo at, porta aliquet arcu. Fusce quis facilisis nisl, ac blandit nisl. Nunc nulla elit, fringilla quis nisi non, posuere viverra lorem.

Pellentesque fermentum lacinia metus et placerat. Ut semper risus eros, ut laoreet enim egestas at. Cras sit amet sapien bibendum, finibus sapien porttitor, dictum est. Nunc eu ligula sollicitudin, consequat lectus eu, porttitor mauris. Vestibulum commodo ante elit, et molestie sapien mollis at. Vivamus sed cursus nunc, in bibendum sapien. Nullam ornare risus eget arcu ultrices interdum. Duis ac auctor nunc. Aliquam vel euismod metus. Quisque vel libero dictum, feugiat orci faucibus, pharetra tortor. Nunc feugiat, nulla ullamcorper convallis sollicitudin, erat quam feugiat nunc, ut viverra lacus quam sit amet orci. Ut tempor, magna quis lacinia interdum, tellus augue iaculis justo, et scelerisque ipsum massa a leo.</textarea>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Files from the applicant</label>
                            <ul className="list-group">
                                <a>
                                    <li className="list-group-item text-end">References.doc</li>
                                </a>
                                <a>
                                    <li className="list-group-item text-end">Qualifications.txt</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                }

            </div>
        </div>
    )

}