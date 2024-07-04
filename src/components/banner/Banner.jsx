// components/Banner.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  { src: "assets/images/qualityAir.avif", link: "/AppPage" },
  { src: "path/to/image2.jpg", link: "/AppPage" },
  { src: "path/to/image3.jpg", link: "/FormPage" },
  { src: "/assets/images/us.avif", link: "/AboutUs" },
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
