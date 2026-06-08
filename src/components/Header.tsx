import {Link} from "@tanstack/react-router";

const Header = () => {


    const getTitleFromApi = (): string => {
        // fake appel fetch pour récupérer le titre depuis un backend API
        return "Les évènements 4L Trophy";
    }


    const isAuthenticated = (): boolean => {
        return true;
    }


    return (
        <header>
            <h1>{getTitleFromApi()}</h1>

            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Accueil</Link>
                    </li>
                    <li>Les évènements</li>
                    <li>Contact</li>
                    {isAuthenticated() ? (
                        <li>Bonjour David</li>
                    ) : (
                        <li>Vous connecter</li>
                    )}
                </ul>
            </nav>
        </header>
    )

}

export default Header;