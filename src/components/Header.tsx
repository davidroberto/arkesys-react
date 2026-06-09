import {Link, useNavigate} from "@tanstack/react-router";
import {useAuth} from "../hooks/useAuth.tsx";

const Header = () => {

    const getTitleFromApi = (): string => {
        // fake appel fetch pour récupérer le titre depuis un backend API
        return "Les évènements 4L Trophy";
    }

    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate({ to: "/" });
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
                    <li>
                        <Link to={"/meals"}> Les recettes de cuisine du food truc du 4L Trophy</Link>
                    </li>
                    <li>
                        <Link to={"/random-meal"}> La carte du jour pour le 4L trophy</Link>
                    </li>
                    {user ? (
                        <>
                            <li>{user.name}</li>
                            <li><button onClick={handleLogout}>Se déconnecter</button></li>
                        </>
                    ) : (
                        <li> <Link to={"/login"}> Vous connecter</Link></li>
                    )}
                </ul>
            </nav>
        </header>
    )

}

export default Header;