import { useState } from "react";

export default function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            setIsSubmitted(true);
            setIsError(false);
            e.target.reset();
        } else {
            setIsError(true);
        }
    };

    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-center py-20 px-4 text-white"
        >
            <h2 className="text-4xl font-bold mb-6 text-center text-gray-600">
                Get in <span className="text-gray-400">Touch</span>
            </h2>
            <p className="text-gray-600 text-center max-w-lg mb-10">
                Got an idea or a project in mind? Let’s bring it to life together.
                Whether it’s design, development, or just a quick hello — drop me a message!
            </p>

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg bg-gray-900 p-8 rounded-2xl shadow-xl flex flex-col gap-4"
            >
                <input
                    type="hidden"
                    name="access_key"
                    value="bf20f628-dc77-4930-ba66-c8c4cc1f77cf"
                />

                <input
                    type="hidden"
                    name="subject"
                    value="New Message from Angel Buenavista Portfolio"
                />

                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
                >
                    Send Message
                </button>

                {isSubmitted && (
                    <p className="text-green-400 text-center mt-2">
                        ✅ Message sent successfully! I’ll get back to you soon.
                    </p>
                )}

                {isError && (
                    <p className="text-red-400 text-center mt-2">
                        ❌ Something went wrong. Please try again later.
                    </p>
                )}
            </form>
        </section>
    );
}
