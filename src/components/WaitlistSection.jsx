export default function WaitlistSection() {
  return (
    <section className="px-10 py-14 bg-white text-black">
      <h2 className="text-2xl font-semibold">
        Be the first to experience it
      </h2>

      <p className="text-gray-500 mt-1">
        No spam. Early access benefits only.
      </p>

      <div className="mt-6 flex gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-md border w-80"
        />

        <button className="bg-emerald-400 px-4 py-2 rounded-md">
          Notify Me
        </button>
      </div>

      <p className="text-sm mt-3 text-gray-600">
        ✔ 120+ early adopters already signed up
      </p>
    </section>
  );
}
