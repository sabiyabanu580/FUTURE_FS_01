export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white px-6">
      
      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-bold leading-tight">
        Hi, I'm <span className="text-blue-300">Sabiya </span>
      </h2>

      {/* Tagline */}
      <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl">
        React Developer | Building Full Stack Web Applications
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        <a
          href="#contact"
          className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300 shadow-lg"
        >
          Contact Me
        </a>
      </div>

    </section>
  );
}