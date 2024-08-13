import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MyContext } from "../App";
import cat from "../assets/images/cat.jpg";

const Profile = () => {
  const [items, setItems] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputLink, setInputLink] = useState("");
  const userData = useContext(MyContext);
  const navigate = useNavigate();

  console.log(items);
  console.log(userData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/profile/data", {
          params: {
            userId: userData._id,
          },
        });
        setItems([...response.data.user.linkData]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userData]);

  const handleAddItem = async () => {
    if (inputTitle && inputDescription && inputLink) {
      const newItem = {
        title: inputTitle,
        description: inputDescription,
        link: inputLink,
      };
      try {
        await axios.post("http://localhost:4000/profile", {
          linkData: newItem,
          createdBy: userData._id,
        });

        setItems((prevItems) => [...prevItems, newItem]);

        setInputTitle("");
        setInputDescription("");
        setInputLink("");
      } catch (error) {
        console.error("Error adding item:", error);
      }
    }
  };

  return userData ? (
    <div className="flex flex-col items-center min-h-screen p-5 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600">
      <div className="flex flex-col items-center mb-8">
        <img
          src={cat}
          alt="Profile"
          className="w-24 h-24 border-4 border-white rounded-full shadow-lg"
        />
        <h2 className="mt-4 text-2xl font-semibold text-white">
          @{userData?.username}
        </h2>
      </div>

      <div className="w-full max-w-lg p-6 mb-8 bg-white rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <br />
        <input
          type="text"
          placeholder="Description"
          value={inputDescription}
          onChange={(e) => setInputDescription(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <br />
        <input
          type="text"
          placeholder="Link"
          value={inputLink}
          onChange={(e) => setInputLink(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <br />
        <button
          onClick={handleAddItem}
          className="w-full py-2 mt-4 text-white transition-colors bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
        >
          Add
        </button>
        <button
          onClick={() => navigate("/")}
          className="w-full py-2 mt-4 text-white transition-colors bg-green-500 rounded-lg shadow-md hover:bg-green-600"
        >
          Go to Home
        </button>
      </div>

      <div className="w-full max-w-lg">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-4 mb-4 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <h3 className="text-lg font-bold text-blue-600 hover:underline">
                {item.title}
              </h3>
            </a>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <h1 className="text-2xl text-white">Please Login</h1>
  );
};

export default Profile;
