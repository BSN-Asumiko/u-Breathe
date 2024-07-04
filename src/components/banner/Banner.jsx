import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./banner.css";

const images = [
  { src: "assets/images/map-catalunya.svg", link: "/Home" },
  { src: "/assets/images/data.jpeg", link: "/Legend" },
  { src: "/assets/images/checkList.avif", link: "/Form" },
  { src: "/assets/images/us.avif", link: "/AboutUs" },
  { src: "assets/images/legend.jpeg", link: "/List" },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    console.log("Navigating to:", images[currentIndex].link);
    navigate(images[currentIndex].link);
  };

  return (
    <div className="banner" id="banner" onClick={handleClick}>
      <img
        src={images[currentIndex].src}
        alt="Banner"
        style={{ width: "100%", cursor: "pointer" }}
      />
    </div>
  );
};

export default Banner;
