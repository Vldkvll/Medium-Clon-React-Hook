import React from "react";
import { Link } from "react-router-dom";

import useFetch from "../../hooks/useFetch";

const Authentication = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [{ response, isloading, error }, doFetch] = useFetch("users/login");


    const handleEmail = (e) => {
        setEmail(e);
    };
    const handlePassword = (e) => {
        setPassword(e);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        doFetch({
            method: "post",
            data: {
                user: {
                    email,
                    password,
                },
            },
        });
    };

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Login</h1>
                        <p className="text-xs-center">
                            <Link to="register">Need an account?</Link>
                        </p>
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        placeholder="Email"
                                        required
                                        onChange={(e) =>
                                            handleEmail(e.target.value)
                                        }
                                        value={email}
                                    ></input>
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        placeholder="Password"
                                        required
                                        value={`${password}`}
                                        onChange={(e) =>
                                            handlePassword(e.target.value)
                                        }
                                    ></input>
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Email Password"
                                        value={`Email: ${email} Password: ${password}`}
                                    ></input>
                                </fieldset>
                                <button
                                    className="btn btn-lg btn-primary pull-xs-right"
                                    type="submit"
                                    disabled={isloading}
                                >
                                    Sign in
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Authentication;
