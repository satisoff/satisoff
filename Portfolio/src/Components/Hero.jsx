import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

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
export const Hero = () => {
    return (
        <motion.section
            id="home"
            className="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="hero-container">
                <motion.div
                    className="hero-content"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    <motion.div className="hero-badge">
                        <span>👋 Hello, I'm </span>
                    </motion.div>
                    <motion.h1
                        className="glitch"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.02 }}
                    >
                        Satyam Vats
                    </motion.h1>
                    <motion.h2 className="hero-subtitle" variants={fadeInUp}>
                        Frontend Developer & DSA Proficient
                    </motion.h2>
                    <motion.p className="hero-description" variants={fadeInUp}>
                        I’m a curious learner with a strong base in HTML, CSS,
                        JavaScript, and React. Currently, I’m focused on
                        improving my DSA skills and advancing in full-stack
                        development. I enjoy structured learning and building
                        creative, practical projects.
                    </motion.p>

                    <motion.div
                        variants={staggerContainer}
                        className="cta-buttons"
                    >
                        <motion.a
                            href="#projects"
                            className="cta-primary"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View my projects
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="cta-secondary"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Connect with me
                        </motion.a>
                    </motion.div>

                    <motion.div
                        className="social-links"
                        variants={staggerContainer}
                    >
                        <motion.a
                            href="https://github.com/satisoff"
                            target="_blank"
                        >
                            <i className="fab fa-github"></i>
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/satyam-vats/"
                            target="_blank"
                        >
                            <i className="fab fa-linkedin"></i>
                        </motion.a>
                        <motion.a href="https://x.com/satisoff" target="_blank">
                            <i className="fab fa-twitter"></i>
                        </motion.a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-image-container"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="code-display">
                        <SyntaxHighlighter
                            style={vscDarkPlus}
                            language="typescript"
                            customStyle={{
                                margin: 0,
                                padding: "2rem",
                                height: "100%",
                                borderRadius: "20px",
                                background: "rgba(30, 41, 59, 0.8)",
                                backdropFilter: "blur(10px)",
                                marginBottom: 50,
                            }}
                        >
                            {`const aboutMe: DeveloperProfile = {
  codename: "Satyam Codes",
  origin: "📍 Somewhere between a GitHub repo and a late-night bug fix",
  role: "Aspiring Fullstack Alchemist",
  stack: {
    languages: ["HTML", "CSS", "JavaScript", "Java"],
    frameworks: ["React", "TailwindCSS", "Firebase"],
  },
  traits: [
    "logic-layer ninja 🥷",
    "UI/UX pixel sorcerer ✨",
    "dark mode loyalist 🌑",
    "motivated caffeine-free coder ☕❌",
    "DSA explorer with a debugger’s patience 🧩"
  ],
  missionStatement:
    "Building sleek UIs while trying not to rage-quit on merge conflicts.",
  availability: "Currently leveling up, soon internship-ready 🚀",
};
`}
                        </SyntaxHighlighter>
                    </div>

                    <motion.div
                        className="floating-card"
                        animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="card-content">
                            <span className="card-icon">💻</span>
                            <span className="card-text">
                                Building something exciting—stay tuned!
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};
