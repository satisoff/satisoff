import { motion } from "framer-motion";
import { useState } from "react";

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

export const Contact = () => {
    const [isSending, setIsSending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(true);
    const [message, setMessage] = useState(null);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSending(true);
        const formData = new FormData(event.target);

        formData.append("access_key", "648eaba2-ac9c-4dfc-aca8-8145302ca30c");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setIsSending(false);
            setMessage("Message sent successfully!");
            setIsSuccess(true);
            event.target.reset();
        } else {
            setMessage(data.message);
            setIsSuccess(false);
            setIsSending(false);
            event.target.reset();
            console.log("Error", data);
        }
    };

    return (
        <motion.section
            className="contact"
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <motion.h2
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                viewport={{ once: true }}
            >
                Get in touch
            </motion.h2>

            <motion.div className="contact-content" variants={fadeInUp}>
                <motion.form className="contact-form" onSubmit={onSubmit}>
                    <motion.input
                        type="text"
                        name="name"
                        placeholder="Your name..."
                        required
                        whileFocus={{ scale: 1.02 }}
                    />
                    <motion.input
                        type="email"
                        name="email"
                        placeholder="Your Email..."
                        required
                        whileFocus={{ scale: 1.02 }}
                    />
                    <motion.textarea
                        name="message"
                        placeholder="Your Message..."
                        required
                        whileFocus={{ scale: 1.02 }}
                    />
                    <motion.button
                        type="submit"
                        className="submit-btn"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={isSending}
                    >
                        {isSending ? "Sending..." : "Send Message"}
                    </motion.button>

                    {message && (
                        <motion.div
                            className={`form-status ${
                                isSuccess ? "success" : "error"
                            }`}
                        >
                            {message}
                        </motion.div>
                    )}
                </motion.form>
            </motion.div>
        </motion.section>
    );
};
