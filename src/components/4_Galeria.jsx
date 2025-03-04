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
          Esta es una seleccion de proyectos que demuestran mis cualidades y
          dedicación a la hora de trabajar.
        </p>
      </div>

      <h2 class="text-2xl text-gray-50 uppercase font-extrabold mb-6">
        Videos
      </h2>
      <h2 class="text-2xl text-gray-50 uppercase font-extrabold mb-6">
        Motion Grapichs Basicos
      </h2>
      <div className="grid gap-4 xl:grid-cols-2">
        <video
          src="https://res.cloudinary.com/dnd9wg0pi/video/upload/v1738797834/Animaci%C3%B3n_Gr%C3%A1fico_1_3D_b6wg2s.mp4"
          className="w-full h-content"
          autoPlay
          muted
          loop
        />

        <video
          src="https://res.cloudinary.com/dnd9wg0pi/video/upload/v1738797832/Animaci%C3%B3n_Gr%C3%A1fico_1_yc69xn.mp4"
          className="w-full h-content"
          autoPlay
          muted
          loop
        />
        <video
          src="https://res.cloudinary.com/dnd9wg0pi/video/upload/v1738957376/Motion_Graphic_1_tze5vy.mp4"
          className="w-full h-content"
          autoPlay
          muted
          loop
        />
        <video
          src="https://res.cloudinary.com/dnd9wg0pi/video/upload/v1738962967/Motion_Graphic_2_k4qafn.mp4"
          className="w-full h-content"
          autoPlay
          muted
          loop
        />
      </div>
      <div className="grid gap-4 xl:grid-cols-3 mt-4 mb-26">
          <video
            src="https://res.cloudinary.com/dnd9wg0pi/video/upload/v1740865536/Output_1_mm3iaw.mp4"
            className="w-full h-content"
            autoPlay
            muted
            loop
          />
        </div>
      <h2 class="text-2xl text-gray-50 uppercase font-extrabold mb-6">
        Motion Grahics Dedicados
      </h2>
      <div className="grid gap-4 xl:grid-cols-2">
        <video
          src="https://res.cloudinary.com/dnd9wg0pi/video/upload/v1738967222/Wojak_vhny8g.mp4"
          className="w-full h-content"
          autoPlay
          muted
          loop
        />
        <video
          src="https://res.cloudinary.com/dnd9wg0pi/video/upload/v1738797833/sky_ycvqta.mp4"
          className="w-full h-content"
          autoPlay
          muted
          loop
        />
        </div>
        <div className="grid gap-4 xl:grid-cols-3 mt-4 mb-26">
          <video
            src="https://res.cloudinary.com/dnd9wg0pi/video/upload/v1741112825/Final_Comp_bq7elc.mp4"
            className="w-full h-content"
            autoPlay
            muted
            loop
          />
      </div>
    </div>
  );
}
