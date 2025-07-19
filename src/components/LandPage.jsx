import React from "react";
import Button from "./Button";
import { FaPlay } from "react-icons/fa";

const LandPage = () => {
  return (
    <div className="landpage">
      <div className="max-w-5xl text-center py-5 px-3">
        <h1 className="text-3xl sm:text-4xl text-white font-bold lg:text-5xl mx-auto ">
          The Best Streaming Experience
        </h1>
        <p className="text-gray-15 my-5 text-sm lg:text-lg leading-5 md:leading-6">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </p>
        <Button 
           title="Start Watching Now" 
           leftIcon= {<FaPlay />}
           id="watch-now" 
        />
      </div>
    </div>
  );
};

export default LandPage;
