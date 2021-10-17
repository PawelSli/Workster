import "../../../assets/styles/user-files.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle, faDownload} from '@fortawesome/free-solid-svg-icons'

export default function UserFiles() {

    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card-box">
                            <div className="row">
                                <div className="col-lg-6 col-xl-6">
                                    <h4 className="header-title m-b-30">My Files</h4>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-3 col-xl-2">
                                    <div className="file-man-box">
                                        <a href="" className="file-close">
                                            <FontAwesomeIcon icon={faTimesCircle}/>
                                        </a>
                                        <div className="file-img-box"><img
                                            src="https://coderthemes.com/highdmin/layouts/assets/images/file_icons/pdf.svg"
                                            alt="icon"></img></div>
                                        <a href="#" className="file-download"><FontAwesomeIcon icon={faDownload}/></a>
                                        <div className="file-man-title">
                                            <h5 className="mb-0 text-overflow">invoice_project.pdf</h5>
                                            <p className="mb-0"><small>568.8 kb</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-xl-2">
                                    <div className="file-man-box"><a href="" className="file-close"><FontAwesomeIcon
                                        icon={faTimesCircle}/></a>
                                        <div className="file-img-box"><img
                                            src="https://coderthemes.com/highdmin/layouts/assets/images/file_icons/bmp.svg"
                                            alt="icon"></img></div>
                                        <a href="#" className="file-download"><FontAwesomeIcon icon={faDownload}/></a>
                                        <div className="file-man-title">
                                            <h5 className="mb-0 text-overflow">Bmpfile.bmp</h5>
                                            <p className="mb-0"><small>845.8 mb</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-xl-2">
                                    <div className="file-man-box"><a href="" className="file-close"><FontAwesomeIcon
                                        icon={faTimesCircle}/></a>
                                        <div className="file-img-box"><img
                                            src="https://coderthemes.com/highdmin/layouts/assets/images/file_icons/psd.svg"
                                            alt="icon"></img></div>
                                        <a href="#" className="file-download"><FontAwesomeIcon icon={faDownload}/></a>
                                        <div className="file-man-title">
                                            <h5 className="mb-0 text-overflow">Photoshop_file.ps</h5>
                                            <p className="mb-0"><small>684.8 kb</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-xl-2">
                                    <div className="file-man-box"><a href="" className="file-close"><FontAwesomeIcon
                                        icon={faTimesCircle}/></a>
                                        <div className="file-img-box"><img
                                            src="https://coderthemes.com/highdmin/layouts/assets/images/file_icons/avi.svg"
                                            alt="icon"></img></div>
                                        <a href="#" className="file-download"><FontAwesomeIcon icon={faDownload}/></a>
                                        <div className="file-man-title">
                                            <h5 className="mb-0 text-overflow">Avifile.avi</h5>
                                            <p className="mb-0"><small>5.9 mb</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-xl-2">
                                    <div className="file-man-box"><a href="" className="file-close"><FontAwesomeIcon
                                        icon={faTimesCircle}/></a>
                                        <div className="file-img-box"><img
                                            src="https://coderthemes.com/highdmin/layouts/assets/images/file_icons/cad.svg"
                                            alt="icon"></img></div>
                                        <a href="#" className="file-download"><FontAwesomeIcon icon={faDownload}/></a>
                                        <div className="file-man-title">
                                            <h5 className="mb-0 text-overflow">Cadfile.cad</h5>
                                            <p className="mb-0"><small>95.8 mb</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-xl-2">
                                    <div className="file-man-box"><a href="" className="file-close"><FontAwesomeIcon
                                        icon={faTimesCircle}/></a>
                                        <div className="file-img-box"><img
                                            src="https://coderthemes.com/highdmin/layouts/assets/images/file_icons/txt.svg"
                                            alt="icon"></img></div>
                                        <a href="#" className="file-download"><FontAwesomeIcon icon={faDownload}/></a>
                                        <div className="file-man-title">
                                            <h5 className="mb-0 text-overflow">Mytextfile.txt</h5>
                                            <p className="mb-0"><small>568.8 kb</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-xl-2">
                                    <div className="file-man-box"><a href="" className="file-close"><FontAwesomeIcon
                                        icon={faTimesCircle}/></a>
                                        <div className="file-img-box"><img
                                            src="https://coderthemes.com/highdmin/layouts/assets/images/file_icons/eps.svg"
                                            alt="icon"></img></div>
                                        <a href="#" className="file-download"><FontAwesomeIcon icon={faDownload}/></a>
                                        <div className="file-man-title">
                                            <h5 className="mb-0 text-overflow">Epsfile.eps</h5>
                                            <p className="mb-0"><small>568.8 kb</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-xl-2">
                                    <div className="file-man-box"><a href="" className="file-close"><FontAwesomeIcon
                                        icon={faTimesCircle}/></a>
                                        <div className="file-img-box"><img
                                            src="https://coderthemes.com/highdmin/layouts/assets/images/file_icons/dll.svg"
                                            alt="icon"></img></div>
                                        <a href="#" className="file-download"><FontAwesomeIcon icon={faDownload}/></a>
                                        <div className="file-man-title">
                                            <h5 className="mb-0 text-overflow">Project_file.dll</h5>
                                            <p className="mb-0"><small>684.3 kb</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-xl-2">
                                    <div className="file-man-box"><a href="" className="file-close"><FontAwesomeIcon
                                        icon={faTimesCircle}/></a>
                                        <div className="file-img-box"><img
                                            src="https://coderthemes.com/highdmin/layouts/assets/images/file_icons/sql.svg"
                                            alt="icon"></img></div>
                                        <a href="#" className="file-download"><FontAwesomeIcon icon={faDownload}/></a>
                                        <div className="file-man-title">
                                            <h5 className="mb-0 text-overflow">Website_file.sql</h5>
                                            <p className="mb-0"><small>457.8 kb</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-xl-2">
                                    <div className="file-man-box"><a href="" className="file-close"><FontAwesomeIcon
                                        icon={faTimesCircle}/></a>
                                        <div className="file-img-box"><img
                                            src="https://coderthemes.com/highdmin/layouts/assets/images/file_icons/zip.svg"
                                            alt="icon"></img></div>
                                        <a href="#" className="file-download"><FontAwesomeIcon icon={faDownload}/></a>
                                        <div className="file-man-title">
                                            <h5 className="mb-0 text-overflow">invoice_project.pdf</h5>
                                            <p className="mb-0"><small>568.8 kb</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-xl-2">
                                    <div className="file-man-box"><a href="" className="file-close"><FontAwesomeIcon
                                        icon={faTimesCircle}/></a>
                                        <div className="file-img-box"><img
                                            src="https://coderthemes.com/highdmin/layouts/assets/images/file_icons/ps.svg"
                                            alt="icon"></img></div>
                                        <a href="#" className="file-download"><FontAwesomeIcon icon={faDownload}/></a>
                                        <div className="file-man-title">
                                            <h5 className="mb-0 text-overflow">invoice_project.pdf</h5>
                                            <p className="mb-0"><small>568.8 kb</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-xl-2">
                                    <div className="file-man-box"><a href="" className="file-close"><FontAwesomeIcon
                                        icon={faTimesCircle}/></a>
                                        <div className="file-img-box"><img
                                            src="https://coderthemes.com/highdmin/layouts/assets/images/file_icons/png.svg"
                                            alt="icon"></img></div>
                                        <a href="#" className="file-download"><FontAwesomeIcon icon={faDownload}/></a>
                                        <div className="file-man-title">
                                            <h5 className="mb-0 text-overflow">invoice_project.pdf</h5>
                                            <p className="mb-0"><small>568.8 kb</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-3">
                                <button type="button"
                                        className="btn btn-outline-danger w-md waves-effect waves-light"
                                        onClick={()=>document.getElementById("getFile").click()}>
                                    Load More Files
                                </button>
                                <input type='file' id="getFile" style={{display:"none"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}