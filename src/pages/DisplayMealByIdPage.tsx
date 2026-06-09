import Header from "../components/Header.tsx";
import {useParams} from "@tanstack/react-router";
import useFetch from "../hooks/useFetch.tsx";

const DisplayMealByIdPage = () => {

    const params = useParams({ strict: false });
    const mealId = params.mealId;

    const { data, isLoading } = useFetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+mealId);

    return (
        <>
            <Header />

            <h2>Affichage des détails de la recette</h2>

            {isLoading && <p>Chargement en cours...</p>}

            <article>
                <h2>{data?.meals[0].strMeal}</h2>
                <img src={data?.meals[0].strMealThumb} alt={data?.meals[0].strMeal} />
                <p>{data?.meals[0].strInstructions}</p>
            </article>


        </>
    );
};


export default DisplayMealByIdPage;