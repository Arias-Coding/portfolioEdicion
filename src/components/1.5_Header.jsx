export default function Navbar() {
  return (
    <div id="Inicio" class="relative h-170 text-white overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="https://www.cined.com/content/uploads/2021/06/AdobeM1Mac_Featured-1300x750.jpg"
          alt="Background Image"
          class="object-cover object-center w-full h-full "
        />
        <div class="absolute inset-0 h-full bg-gradient-to-r from-slate-900 to-slate-700 opacity-60"></div>
      </div>

      <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 class="mb-2 text-xl lg:text-5xl text-gray-50 tracking-tight font-extrabold">
          FRAME MOTION
        </h1>
        <p class="text-xl text-gray-300 mb-8">EDITOR DE VIDEOS</p>
      </div>
    </div>
  );
}
