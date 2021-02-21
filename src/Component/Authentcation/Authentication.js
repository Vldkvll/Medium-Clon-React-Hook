import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Authentication = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleEmail = (e) => {
        setEmail(e);
    };
    const handlePassword = (e) => {
        setPassword(e);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting((prev) => !prev);
    };

    React.useEffect(() => {
        if (!isSubmitting) return;
        axios("https://conduit.productionready.io/api/users/login", {
            method: "post",
            data: {
                user: {
                    email,
                    password,
                },
            },
        })
            .then((res) => {
                console.log(`res = ${res} `);
                setIsSubmitting((prev) => !prev);
            })
            .catch((error) => {
                console.log(error);
                setIsSubmitting((prev) => !prev);
            });
    });

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
                                    disabled={isSubmitting}
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
