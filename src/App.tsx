import Layout from "./components/Layouts/Layout";
import { Articles } from "./components/Main/Articles/Articles";
import "./css/variables.css";
import "./index.css";
import "./css/mediaQueries.css";

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
