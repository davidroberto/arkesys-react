import { useContext, type SyntheticEvent } from "react";
import Header from "../components/Header.tsx";
import { useNavigate } from "@tanstack/react-router";
import { AuthContext } from "../context/AuthContext.tsx";

const LoginPage = () => {

    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const loginUser = async (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        const password = (form.elements.namedItem("password") as HTMLInputElement).value;

        await login(email, password);

        navigate({ to: "/" });
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
        </>
    )
}

export default LoginPage;
