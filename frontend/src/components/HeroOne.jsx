import { useState, useContext, useEffect } from "react";
import navLogo from "../assets/svgs/nav-logo.svg";
import menu from "../assets/svgs/menu.svg";
import phone from "../assets/images/phone.png";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../src/App";

function HeroOne() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useContext(MyContext);
  const [userData] = useState(user);

  function handleLogout() {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  }

  return (
    <div className="w-full min-h-screen flex flex-row justify-center bg-[#254f1a]">
      <header className="fixed top-0 left-auto w-full mx-auto pt-[20px] sm:pt-[48px] max-w-full lg:max-w-[1636px] text-lg">
        <div className="flex flex-row h-[70px] sm:h-[87px] bg-white items-center justify-between rounded-[50px] sm:mx-[30px] mx-[20px]">
          <nav className="flex flex-row items-center gap-3">
            <span className="ml-4 flex text-[30px] font-semibold tracking-tighter">
              <span className="hidden lg:block">Linktree</span>
              <img src={navLogo} alt="navLogo" className="h-6" />
            </span>
            <ul className="flex-row items-center hidden ml-6 text-gray-500 lg:flex">
              <Link className="hover:bg-[#a3a3a3] rounded-2xl p-3">
                Templates
              </Link>
              <Link className="hover:bg-[#a3a3a3] rounded-2xl p-3">
                Marketplace
              </Link>
              <Link className="hover:bg-[#a3a3a3] rounded-2xl p-3">
                Discover
              </Link>
              <Link className="hover:bg-[#a3a3a3] rounded-2xl p-3">
                Pricing
              </Link>
              <Link className="hover:bg-[#a3a3a3] rounded-2xl p-3">Learn</Link>
            </ul>
          </nav>
          <div className="flex flex-row items-center gap-4 mr-5">
            {userData ? (
              <>
                <Link
                  to={`/profile`}
                  className="bg-[#E9E9E9] p-1 sm:px-6 sm:p-5 rounded-lg font-semibold"
                >
                  {userData.username}
                </Link>
                <button
                  onClick={handleLogout}
                  to={"/signup"}
                  className="bg-[#1C212E] text-white p-2 sm:p-4 sm:px-6 rounded-[50px] font-bold"
                >
                  LogOut
                </button>
              </>
            ) : (
              <>
                <Link
                  to={"/login"}
                  className="bg-[#E9E9E9] p-3 sm:px-6 sm:p-5 rounded-lg font-semibold"
                  refresh="true"
                >
                  Log in
                </Link>
                <Link
                  to={"/signup"}
                  className="bg-[#1C212E] text-white p-3 sm:p-4 sm:px-6 rounded-[50px] font-bold"
                >
                  Sign up free
                </Link>
              </>
            )}
            <div
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <img src={menu} alt="menu" />
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <ul className="flex flex-col gap-4 text-gray-600 lg:hidden mt-4 bg-white rounded-lg mx-[20px] p-4">
            <li>Templates</li>
            <li>Marketplace</li>
            <li>Discover</li>
            <li>Pricing</li>
            <li>Learn</li>
          </ul>
        )}
      </header>

      <div className="flex flex-col lg:flex-row items-center mx-[20px] sm:mx-[50px] max-w-[1550px] mt-40 sm:mt-52 mb-[140px]">
        <div className="flex flex-col flex-1 gap-8">
          <div className="text-[#D2E823]">
            <h1 className="text-[35px] sm:text-[80px] font-extrabold leading-none pb-4">
              Everything you are. In one, simple link in bio.
            </h1>
            <p className="text-[16px] sm:text-[20px] break-normal font-bold mr-0 sm:mr-32 lg:mr-44">
              Join 50M+ people using Linktree for their link in bio. One link to
              help you share everything you create, curate and sell from your
              Instagram, TikTok, Twitter, YouTube and other social media
              profiles.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3 sm:justify-normal xl:flex-row">
            <input
              type="text"
              placeholder="linktr.ee/yourname"
              className="p-4 font-bold bg-white rounded-lg sm:p-5 flex-shrink-0 xl:w-[40%] max-w-[60%]"
            />
            <button className="bg-[#DDB6DD] py-4 px-2 font-semibold flex justify-center items-center sm:px-7 max-w-[50%] rounded-[50px] w-full xl:w-auto">
              Claim your Linktree
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center mt-[20px] sm:mt-[20px] flex-1 mx-10 -z-1">
          <img src={phone} className="w-auto max-h-[700px]" alt="phone" />
        </div>
      </div>
    </div>
  );
}

export default HeroOne;
