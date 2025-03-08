import React, { useEffect, useState } from "react";
import Hyperspeed from "./Hyperspeed";
import FuzzyText from "./FuzzyText";

const Contact = () => {
  const hoverIntensity = 0.5;
  const enableHover = true;

  // Dynamically adjust FOV based on screen size
  const [fov, setFov] = useState(window.innerWidth < 768 ? 120 : 90);

  useEffect(() => {
    const handleResize = () => {
      setFov(window.innerWidth < 768 ? 120 : 90);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      {/* Hyperspeed Background Effect */}
      <Hyperspeed
        effectOptions={{
          distortion: "turbulentDistortion",
          length: 400,
          roadWidth: 10,
          islandWidth: 2,
          lanesPerRoad: 4,
          fov: fov, // Adjusted FOV for mobile & PC
          fovSpeedUp: fov + 30,
          speedUp: 2,
          carLightsFade: 0.4,
          totalSideLightSticks: 20,
          lightPairsPerRoadWay: 40,
          shoulderLinesWidthPercentage: 0.05,
          brokenLinesWidthPercentage: 0.1,
          brokenLinesLengthPercentage: 0.5,
          lightStickWidth: [0.12, 0.5],
          lightStickHeight: [1.3, 1.7],
          movingAwaySpeed: [60, 80],
          movingCloserSpeed: [-120, -160],
          carLightsLength: [400 * 0.03, 400 * 0.2],
          carLightsRadius: [0.05, 0.14],
          carWidthPercentage: [0.3, 0.5],
          carShiftX: [-0.8, 0.8],
          carFloorSeparation: [0, 5],
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0xffffff,
            brokenLines: 0xffffff,
            leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
            rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
            sticks: 0x03b3c3,
          },
        }}
        canvasOptions={{
          preserveDrawingBuffer: true, // Ensures WebGL renders correctly on mobile
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          textAlign: "center",
          color: "white",
          maxWidth: "90%",
          padding: "10px",
        }}
      >
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={hoverIntensity}
          enableHover={enableHover}
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)", // Responsive text size
            fontWeight: "bold",
          }}
        >
          Code Not Found
        </FuzzyText>
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.5rem)",
            marginTop: "10px",
            lineHeight: "1.5",
          }}
        >
          Looks like you've taken a wrong turn in the matrix!
        </p>
      </div>
    </div>
  );
};

export default Contact;
