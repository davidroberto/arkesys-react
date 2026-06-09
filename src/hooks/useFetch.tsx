import {useEffect, useState} from "react";

const useFetch = (url: string) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = () => {
        setIsLoading(true);

        fetch(url)
            .then(jsonApiResponse => jsonApiResponse.json())
            .then(dataResponse => {
                setData(dataResponse);
                setIsLoading(false);
            })
        ;
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {data, fetchData, isLoading};
}

export default useFetch;

