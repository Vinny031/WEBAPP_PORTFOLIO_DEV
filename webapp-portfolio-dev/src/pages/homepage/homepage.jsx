import "./homepage.scss"

import { useEffect } from "react"

const Home = () => {
    useEffect(() => {
        document.title = "Vincent Fuseau | Portfolio";
     }, []);

    return (
        <div className="homepage_body" id="home">
        </div>
    )
};

export default Home;