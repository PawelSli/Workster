import $ from 'jquery';
import React, {useState, useRef, useEffect} from "react";
import "../../assets/styles/register-page.css"
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {isEmail} from "validator";
import AuthService from "../../services/auth.service";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

export default function RegisterPage() {
    window.$ = $;

    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const [birth, setBirth] = useState("");

    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        setMessage("");
        setSuccessful(false);

        if (checkBtn.current.context._errors.length === 0) {

            if (password.localeCompare(repeatedPassword) !== 0) {
                setMessage("The repeated password must be the same as the original.")
                setSuccessful(false)
            } else {

                let dateObject = new Date(birth);

                AuthService.register(username, email, password, dateObject).then(
                    (response) => {
                        setMessage(response.data.message);
                        setSuccessful(true);
                    },
                    (error) => {
                        let resMessage =
                            (error.response &&
                                error.response.data &&
                                error.response.data.message) ||
                            error.message ||
                            error.toString();

                        if (resMessage.includes("Error count")) {
                            resMessage = error.response.data.errors.map(e => e.defaultMessage).join("\n,\n")
                            console.log(resMessage)
                            setMessage(resMessage)
                        } else {
                            setMessage(resMessage);
                        }
                        setSuccessful(false);
                    }
                );
            }
        }
    };


    useEffect(() => {
        const script = document.createElement('script');
        script.innerHTML = "$('.js-text-date-toggle').on('focus', function() {\n" +
            "    $(this).attr('type', 'date') }\n" +
            ").on('blur', function() {\n" +
            "    $(this).attr('type', 'text') }\n" +
            ")";
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <main className="page login-page">

            <section className="register-photo">

                <div className="form-container shadow-lg">

                    <div className="image-holder"/>
                    <Form method="post" onSubmit={handleRegister} ref={form}>

                        {message && (
                            <div className="form-group">
                                <div
                                    className={
                                        successful ? "alert alert-success" : "alert alert-danger"
                                    }
                                    role="alert"
                                >
                                    {message}
                                </div>
                            </div>
                        )}

                        {!successful && (
                            <div>
                                <h2 className="text-center"><strong>Create</strong> an account.</h2>
                                <div className="mb-3">
                                    <input type="email" className="form-control" name="email" value={email}
                                           onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" name="name" placeholder="Full name"
                                           value={username} onChange={(e) => setUsername(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <input type="text " className="form-control js-text-date-toggle" name="date"
                                           placeholder="Date of birth" value={birth}
                                           onChange={(e) => setBirth(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" name="password"
                                           placeholder="Password" value={password}
                                           onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" name="password-repeat"
                                           placeholder="Password (repeat)" value={repeatedPassword}
                                           onChange={(e) => setRepeatedPassword(e.target.value)}/></div>
                                <div className="mb-3">
                                    <button className="btn btn-primary d-block w-100" type="submit">Sign Up</button>
                                </div>
                                <a className="already" href="/login">You already have an account? Login here.</a>
                            </div>
                        )}

                        <CheckButton style={{display: "none"}} ref={checkBtn}/>
                    </Form>
                </div>
            </section>
        </main>
    )
};