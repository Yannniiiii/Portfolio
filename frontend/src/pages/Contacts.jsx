import { Mail } from "lucide-react";

export default function Contact() {
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

            <p className="text-gray-100 text-lg">deanenavarro0519@gmail.com</p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=deanenavarro0519@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-4 px-6 py-3 rounded-full font-semibold
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                text-white
                hover:opacity-90 hover:scale-105
                transition-all duration-300
              "
            >
              Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
