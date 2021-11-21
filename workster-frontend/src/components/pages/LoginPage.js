import { Icon } from '@iconify/react';
import React, {useEffect, useRef, useState} from "react";
import {useHistory} from "react-router";
import AuthService from "../../services/auth.service"
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";


const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const LoginPage = (props) => {

    const checkBtn = useRef();
    const history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.login(username, password).then(
                () => {
                    history.push(`/profile/main/${JSON.parse(localStorage.getItem("user")).username}`);
                    window.location.reload();
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setLoading(false);
                    setMessage(resMessage);
                }
            );
        } else {
            setLoading(false);
        }
    };



    return (
        <main className="page login-page">
            <section className="login-dark shadow-lg">
                <Form method="post" onSubmit={handleLogin}>
                    <h2 className="visually-hidden">Login Form</h2>
                    <div className="illustration"><Icon icon="ion-ios-locked-outline" /></div>
                    <div className="mb-3">
                        <input className="form-control" type="text" name="username" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}  />
                    </div>
                    <div className="mb-3">
                        <input className="form-control" type="password" name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <button disabled={loading} className="btn btn-primary d-block w-100" type="submit">
                            {loading && (
                                <span className="spinner-border spinner-border-sm"/>
                            )}
                            <span>Login</span>
                        </button>
                    </div>
                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <a className="forgot" href="/register">You don't have an account yet? Register now</a>
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
            </section>
        </main>
    )

};

export default LoginPage;