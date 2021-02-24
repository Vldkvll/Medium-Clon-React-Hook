import React from "react";
import { Link, Redirect } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";

const Authentication = (props) => {
    const isLogin = props.match.path === "/login";

    const pageTitle = isLogin ? "Sign In" : "Sign Up";
    const descriptionLink = isLogin ? "/register" : "/login";
    const descriptionText = isLogin ? "Need an account?" : "Have an account?";
    const apiUrl = isLogin ? "users/login" : "users/";

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [isSuccessfulSubmit, setIsSuccessfulSubmit] = React.useState(false);
    const [{ response, isloading, error }, doFetch] = useFetch(apiUrl);
    const [token, setToken] = useLocalStorage("token");

    console.log('token', token);

    const handleEmail = (e) => {
        setEmail(e);
    };
    const handlePassword = (e) => {
        setPassword(e);
    };
    const handleUsername = (e) => {
        setUsername(e);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("data", email, "", password);
        const user = isLogin
            ? { email, password }
            : { username, email, password };
        doFetch({
            method: "post",
            data: {
                user,
            },
        });
    };

    React.useEffect(() => {
        if (!response) return;
        setToken(response.user.token);
        setIsSuccessfulSubmit(true);
    }, [response]);

    if (isSuccessfulSubmit) {
        return <Redirect to="/" />;
    }

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">{pageTitle}</h1>
                        <p className="text-xs-center">
                            <Link to={descriptionLink}>{descriptionText}</Link>
                        </p>
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                {!isLogin && (
                                    <fieldset className="form-group">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Username"
                                            value={`${username}`}
                                            onChange={(e) =>
                                                handleUsername(e.target.value)
                                            }
                                        ></input>
                                    </fieldset>
                                )}
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
                                <button
                                    className="btn btn-lg btn-primary pull-xs-right"
                                    type="submit"
                                    disabled={isloading}
                                >
                                    {pageTitle}
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
