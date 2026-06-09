import useFetch from "../hooks/useFetch.tsx";

const RandomMealPage = () => {

    const {data, fetchData} = useFetch('https://www.themealdb.com/api/json/v1/1/random.php')

    const displayNewRandomMeal = () => {
        fetchData();
    }

    return (
        <section>
            <article>
                <h2>{data?.meals[0].strMeal}</h2>
                <img src={data?.meals[0].strMealThumb} alt={data?.meals[0].strMeal} />
                <p>{data?.meals[0].strInstructions}</p>
            </article>

            <button onClick={displayNewRandomMeal}>Demander à changer la carte du jour</button>

        </section>

    );

}

export default RandomMealPage;