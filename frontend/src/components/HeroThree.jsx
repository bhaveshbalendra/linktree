import cloths from "../assets/images/cloths.png";

function HeroThree() {
  return (
    <div className="w-full  flex flex-col items-center  justify-center min-h-screen  bg-[#780016]">
      <div className="flex flex-col justify-center   lg:flex-row items-center mx-[20px] sm:mx-[50px] max-w-[1550px] mt-20 lg:mt-52 mb-20 lg:mb-[140px]">
        <div className="flex flex-col flex-1 gap-10 lg:mr-5 lg:text-left">
          <div className="text-[#E9C0E9]">
            <h1 className="text-[40px] sm:text-[50px] lg:text-[60px] font-extrabold leading-none pb-4">
              Share your Linktree from your Instagram, TikTok, Twitter and other
              bios
            </h1>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] lg:mr-24">
              Add your unique Linktree URL to all the platforms and places you
              find your audience. Then use your QR code to drive your offline
              traffic online.
            </p>
          </div>
          <div className="flex gap-3 lg:justify-start">
            <span className="bg-[#E9C0E9] p-4 sm:p-5 px-5 sm:px-7 rounded-[50px]">
              Get started for free
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center flex-1 mx-5 mt-10 sm:mx-10 lg:mt-0 -z-1">
          <img src={cloths} className=" max-h-[700px] " alt="phone" />
        </div>
      </div>
    </div>
  );
}

export default HeroThree;
