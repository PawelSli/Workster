import React from "react";

export default function CompanyHeader({image, name,width}) {

    console.log(image);

    return (
        <div className="row mt-2 d-flex justify-content-center ">
            <div className={`col-12  ${width ? 'col-md-12' : 'col-md-8'} card d-flex flex-row shadow-lg  p-3`}>
                <div className="col-4 col-lg-2 d-flex justify-content-start">
                    <img src={`${process.env.PUBLIC_URL}/company-logo/${image}`} alt="Generic placeholder image"
                         className="company-image  "/>
                </div>
                <div className="col-8 col-md-10 d-flex align-items-center p-0">
                    <p className="display-5 margin-company-title">{name}</p>
                </div>
            </div>
        </div>
    )

}