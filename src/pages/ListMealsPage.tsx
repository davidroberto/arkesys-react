import Header from "../components/Header.tsx";
import {useEffect, useState} from "react";

const ListMealsPage = () => {

    const [meals, setMeals] = useState([]);
    
    // hook (donc fonction) que react fourni
    // permettant d'executer du code à certains moments du cycle de vie
    // du composant (à chaque rendu, après le premier rendu, à chaque fois
    // que telle variable change etc
    // premier parametre = la fonction à executer
    // deuxième parametre = quand elle doit être executée (si tableau vide = après le premier rendu)
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
            .then(jsonApiResponse => jsonApiResponse.json())
            .then(mealsResponse => {
                setMeals(mealsResponse.meals);
            })
        ;
    }, []);




    return (

        <>
            <Header />
            <h2>Liste des recettes de cuisines</h2>

            <section>
                {meals.map((meal, index) => (
                    <div key={index}>
                        <h2>{meal.strMeal}</h2>
                    </div>
                ))}
            </section>

            {meals.length > 0 && <p>Recettes en chargement...</p>}
        </>

    )
}

export default ListMealsPage;