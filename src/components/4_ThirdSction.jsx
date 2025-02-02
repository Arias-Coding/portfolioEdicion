
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
    <div id="Galeria" className="pt-46 px-13 max-w-screen-md mx-auto xl:max-w-screen-xl">
        <div class="w-90 sm:w-130 sm:text-lg mb-10">
          <h2 class="text-5xl text-gray-50 tracking-tight font-extrabold">
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
