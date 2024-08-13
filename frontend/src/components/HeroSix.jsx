import linkTree from "../assets/svgs/linktr.svg";
import appstore from "../assets/svgs/appstore.svg";
import instagram from "../assets/svgs/instagram.svg";
import istore from "../assets/svgs/istore.svg";
import thread from "../assets/svgs/thread.svg";
import tiktok from "../assets/svgs/tiktok.svg";
import logo from "../assets/svgs/nav-logo.svg";
import indian from "../assets/images/indian.png";
function HeroSix() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#502274] px-4">
      <div className="max-w-[1550px] w-full flex flex-col items-center">
        <div className="my-12 space-y-6 sm:my-16 lg:my-20">
          <h1 className="text-[#E9C0E9] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center leading-tight">
            Jumpstart your corner of the internet today
          </h1>
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            <input
              type="text"
              placeholder="linktr.ee/yourname"
              className="w-full p-3 font-bold bg-white rounded-lg sm:p-4 sm:w-auto"
            />
            <span className="bg-[#CDE026] p-3 sm:p-4 px-4 sm:px-6 rounded-full w-full sm:w-auto text-center">
              Claim your Linktree
            </span>
          </div>
        </div>
        <div className="bg-[#FFFFFF] w-full rounded-xl">
          <div className="flex flex-col gap-6 p-6 sm:flex-row sm:p-10 lg:p-16">
            <div className="flex-1">
              <h1 className="text-lg font-bold sm:text-xl">Company</h1>
              <ul className="text-[#676B5F] text-sm sm:text-base space-y-2">
                <li>The Linktree Blog</li>
                <li>Engineering Blog</li>
                <li>Marketplace</li>
                <li>What s New</li>
                <li>About</li>
                <li>Press</li>
                <li>Careers</li>
                <li>Link in Bio</li>
                <li>Social Good</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="flex-1">
              <h1 className="text-lg font-bold sm:text-xl">Community</h1>
              <ul className="text-[#676B5F] text-sm sm:text-base space-y-2">
                <li>Linktree for Enterprise</li>
                <li>2023 Creator Report</li>
                <li>2022 Creator Report</li>
                <li>Charities</li>
                <li>What s Trending</li>
                <li>Creator Profile Directory</li>
                <li>Explore Templates</li>
              </ul>
            </div>
            <div className="flex-1">
              <h1 className="text-lg font-bold sm:text-xl">Support</h1>
              <ul className="text-[#676B5F] text-sm sm:text-base space-y-2">
                <li>Help Topics</li>
                <li>Getting Started</li>
                <li>Linktree Pro</li>
                <li>Features and How-Tos</li>
                <li>FAQs</li>
                <li>Report a Violation</li>
              </ul>
            </div>
            <div className="flex-1">
              <h1 className="text-lg font-bold sm:text-xl">Trust and Legal</h1>
              <ul className="text-[#676B5F] text-sm sm:text-base space-y-2">
                <li>Terms and Conditions</li>
                <li>Privacy Notice</li>
                <li>Cookie Notice</li>
                <li>Trust Center</li>
                <li>Cookie Preference</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-6 p-6 sm:flex-row sm:p-10">
            <div className="flex flex-col flex-wrap gap-2 sm:flex-row sm:gap-4">
              <span className="bg-[#EFF0EC] p-3 sm:p-4 content-center px-4 sm:px-6 rounded-full text-center">
                Login in
              </span>
              <span className="bg-[#D2E823] p-3 sm:p-2 px-4 content-center sm:px-4  rounded-full text-center">
                Get started for free
              </span>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center gap-3 ">
              <img className="h-10 sm:h-12" src={istore} alt="App Store" />
              <img className="h-10 sm:h-12" src={appstore} alt="Google Play" />
              <img className="h-10 sm:h-12" src={linkTree} alt="Linktree" />
              <img className="h-10 sm:h-12" src={thread} alt="Threads" />
              <img className="h-10 sm:h-12" src={tiktok} alt="TikTok" />
              <img className="h-10 sm:h-12" src={instagram} alt="Instagram" />
            </div>
          </div>
        </div>

        <div className="bg-[#E9C0E9] my-8 rounded-3xl text-[#502274] w-full text-center text-[4xl] sm:text-[5xl] lg:text-[7xl] flex flex-col items-center">
          <div className="flex items-center justify-center p-6 sm:p-10">
            <div className="font-extrabold text-center text-[40px]  sm:text-[80px] md:text-[100px] lg:text-[150px] xl:text-[200px]">
              Linktree
            </div>
            <img
              src={logo}
              className="  h-[40px]  sm:h-[80px] md:h-[100px] lg:h-[150px] xl:h-[200px]"
              alt="Linktree Logo"
            />
          </div>
        </div>
        <div className="flex flex-col items-center text-[#E9C0E9] text-center p-4">
          <div className="flex flex-row gap-4">
            <img src={indian} alt="" className="w-20" />
            <img src={indian} alt="" className="w-20" />
          </div>
          <p className="mt-2 text-sm sm:text-base lg:text-lg">
            We acknowledge the Traditional Custodians of the land on which our
            office stands, The Wurundjeri people of the Kulin Nation, and pay
            our respects to Elders past, present, and emerging. Linktree Pty Ltd
            (ABN 68 608 721 562), 1-9 Sackville St, Collingwood VIC 3066
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSix;
