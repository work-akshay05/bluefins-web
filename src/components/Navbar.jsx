export default function Navbar() {
  return (
    <nav className="absolute left-1/2 -translate-x-1/2  top-10 right-15 w-[70%] max-w-5xl flex justify-between items-center px-8 py-2 bg-[#212161] rounded-3xl">
      <h2 className="text-xl font-nameFont">BlueFins</h2>

      <div className="flex gap-6 align-end">
        <button>About</button>
        <button>Contact</button>
        <button>Notify Me</button>
      </div>

      <button className="bg-emerald-400 px-4 py-2 rounded-md text-black">
        Notify Me
      </button>
    </nav>
  );
}
