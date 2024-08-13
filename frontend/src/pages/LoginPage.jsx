import banner from "../assets/images/login/banner.png";
import linktree from "../assets/images/login/lintree.svg";
import google from "../assets/svgs/google.svg";
import apple from "../assets/svgs/apple.svg";
import tiktok from "../assets/svgs/tiktok.svg";
import instagram from "../assets/svgs/instagram.svg";
import thread from "../assets/svgs/thread.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

axios.defaults.withCredentials = true;

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/login",
        formData
      );

      if (response.status === 200 && response.data.Login) {
        setResponse(response.data.message);
        setFormData({
          email: "",
          password: "",
        });

        localStorage.setItem("user", JSON.stringify(response.data.user));

        navigate("/");
        window.location.reload();
      } else if (response.status === 400) {
        navigate("/login");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError(error.response.data.error);
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col items-center justify-center w-full px-8 bg-white lg:w-1/2 lg:px-24">
        <Link to={"/"} className="mb-8">
          <img src={linktree} alt="Linktree Logo" className="h-8" />
        </Link>

        <h1 className="mb-2 text-3xl font-bold">Welcome back!</h1>
        <p className="mb-8 text-gray-600">Log in to your Linktree.</p>

        <div className="w-full max-w-md">
          <form method="POST" onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password"
              className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />

            <button className="w-full py-3 text-white bg-purple-600 rounded-md hover:bg-purple-700">
              Log in
            </button>
          </form>
          {response && <p>{response}</p>}
          {error && <p>Error: {error}</p>}
          <div className="flex items-center justify-between mt-4 text-sm">
            <a href="#" className="text-purple-600 hover:underline">
              Forgot password?
            </a>
            <a href="#" className="text-purple-600 hover:underline">
              Forgot username?
            </a>
          </div>

          <div className="flex items-center my-8">
            <span className="w-full border-b"></span>
            <span className="px-2 text-gray-600">OR</span>
            <span className="w-full border-b"></span>
          </div>

          <button className="flex items-center justify-center w-full py-3 mb-4 text-gray-600 border rounded-md hover:bg-gray-100">
            <img src={google} alt="Google" className="h-5 mr-2" />
            Continue with Google
          </button>
          <button className="flex items-center justify-center w-full py-3 text-gray-600 border rounded-md hover:bg-gray-100">
            <img src={apple} alt="Apple" className="h-5 mr-2" />
            Continue with Apple
          </button>

          <div className="mt-8 text-sm text-center">
            Don t have an account?{" "}
            <Link to={"/signup"} className="text-purple-600 hover:underline">
              Sign up.
            </Link>
          </div>

          <div className="mt-2 text-sm text-center">
            <a href="#" className="text-gray-600 hover:underline">
              You can also log in with a phone number
            </a>
          </div>
        </div>
      </div>

      <div className="flex-col items-center justify-center hidden w-1/2 h-screen overflow-hidden lg:flex bg-purple-50">
        <div className="relative">
          <img
            src={banner}
            alt="Model"
            className="object-cover w-full h-full overflow-hidden"
          />
          <div className="absolute flex flex-col space-y-4 top-8 right-8">
            <img src={thread} alt="thread" className="w-8 h-8" />
            <img src={instagram} alt="instagram" className="w-8 h-8" />
            <img src={tiktok} alt="tiktok" className="w-8 h-8" />
          </div>
          <div className="absolute p-4 bg-white rounded-lg bottom-8 left-8">
            <h2 className="mb-2 text-xl font-bold">Game Over</h2>
            <p className="text-gray-600">Paused</p>
          </div>
          <div className="absolute p-4 bg-white rounded-lg bottom-8 right-8">
            <p className="font-bold">$80</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
