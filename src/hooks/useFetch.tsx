import {useEffect, useState} from "react";

const useFetch = (url: string) => {

    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = () => {
        setIsLoading(true);
        setIsSuccess(false);
        setIsError(false);
        setError(null);

        fetch(url)
            .then(jsonApiResponse => {
                if (!jsonApiResponse.ok) {
                    throw new Error(`Erreur ${jsonApiResponse.status} sur ${url}`);
                }
                return jsonApiResponse.json();
            })
            .then(dataResponse => {
                setData(dataResponse);
                setIsSuccess(true);
                setIsLoading(false);
            })
            .catch(caughtError => {
                setIsError(true);
                setError(caughtError.message);
                setIsLoading(false);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {data, fetchData, isLoading, isSuccess, isError, error};
}

export default useFetch;
