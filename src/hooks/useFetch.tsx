import {useEffect, useState} from "react";

const useFetch = (url: string) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(jsonApiResponse => jsonApiResponse.json())
            .then(dataResponse => {
                setData(dataResponse);
            })
        ;
    }, [url]);

    return data;
}

export default useFetch;

