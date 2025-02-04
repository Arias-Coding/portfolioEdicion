export default function ThirdSction() {
  return (
    <div
      id="Galeria"
      className="pt-36 px-6 sm:px-13 max-w-screen-md mx-auto xl:max-w-screen-xl"
    >
      <div class="sm:w-120 sm:text-lg mb-10">
        <h2 class="text-3xl sm:text-4xl text-gray-50 tracking-tight font-extrabold">
          GALERIA DE TRABAJOS
        </h2>

        <p className="mt-3">
          Soy un joven entusiasta de la creación de contenido y la edición de
          videos. En cada proyecto busco entregar la mejor calidad manteniendo
          una esencia original.
        </p>
      </div>
      <div className="flex flex-row gap-5 flex-wrap">
        <div className="basis-1/3">
          <video
            src="../../plubic\Animación Gráfico 1.mp4"
            className="w-full h-content mb-5"
            autoPlay
            muted
            loop
          />
          <video
            src="../../plubic\Animación Gráfico 1 3D.mp4"
            className="w-full h-content"
            autoPlay
            muted
            loop
          />
        </div>
        <div className="basis-1/3">
          <video
            src="../../plubic\Moon and Earth.mp4"
            autoPlay
            muted
            loop
            className="basis-1/3"
          />
        </div>
      </div>
    </div>
  );
}
