import { useRef, useState } from "react";
import { Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch(() => {
        setStatus("error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6 text-white">
          Contact{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <p className="text-gray-200 dark:text-gray-400 mb-12">
          Let’s build something amazing together.
        </p>

        {/* Contact Card */}
        <div
          className="
          backdrop-blur-lg
          bg-white/10 dark:bg-white/5
          border border-white/20
          rounded-2xl
          p-10
          transition-all duration-300
          hover:shadow-2xl hover:shadow-purple-500/20
        "
        >
          <div className="flex flex-col items-center gap-6">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-full">
              <Mail className="text-white" size={24} />
            </div>

            <form ref={form} onSubmit={sendEmail} className="w-full space-y-6">
              {/* Name */}
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              {/* Email */}
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows="3"
                onInput={(e) => {
                  e.target.style.height = "auto";
                  e.target.style.height = e.target.scrollHeight + "px";
                }}
                className="w-full p-3 rounded-lg bg-gray-800 text-white 
             focus:outline-none focus:ring-2 focus:ring-purple-500 
             resize-none overflow-hidden"
              />

              <button
                type="submit"
                disabled={loading}
                className={`
                  w-full py-3 rounded-full font-semibold
                  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                  text-white
                  transition-all duration-300
                  ${loading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90 hover:scale-105"}
                `}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <p className="text-green-400 text-sm">
                  ✅ Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm">
                  ❌ Failed to send message. Try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
