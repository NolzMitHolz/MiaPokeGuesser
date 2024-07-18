import Frontpage from "./components/sites/Frontpage";
import Projects from "./components/sites/Projects";

export default function App() {
    return (
        <div className="main-container">
            <Frontpage/>
            <Projects/>
        </div>
    );
}
