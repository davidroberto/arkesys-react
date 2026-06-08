import {Link} from "@tanstack/react-router";

const Header = () => {

    const getTitleFromApi = (): string => {
        // fake appel fetch pour récupérer le titre depuis un backend API
        return "Les évènements 4L Trophy";
    }

    const getAuthenticatedUser = (): string | null => {
        return null;
    }

    const authenticatedUser = getAuthenticatedUser();

    return (
        <header>
            <h1>{getTitleFromApi()}</h1>

            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Accueil</Link>
                    </li>
                    <li>
                        <Link to={"/events"}> Les évènements</Link>
                    </li>
                    <li>Contact</li>
                    {authenticatedUser ? (
                        <li>{authenticatedUser}</li>
                    ) : (
                        <li> <Link to={"/login"}> Vous connecter</Link></li>
                    )}
                </ul>
            </nav>
        </header>
    )

}

export default Header;