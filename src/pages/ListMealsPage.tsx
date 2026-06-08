import Header from "../components/Header.tsx";
import useFetch from "../hooks/useFetch.tsx";

const ListMealsPage = () => {

    const meals = useFetch('https://www.themealdb.com/api/json/v1/1/search.php?s');

    return (
        <>
            <Header />
            <h2>Liste des recettes de cuisines</h2>

            <section>
                {meals.meals.map((meal, index) => (
                    <div key={index}>
                        <h2>{meal.strMeal}</h2>
                    </div>
                ))}
            </section>

            {meals.meals.length > 0 && <p>Recettes en chargement...</p>}
        </>

    )
}

export default ListMealsPage;