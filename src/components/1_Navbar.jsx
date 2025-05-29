export default function Navbar() {
  return (
    <nav class="bg-cyan-900 backdrop-blur-xl py-2.5 top-0 p-4 z-40 md:sticky w-full">
      <div class="py-1 md:py-2 flex flex-col flex-wrap justify-between max-w-screen-md md:flex-row xl:max-w-screen-xl mx-auto">
        <a
          href="#Inicio"
          class="basis-1/4 self-center text-xl font-semibold whitespace-nowrap"
        >
          ZASION MOTION
        </a>

        <div class="flex-wrap justify-center mt-3 gap-3 md:mt-0 md:gap-6 w-full md:justify-end md:basis-3/4 text-sm sm:text-lg text-gray-300 font-medium hidden md:flex">
          <a href="#SobreMi" class="hover:text-white">
            Sobre Mi
          </a>
          <a href="#Especialidad" class="hover:text-white">
            Especialidad
          </a>
          <a href="#Galeria" class="hover:text-white">
            Galeria de Trabajos
          </a>
          <a href="#Contactame" class="hover:text-white">
            Contactame
          </a>
        </div>
      </div>
    </nav>
  );
}
