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
            src="https://res.cloudinary.com/dnd9wg0pi/video/upload/v1738797832/Animaci%C3%B3n_Gr%C3%A1fico_1_yc69xn.mp4"
            className="w-full h-content mb-5"
            autoPlay
            muted
            loop
          />
          <video
            src="https://res.cloudinary.com/dnd9wg0pi/video/upload/v1738797834/Animaci%C3%B3n_Gr%C3%A1fico_1_3D_b6wg2s.mp4"
            className="w-full h-content"
            autoPlay
            muted
            loop
          />
        </div>
        <div className="basis-1/3">
          <video
            src="https://res.cloudinary.com/dnd9wg0pi/video/upload/v1738797833/sky_ycvqta.mp4"
            className="w-full h-content mb-5"
            autoPlay
            muted
            loop
          />
          <video
            src="https://res.cloudinary.com/dnd9wg0pi/video/upload/v1738797833/Moon_and_Earth_om3a67.mp4"
            className="w-full h-content"
            autoPlay
            muted
            loop
          />
        </div>
      </div>
    </div>
  );
}
