import { useContext } from "react";
import {Link, useNavigate} from "@tanstack/react-router";
import { AuthContext } from "../context/AuthContext.tsx";
import {Toaster} from "sonner";
import { toast } from 'sonner';


const Header = () => {

    const getTitleFromApi = (): string => {
        return "Les évènements 4L Trophy";
    }

    const { user, logout } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate({ to: "/" });
        toast.success('Déconnexion réussie');

    }

    return (
        <>
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
            <Toaster />
        </>
    )

}

export default Header;