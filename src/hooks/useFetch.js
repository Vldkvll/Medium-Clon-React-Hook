import React, { useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const baseUrl = "https://conduit.productionready.io/api/";
    const [isloading, setIsloading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState({});

    const doFetch = (options={}) => {
        setOptions(options);
        setIsloading(true)
    };

    React.useEffect(() => {
        if (!isloading) return;
        axios(`${baseUrl}${url}`, options)
            .then((res) => {
                console.log(`res = ${res} `);
                setIsloading((prev) => !prev);
                setResponse(res.data);
            })
            .catch((error) => {
                console.log(error.response.data);
                setError(error);
                setIsloading((prev) => !prev);
            });
    }, [isloading]);

    return [{ isloading, response, error }, doFetch];
};

export default useFetch;
