import React, { useEffect } from "react";
import "./whyyes.css";

const Whyyes = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const surprise = () => {
    alert("Card clicked!");
  }

  return (
    <div className="overflow-hidden valentine-container bg-pink-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="valentine-title text-4xl text-red-600 mb-4 md:text-6xl pl-4 md:pl-0">
        Will I be your valentine?
      </h1>
      <div className="animate-heartbeat text-4xl md:text-5xl pb-4">❤️❤️❤️❤️</div>
      <div
        className=" tenor-gif tenor-gif-embed mb-4"
        data-postid="25742697"
        data-share-method="host"
        data-aspect-ratio="1.3617"
        data-width="50%"
      >
        <a href="https://tenor.com/view/shannon-sharpe-guy-in-tuxedo-guy-in-suit-guy-in-suit-fit-check-fit-check-gif-25742697">
          Shannon Sharpe Guy In Tuxedo GIF
        </a>{" "}
        from{" "}
        <a href="https://tenor.com/search/shannon+sharpe-gifs">
          Shannon Sharpe GIFs
        </a>
      </div>
      <div className="valentine-message pl-4 md:pl-0 text-4xl md:text-8xl text-pink-600">
        <p>Why YES, ABSOLUTELY :3</p> <br/>
      </div>
    </div>
  );
};

export default Whyyes;