export default function Navbar() {
  return (
    <div
      id="Inicio"
      class="relative h-80 sm:h-100 md:h-190 text-white overflow-hidden md:min-h-[65vh]"
    >
      <div class="absolute inset-0">
        <video
          src="https://res.cloudinary.com/dnd9wg0pi/video/upload/v1740867602/Output_2_z81jnn.mp4"
          className="object-cover object-center w-full h-full"
          autoPlay
          muted
          loop
        />
      </div>
    </div>
  );
}
