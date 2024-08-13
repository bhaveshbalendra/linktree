import shop from "../assets/images/shop.png";

function HeroTwo() {
  return (
    <div className="w-full min-h-screen flex flex-row items-center justify-center bg-[#E9C0E9]">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center mx-[20px] sm:mx-[50px] max-w-[1550px] mt-20 lg:mt-22 mb-20 lg:mb-[140px]">
        <div className="flex flex-col items-center flex-1 mx-5 mt-16 sm:mx-10 -z-1">
          <img src={shop} className="w-full  max-h-[800px]" alt="shop" />
        </div>
        <div className="flex flex-col flex-1 gap-10 mt-10 lg:mt-0 lg:text-left">
          <div className="text-[#502274]">
            <h1 className="text-[40px] sm:text-[50px] lg:text-[60px] font-extrabold leading-none pb-4">
              Create and customize your Linktree in minutes
            </h1>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] lg:mr-34">
              Connect your TikTok, Instagram, Twitter, website, store, videos,
              music, podcast, events and more. It all comes together in a link
              in bio landing page designed to convert.
            </p>
          </div>
          <div className="flex gap-3 lg:justify-start">
            <span className="bg-[#502274] text-white font-semibold p-4 sm:p-5 px-5 sm:px-7 rounded-[50px]">
              Get started for free
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroTwo;
