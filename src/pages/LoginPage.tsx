import Header from "../components/Header.tsx";
import {useState} from "react";

const LoginPage = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const loginUser = (event) => {
        event.preventDefault();

       const email = event.target.email.value;
       const password = event.target.password.value;

       // const isAuthenticated = fetch('api/login');
        setIsAuthenticated(true);
    }

    return (
        <>
            <Header />
            <h2>Se connecter : </h2>

            <form onSubmit={loginUser}>

                <label>email :
                    <input type="text" name="email" required />
                </label>

                <label>password :
                    <input type="password" name="password" required />
                </label>

                <button type="submit">OK</button>

            </form>

            {isAuthenticated && <p>Connexion réussie!</p>}
        </>

    )
}

export default LoginPage;