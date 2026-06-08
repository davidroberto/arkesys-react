import Header from "../components/Header.tsx";

const LoginPage = () => {


    const loginUser = (event) => {
        event.preventDefault();

        console.log("loginUser");
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