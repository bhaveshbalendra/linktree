import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import photo from "../../assets/images/slide/Testimonial-Riley-Lemon.png";

function Last() {
  return (
    <div className="mb-16 max-w-[1550px] mx-auto px-4">
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-[400px] aspect-[4/3]">
          <img
            src={photo}
            className="absolute inset-0 object-cover w-full h-full"
            alt="Testimonial"
          />
        </div>
        <div className="mt-8 text-2xl font-extrabold leading-tight text-center sm:text-4xl md:text-5xl lg:text-6xl">
          “Linktree simplifies the process for creators to share multiple parts
          of themselves in one inclusive link.”
        </div>
        <span className="mt-2 text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl">
          Riley Lemon,
        </span>
        <span className="mt-2 mb-10 text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl">
          Youtuber, Content Creator
        </span>
        <div className="flex mt-4 space-x-2">
          <button className="flex items-center justify-center w-12 h-12 border-2 border-black rounded-xl hover:bg-black hover:text-white">
            <FaArrowLeft size={20} />
          </button>
          <button className="flex items-center justify-center w-12 h-12 border-2 border-black rounded-xl hover:bg-black hover:text-white">
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Last;
