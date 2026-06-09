import Header from "../components/Header.tsx";
import useFetch from "../hooks/useFetch.tsx";
import {Link} from "@tanstack/react-router";

const ListMealsPage = () => {

    const { data, isLoading, isSuccess, isError, error } = useFetch('https://www.themealdb.com/api/json/v1/1/search.php?s');

    return (
        <>
            <Header />
            <h2>Liste des recettes de cuisines</h2>

            {isLoading && <p>Chargement en cours...</p>}

            {isError && <p>Une erreur est survenue : {error}</p>}

            {isSuccess && (
                <section>
                    {data?.meals.map((meal: any, index: number) => (
                        <div key={index}>
                            <h2>{meal.strMeal}</h2>
                            <Link to={"/meals/"+meal.idMeal}>Voir la recette</Link>
                        </div>
                    ))}
                </section>
            )}
        </>

    )
}

export default ListMealsPage;