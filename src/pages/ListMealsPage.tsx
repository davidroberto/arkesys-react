import Header from "../components/Header.tsx";
import useFetch from "../hooks/useFetch.tsx";
import {Link} from "@tanstack/react-router";

const ListMealsPage = () => {

    const { data } = useFetch('https://www.themealdb.com/api/json/v1/1/search.php?s');

    return (
        <>
            <Header />
            <h2>Liste des recettes de cuisines</h2>

            <section>
                {data?.meals.map((meal, index) => (
                    <div key={index}>
                        <h2>{meal.strMeal}</h2>
                        <Link to={"/meals/"+meal.idMeal}>Voir la recette</Link>
                    </div>
                ))}
            </section>

            {data?.meals.length > 0 && <p>Recettes en chargement...</p>}
        </>

    )
}

export default ListMealsPage;