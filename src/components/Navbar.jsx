import React from 'react'

const NavBar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="
          flex items-center
          h-[68px] w-[calc(100vw-96px)]
          max-w-6xl
          px-8
          gap-6
          rounded-[18px]
          bg-[#0B0F2A]/35
          backdrop-blur-[20px]
          shadow-[0_8px_30px_rgba(0,0,0,0.25)]
          border border-white/10">

        <div className="text-white font-[nameFont] tracking-wide">
          BlueFins
        </div>
        
        <button
          className="ml-auto
            text-sm text-white
            px-4 py-2
            rounded-full
            bg-white/10
            hover:bg-white/20
            transition"
        >Notify Me
        </button>
      </div>
    </nav>
  );
}

export default NavBar
