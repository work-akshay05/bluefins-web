export default function HeroSection() {
  return (
    <section className=" px-10 py-16 text-center item-center bg-gradient-to-b from-teal-700 to-indigo-900">

      <h1 className="mt-24 text-4xl  font-generalFont leading-snug">
        🚀 Something powerful <br /> is coming.
      </h1>

      <p className="mt-3 text-gray-300">
        Simplifying the way people manage their finances.
      </p>

      <div className="flex justify-center gap-4 mt-5">
        <span className="bg-emerald-400/20 px-4 py-2 rounded-lg">
          Dropping Soon • 2026
        </span>

        <button className="bg-emerald-400 px-4 py-2 rounded-md text-black">
          Notify Me
        </button>

        <button className="border px-4 py-2 rounded-md">
          Know More
        </button>
      </div>

      {/* Placeholder */}
      <div className="mt-10">
        <div className="w-[300px] h-[520px] rounded-3xl bg-slate-800 border mx-auto flex items-center justify-center">
          <span className="text-gray-400">App Preview</span>
        </div>
      </div>
    </section>
  );
}
