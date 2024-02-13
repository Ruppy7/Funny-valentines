import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom"; // Import Routes instead of Switch
import image from "./assets/image.png";
import No from "./No";
import Whyyes from "./Whyyes";

function App() {
  const stringSet = new Set([
    "Will you be my valetine?",
    "will you be my valentine?",
    "Will you be my valentine",
    "will you be my valentine",
  ])
  const [inputValue, setInputValue] = useState("");
  const [inputValid, setInputValid] = useState(false);
  const navigate = useNavigate();

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (stringSet.has(inputValue)) {
      setInputValid(true);
      navigate("/yes");
    } else {
      navigate("/no");
    }
  };

  useEffect(() => {
    // Reset state when component unmounts
    return () => {
      setInputValue("");
      setInputValid(false);
    };
  }, []);

  return (
    <div>
      <Routes>
        {/* Use Routes instead of Switch */}
        <Route
          path="/"
          element={
            // Use element prop instead of component
            <div className="flex flex-col items-center justify-center min-h-screen bg-pink-300">
              <h1 className="text-3xl font-bold mb-4">Deciper the picture 🕵️</h1>
              <div className="mb-4">
                <img
                  src={image}
                  alt="Image 1"
                  className="w-108 h-max mr-2 rounded-lg"
                ></img>
              </div>
              <form onSubmit={handleSubmit} className="mb-4">
                <input
                  required
                  type="text"
                  value={inputValue}
                  onChange={handleInput}
                  placeholder="Your Answer"
                  className="px-5 py-2 border border-gray-300 rounded-lg focus:outline focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 ml-2 bg-blue-500 text-white rounded-lg"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          }
        />
        <Route
          path="/yes"
          element={<Whyyes />}
        />
        <Route
          path="/no"
          element={<No />}
        />
      </Routes>
    </div>
  );
}

export default App;