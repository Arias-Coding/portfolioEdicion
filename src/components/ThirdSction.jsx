
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
    <div id="Galeria" className="px-5 mx-auto max-w-screen-xl mt-30 pt-26 mb-32 flex flex-col">
      <div class="w-1/2 mb-18">
        <h2 class="text-5xl text-gray-50 tracking-tight font-extrabold mb-3">
          GALERIA DE TRABAJOS
        </h2>

        <p>
          Soy un Joven de 19 años, entusiasta de la creación de contenido y la
          edición de videos. En cada proyecto busco entregar la mejor calidad
          posible manteniendo una esencia original.
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
