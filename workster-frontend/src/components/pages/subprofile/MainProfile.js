import "../../../assets/styles/profile.css"


export default function MainProfile() {

    return(
        <main>
            <div className="container">
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin"
                                             className="rounded-circle" width="150"/>
                                        <div className="mt-3">
                                            <h4>John Doe</h4>
                                            <p className="text-secondary mb-1">Full Stack Developer</p>
                                            <p className="text-muted font-size-sm">Bay Area, San Francisco,
                                                CA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                 className="feather feather-globe mr-2 icon-inline icon-links-margin">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                                <path
                                                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                            </svg>
                                            Website
                                        </h6>
                                        <span className="text-secondary">https://bootdey.com</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                 className="feather feather-github mr-2 icon-inline icon-links-margin">
                                                <path
                                                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                            </svg>
                                            Github
                                        </h6>
                                        <span className="text-secondary">bootdey</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                 className="feather feather-twitter mr-2 icon-inline text-info icon-links-margin">
                                                <path
                                                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                            </svg>
                                            Twitter
                                        </h6>
                                        <span className="text-secondary">@bootdey</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                 className="feather feather-instagram mr-2 icon-inline text-danger icon-links-margin">
                                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                            </svg>
                                            Instagram
                                        </h6>
                                        <span className="text-secondary">bootdey</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                 className="feather feather-facebook mr-2 icon-inline text-primary icon-links-margin">
                                                <path
                                                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                            </svg>
                                            Facebook
                                        </h6>
                                        <span className="text-secondary">bootdey</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            Kenneth Valdez
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            fip@jukmuh.al
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Phone</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            (239) 816-9029
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Mobile</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            (320) 380-4539
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            Bay Area, San Francisco, CA
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <a className="btn btn-info " target="__blank"
                                               href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row gutters-sm">
                                <div className="col-sm-12 mb-3">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h6 className="d-flex align-items-center mb-3 d-flex justify-content-center">
                                                Description
                                            </h6>
                                            <small>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac bibendum nisi. Praesent vel tristique ante. Curabitur lorem urna, dictum ut mattis eu, tincidunt in ligula. Ut nec vehicula elit, at semper nisl. Donec malesuada condimentum justo. Duis eleifend ante sit amet eros hendrerit gravida. Etiam libero ex, suscipit eu eros eget, consectetur efficitur magna. Sed molestie dictum lorem, at placerat lorem volutpat ut. Nam eget maximus ipsum, ac cursus ex.

                                                Integer ac semper nulla. Mauris non enim dignissim ex tincidunt vestibulum eu eget elit. Sed sit amet erat ut augue vestibulum vestibulum. Cras risus diam, accumsan sit amet felis at, gravida mattis quam. Proin vel mattis odio. Donec ornare tortor at felis ornare, ut tempor sapien ullamcorper. Nullam a eleifend erat, sit amet tincidunt odio. Ut quis ligula ut eros vestibulum volutpat. Curabitur pretium nunc metus, at congue nibh dapibus at. Aliquam erat volutpat. Nunc aliquet felis placerat mi efficitur, id congue neque scelerisque. Maecenas enim elit, posuere vel nulla nec, ultricies viverra ligula. Fusce aliquam enim elit, in ultrices mi gravida sit amet. Curabitur porttitor nec ex in ornare. Nullam commodo non eros in eleifend. Nunc nec risus lacus.

                                                Donec eget tristique felis. Nam non ante quis velit feugiat convallis a eget velit. Curabitur faucibus turpis mi, non condimentum ante molestie quis. Morbi condimentum dolor vel viverra suscipit. Phasellus rutrum ornare euismod. Cras faucibus non lectus a lacinia. Sed suscipit nibh eget velit bibendum, at suscipit elit malesuada. Praesent quis nibh eget orci blandit condimentum. Vivamus molestie eleifend magna, at tincidunt sem iaculis vitae. Aliquam erat volutpat. Proin venenatis elit lacus, in interdum quam commodo non. Ut turpis urna, rutrum quis eros quis, lobortis placerat nunc. Nullam ac sollicitudin elit. Mauris sed finibus lacus.

                                                Nullam vitae odio justo. Donec accumsan consequat nisl vel finibus. Donec dignissim, nunc at elementum tempus, tellus velit facilisis lectus, in tempus orci dui et ex. Curabitur a efficitur felis. Donec quis mattis dui. Nunc volutpat posuere sollicitudin. Donec libero augue, posuere ac turpis ac, fringilla faucibus ligula. Proin dictum metus a nisi convallis, at blandit ante facilisis. Ut tincidunt orci eu urna imperdiet lacinia.

                                                Vestibulum eget mi lacus. Ut ac luctus leo, ac volutpat sapien. Integer feugiat a justo sit amet mollis. Maecenas dui velit, sodales non vehicula quis, blandit non massa. Mauris nibh augue, posuere vel venenatis at, imperdiet non ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla tempus imperdiet tellus sit amet tempor. Curabitur mauris ligula, dictum at tellus et, dignissim pharetra ex.
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </main>
    )

}