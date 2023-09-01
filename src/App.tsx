import { NavBar } from "./components/Header/NavBar/NavBar";
import { Articles } from "./components/Main/Articles/Articles";
import "./css/variables.css";
import "./index.css";
import "./css/mediaQueries.css";
import Layout from "./components/Layouts/Layout";

function App() {
    // return <Header />;
    return (
        <>
            <Layout>
                <Articles />
            </Layout>
        </>
    );
}

export default App;
