export default function ContactForm() {
    return (
        <section className="w-full py-16 px-4">
            <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-xl p-8 md:p-10">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Let’s Work Together
                    </h2>

                    <p className="text-gray-600 mt-4 text-lg">
                        Need a modern website for your business or brand?
                        Send me a message and let’s discuss your project.
                    </p>
                </div>

                {/* Form */}
                <form
                    action="https://formsubmit.co/anghelusjr09.ab@gmail.com"
                    method="POST"
                    className="flex flex-col gap-6"
                >

                    {/* Hidden Settings */}
                    <input type="hidden" name="_captcha" value="false" />

                    <input
                        type="hidden"
                        name="_subject"
                        value="New Portfolio Inquiry"
                    />

                    <input
                        type="hidden"
                        name="_template"
                        value="table"
                    />

                    <input
                        type="hidden"
                        name="_next"
                        value="http://localhost:5173/"
                    />

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-700">
                                Full Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                required
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black transition"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-700">
                                Email Address
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="john@example.com"
                                required
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black transition"
                            />
                        </div>
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-700">
                            Subject
                        </label>

                        <input
                            type="text"
                            name="subject"
                            placeholder="Website Design Inquiry"
                            required
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black transition"
                        />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-700">
                            Message
                        </label>

                        <textarea
                            name="message"
                            rows="7"
                            placeholder="Tell me about your project..."
                            required
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-black transition"
                        ></textarea>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="bg-black hover:bg-gray-900 text-white py-4 rounded-xl font-semibold text-lg transition duration-300 cursor-pointer"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}