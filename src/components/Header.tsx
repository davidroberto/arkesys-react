import {Link} from "@tanstack/react-router";

const Header = ({authenticatedUser}) => {


    const getTitleFromApi = (): string => {
        // fake appel fetch pour récupérer le titre depuis un backend API
        return "Les évènements 4L Trophy";
    }

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
                        <li>Vous connecter</li>
                    )}
                </ul>
            </nav>
        </header>
    )

}

export default Header;