import { useContext } from "react";
import Header from "../components/Header.tsx";
import { AuthContext } from "../context/AuthContext.tsx";

const HomePage = () => {

    const { user } = useContext(AuthContext);

    return (<>
            <Header/>

            <section>
                <h4>Ce site présente tous les events du 4L trophy</h4>
                <button>Accéder à la page des events</button>
            </section>

            {user && <section>
                <p>Vous êtes authentifié, vous avez le droit de voir cette section</p>
            </section>}
        </>);
};

export default HomePage;