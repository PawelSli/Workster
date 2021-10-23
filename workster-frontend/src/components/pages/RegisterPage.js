import $ from 'jquery';
import {useEffect} from "react";
import "../../assets/styles/register-page.css"

export default function RegisterPage() {
    window.$ = $;

    useEffect(() => {
        const script = document.createElement('script');
        script.innerHTML = "$('.js-text-date-toggle').on('focus', function() {\n" +
            "    $(this).attr('type', 'date') }\n" +
            ").on('blur', function() {\n" +
            "    $(this).attr('type', 'text') }\n" +
            ")"
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
                    <form method="post">
                        <h2 className="text-center"><strong>Create</strong> an account.</h2>
                        <div className="mb-3"><input type="email" className="form-control" name="email"
                                                     placeholder="Email"/></div>
                        <div className="mb-3"><input type="text" className="form-control" name="name"
                                                     placeholder="Full name"/></div>
                        <div className="mb-3"><input type="text " className="form-control js-text-date-toggle" name="date"
                                                     placeholder="Date of birth" /></div>
                        <div className="mb-3"><input type="password" className="form-control" name="password"
                                                     placeholder="Password"/></div>
                        <div className="mb-3"><input type="password" className="form-control" name="password-repeat"
                                                     placeholder="Password (repeat)"/></div>
                        <div className="mb-3">
                            <div className="form-check"><label className="form-check-label"><input type="checkbox"
                                                                                                   className="form-check-input"/>I
                                agree to the license terms.</label></div>
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary d-block w-100" type="submit">Sign Up</button>
                        </div>
                        <a className="already" href="/login">You already have an account? Login here.</a>
                    </form>
                </div>
            </section>
        </main>
    )

};