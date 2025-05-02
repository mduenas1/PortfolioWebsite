import { Link } from 'react-router-dom';
import avatar from '../assets/michael.jpg';

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-start pt-45 text-center px-4">
      <img
        src={avatar}
        alt="Michael Duenas"
        className="
          w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80
          rounded-full object-cover
          border-4 border-[#00df9a]
          mb-8
        "
      />

      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
        Hi, I’m Michael Duenas.
      </h1>

      <p className="text-xl md:text-2xl text-gray-200 mb-6">
        Here, you can check out all that I do.
      </p>

      <p className="max-w-xl text-gray-300 mb-8">
        I’m a computer science student who enjoys taking on challenges and solving complex problems. I have a keen interest in cybersecurity and artificial intelligence.
      </p>

      <Link
        to="/projects"
        className="inline-block bg-[#00df9a] text-black font-bold px-6 py-3 rounded-lg hover:bg-[#00e89e] transition"
      >
        View Projects
      </Link>
    </section>
  );
}
