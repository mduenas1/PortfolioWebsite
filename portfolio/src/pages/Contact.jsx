import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="min-h-[calc(100vh-5rem)] bg-[#000300] px-4 py-16 text-white">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#00df9a] mb-6">
          Contact Me
        </h2>

        <p className="text-gray-200 mb-8">
          Send me a message at {' '}
          <a
            href="mailto:duenas.mike10@yahoo.com"
            className="text-[#00df9a] hover:underline"
          >
            duenas.mike10@yahoo.com
          </a>
          .
        </p>

        <div className="flex justify-center space-x-6 text-2xl">
          <a
            href="https://github.com/mduenas1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#00df9a] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/Michael-Duenas-599b05207"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#00df9a] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:duenas.mike10@yahoo.com"
            className="text-gray-300 hover:text-[#00df9a] transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}
