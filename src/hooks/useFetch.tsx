import {useEffect, useState} from "react";

const useFetch = (url: string) => {

    const [data, setData] = useState(null);

    const fetchData = () => {
        fetch(url)
            .then(jsonApiResponse => jsonApiResponse.json())
            .then(dataResponse => {
                setData(dataResponse);
            })
        ;
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {data, fetchData};
}

export default useFetch;

