import Carousel from "./Carousel";
const MotionsOld = [
  "https://res.cloudinary.com/dnd9wg0pi/video/upload/v1748631617/Simple_Habits_em0dmo.mp4",
  "https://res.cloudinary.com/dnd9wg0pi/video/upload/v1748559538/Comp_1_3_aoa9t0.mp4",
  "https://res.cloudinary.com/dnd9wg0pi/video/upload/v1738957376/Motion_Graphic_1_tze5vy.mp4",
  "https://res.cloudinary.com/dnd9wg0pi/video/upload/v1738962967/Motion_Graphic_2_k4qafn.mp4",
  "https://res.cloudinary.com/dnd9wg0pi/video/upload/v1738797832/Animaci%C3%B3n_Gr%C3%A1fico_1_yc69xn.mp4",
  "https://res.cloudinary.com/dnd9wg0pi/video/upload/v1738797834/Animaci%C3%B3n_Gr%C3%A1fico_1_3D_b6wg2s.mp4",
  "https://res.cloudinary.com/dnd9wg0pi/video/upload/v1740865536/Output_1_mm3iaw.mp4",
  "https://res.cloudinary.com/dnd9wg0pi/video/upload/v1738967222/Wojak_vhny8g.mp4",
];

export default function ThirdSction() {
  const MotionsBasicosNews = [
    "https://res.cloudinary.com/dnd9wg0pi/video/upload/v1749329040/Comp_1_bdencn.mp4",
    "https://res.cloudinary.com/dnd9wg0pi/video/upload/v1748830627/blade_runner_2049_poster_hdvyu3.mp4",
    "https://res.cloudinary.com/dnd9wg0pi/video/upload/v1738797833/sky_ycvqta.mp4",
  ];
  const MotionDedicados = [
    "https://res.cloudinary.com/dnd9wg0pi/video/upload/v1748666439/Iman_gadzhi_1_animation_2_nboet0.mp4",
    "https://res.cloudinary.com/dnd9wg0pi/video/upload/v1749315575/mio_2_1_qgie1o.mp4",
  ];

  return (
    <div
      id="Galeria"
      className="pt-36 px-6 sm:px-13 max-w-screen-md mx-auto xl:max-w-screen-xl"
    >
      <div class="sm:w-120 sm:text-lg mb-10">
        <h2 class="text-3xl sm:text-4xl text-gray-50 tracking-tight font-">
          GALERIA DE TRABAJOS
        </h2>
      </div>
      <div className="">
        <h2 className="text-2xl text-gray-50 uppercase font-medium mb-6">
          Motion Grapichs Basicos
        </h2>
        <Carousel videos={MotionsBasicosNews} />
      </div>
      <div className="mt-25">
        <h2 className="text-2xl text-gray-50 uppercase font-medium mb-6">
          Motion Grahics Dedicados
        </h2>
        <Carousel videos={MotionDedicados} />
      </div>
      <video
        src="https://res.cloudinary.com/dnd9wg0pi/video/upload/v1743282275/Main_Comp_yj5ctk.mp4"
        className="w-full h-content mt-40 rounded-2xl"
        autoPlay
        muted
        loop
      />
    </div>
  );
}
