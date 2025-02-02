export default function Navbar() {
  return (
    <nav class="backdrop-blur-xl py-2.5 top-0 p-4 z-40 fixed w-full">
      <div class="py-2 flex flex-col flex-wrap justify-between max-w-screen-md md:flex-row xl:max-w-screen-xl px-4 mx-auto">
        <a href="#Inicio" class="basis-1/4 self-center text-xl font-semibold whitespace-nowrap">
          Portafolio Web
        </a>

        <div class="flex flex-wrap gap-6 w-full md:justify-center md:basis-3/4">
          <a href="#SobreMi" class="text-lg text-gray-400 hover:text-white">Sobre mi</a>
          <a href="#Especialidad" class="text-lg text-gray-400 hover:text-white">Especialidad</a>
          <a href="#Galeria" class="text-lg text-gray-400 hover:text-white">Galeria de Trabajos</a>
          <a href="#Contactame" class="text-lg text-gray-400 hover:text-white">Contactame</a>
        </div>
      </div>
    </nav>
  );
}
