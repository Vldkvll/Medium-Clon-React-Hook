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
        // console.log(' feTch User  options')
        // console.log(options)
        axios(`${baseUrl}${url}`, options)
            .then((res) => {
                console.log(`res = ${res} `);
                console.log(res);
                console.log(res.data);
                setIsloading(false);
                setResponse(res.data);
            })
            .catch((error) => {
                console.log(error, error.response.data);
                setError(error);
                setIsloading((prev) => !prev);
            });
    }, [isloading]);

    return [{ isloading, response, error }, doFetch];
};

export default useFetch;
