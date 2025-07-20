import { Contact } from "./Components/Contact";
import { Hero } from "./Components/Hero";
import { Navbar } from "./Components/Navbar";
import { Projects } from "./Components/Projects";
import "./App.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={`app ${isLoaded ? "loaded" : ""}`}>
            <Navbar />
            <Hero />
            <Projects />
            <Contact />

            <motion.footer
                className="footer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <p>&copy; 2025 satisoff. All Rights Reserved</p>
            </motion.footer>
        </div>
    );
}

export default App;
