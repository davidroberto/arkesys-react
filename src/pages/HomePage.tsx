import Header from "../components/Header.tsx";
import {useAuth} from "../hooks/useAuth.tsx";

const HomePage = () => {

    const { isAuthenticated } = useAuth();

    return (<>
            <Header/>

            <section>
                <h4>Ce site présente tous les events du 4L trophy</h4>
                <button>Accéder à la page des events</button>
            </section>

            {isAuthenticated && <section>
                <p>Vous êtes authentifié, vous avez le droit de voir cette section</p>
            </section>}
        </>);
};

export default HomePage;