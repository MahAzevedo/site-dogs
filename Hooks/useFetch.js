import React from 'react';

const useFetch = () => {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(null);

    async function request(url, options) {
        setLoading(true);
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json);
        setLoading(false);
    }


    return { data, error, loading, request };
};

export default useFetch;


// [ com COLCHETES é ARRAY ]
// { com CHAVES É OBJETO }