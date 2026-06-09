import {useEffect, useState} from "react";
import {toast} from "sonner";

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
                    toast.error(`Erreur ${jsonApiResponse.status} sur ${url}`);
                    throw new Error(`Erreur ${jsonApiResponse.status} sur ${url}`);
                }
                return jsonApiResponse.json();
            })
            .then(dataResponse => {
                setData(dataResponse);
                setIsSuccess(true);
                toast.success('Données chargées');

                setIsLoading(false);
            })
            .catch(caughtError => {
                setIsError(true);
                setError(caughtError.message);
                toast.error('"Problème de chargement des données, veuillez re-essayer ou contacter un administrator.');

                setIsLoading(false);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {data, fetchData, isLoading, isSuccess, isError, error};
}

export default useFetch;
