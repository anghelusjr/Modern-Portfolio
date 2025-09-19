


function ContactPage() {
  return (
    <div className="h-screen flex justify-center items-center p-(--spacing-desktop)">
      <section className="w-full max-w-2xl bg-white/5 p-20 rounded-2xl shadow-md ">
        <h1 className="text-2xl font-bold mb-2">Contact</h1>
        <p className="text-gray-300 mb-4">
          Drop a line using the form below. This is a dummy form (no backend).
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Submitted! (dummy)");
          }}
          className="space-y-4"
        >
          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <label className="flex flex-col">
              <span className="mb-1">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-[var(--text)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-1">Email</span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-[var(--text)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
          </div>

          {/* Message */}
          <label className="flex flex-col">
            <span className="mb-1">Message</span>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell me about your project"
              className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-[var(--text)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </label>

          {/* Button */}
          <div>
            <button
              type="submit"
              className="btn px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default ContactPage;