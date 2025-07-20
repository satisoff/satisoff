import { motion } from "framer-motion";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const Projects = () => {
    const handleClick = (projectName) => {
        if (projectName === "amazone-clone")
            window.open(
                "https://amazon-clone-swart-kappa.vercel.app/",
                "_blank"
            );
        else if (projectName === "edusity")
            window.open("https://educity-college-page.vercel.app/", "_blank");
        else if (projectName === "firebase")
            window.open("https://fir-project-eb230.web.app/", "_blank");
    };

    return (
        <motion.section
            id="projects"
            className="projects"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <motion.h2
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                My Projects
            </motion.h2>

            <motion.div
                className="project-grid"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <motion.div
                    className="project-card"
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.01 } }}
                    onClick={() => {
                        handleClick("amazone-clone");
                    }}
                >
                    <motion.div
                        className="project-image"
                        style={{
                            backgroundImage:
                                "url('/public/amazon-clone-bg.jpeg')",
                        }}
                        whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.01 },
                        }}
                    />
                    <h3>Amazon-Clone</h3>
                    <p>
                        A responsive front‑end replica of Amazon’s UI,
                        showcasing product listings, a navigation bar, and
                        layout skills with attention to detail and design.
                    </p>
                    <div className="project-tech">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JAVASCRIPT (basic interactivity) </span>
                    </div>
                </motion.div>

                <motion.div
                    className="project-card"
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                    onClick={() => {
                        handleClick("edusity");
                    }}
                >
                    <motion.div
                        className="project-image"
                        style={{
                            backgroundImage: "url('/public/edusity-bg.jpeg')",
                        }}
                        whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.2 },
                        }}
                    />
                    <h3>Edusity</h3>
                    <p>
                        A clean, responsive college landing page built using
                        React and Vite, deployed on Vercel. Highlights your
                        ability to craft production-ready static sites with
                        modern tooling and best practices. Tech used:
                    </p>
                    <div className="project-tech">
                        <span>React</span>
                        <span>CSS</span>
                        <span>Vite (fast bundling & HMR) </span>
                    </div>
                </motion.div>

                <motion.div
                    className="project-card"
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                    onClick={() => {
                        handleClick("firebase");
                    }}
                >
                    <motion.div
                        className="project-image"
                        style={{
                            backgroundImage: "url('/public/firebase-bg.png')",
                        }}
                        whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.2 },
                        }}
                    />
                    <h3>Firebase Community Wall</h3>
                    <p>
                        A real-time message posting platform where users can
                        submit and view community messages. Built with Firebase
                        and vanilla JavaScript, the app enables live content
                        updates without refreshing the page
                    </p>
                    <div className="project-tech">
                        <span>React</span>
                        <span>Firebase</span>
                        <span>JAVASCRIPT</span>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};
