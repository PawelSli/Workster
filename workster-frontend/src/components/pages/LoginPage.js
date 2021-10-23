import { Icon } from '@iconify/react';


export default function LoginPage() {

    return (
        <main className="page login-page">
            <section className="login-dark shadow-lg">
                <form method="post">
                    <h2 className="visually-hidden">Login Form</h2>
                    <div className="illustration"><Icon icon="ion-ios-locked-outline" /></div>
                    <div className="mb-3"><input className="form-control" type="email" name="email" placeholder="Email"/>
                    </div>
                    <div className="mb-3"><input className="form-control" type="password" name="password"
                                                 placeholder="Password"/></div>
                    <div className="mb-3">
                        <button className="btn btn-primary d-block w-100" type="submit">Log In</button>
                    </div>
                    <a className="forgot" href="/register">You don't have an account yet? Register now</a>
                </form>
            </section>
        </main>
    )

};