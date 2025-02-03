
function Video() {
  return (
    <video className="w-120 h-content" controls>
      <source
        src="https://docs.material-tailwind.com/demo.mp4"
        type="video/mp4"
      />
    </video>
  );
}

export default function ThirdSction() {

  return (
    <div id="Galeria" className="pt-36 px-6 sm:px-13 max-w-screen-md mx-auto xl:max-w-screen-xl">
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
      <div className="flex gap-5 flex-wrap">
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}
