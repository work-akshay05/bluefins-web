const features = [
  { title: "Fast & Seamless", text: "Manage your finances effortlessly." },
  { title: "Secure & Reliable", text: "Your data stays safe & private." },
  { title: "Secure & Revetable", text: "AI-driven insights for better safety." },
  { title: "Smart & Powerful", text: "Better financial decision making." },
];

export default function FeaturesGrid() {
  return (
    <section className="px-10 py-14 bg-white text-black">
      <h2 className="text-xl font-semibold mb-6">
        Built for individuals and businesses
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {features.map(f => (
          <div key={f.title} className="bg-gray-100 p-5 rounded-xl shadow">
            <h3 className="font-semibold">{f.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
