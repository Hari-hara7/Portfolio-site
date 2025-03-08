import React, { useEffect, useState } from "react";
import Hyperspeed from "./Hyperspeed";
import FuzzyText from "./FuzzyText";

const Contact = () => {
  const hoverIntensity = 0.5;
  const enableHover = true;

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
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
          length: isMobile ? 250 : 400, // Shorter effect for mobile
          roadWidth: isMobile ? 6 : 10, // Narrower road for mobile
          islandWidth: isMobile ? 1 : 2, // Reduce island width for mobile
          lanesPerRoad: isMobile ? 2 : 4, // Fewer lanes on mobile
          fov: isMobile ? 110 : 90, // Adjust FOV for mobile
          fovSpeedUp: isMobile ? 140 : 120,
          speedUp: isMobile ? 1.5 : 2, // Reduce speed on mobile
          carLightsFade: 0.4,
          totalSideLightSticks: isMobile ? 10 : 20, // Fewer side lights on mobile
          lightPairsPerRoadWay: isMobile ? 20 : 40, // Reduce lights per road for mobile
          shoulderLinesWidthPercentage: 0.05,
          brokenLinesWidthPercentage: 0.1,
          brokenLinesLengthPercentage: 0.5,
          lightStickWidth: isMobile ? [0.1, 0.3] : [0.12, 0.5], // Smaller lights
          lightStickHeight: isMobile ? [1.0, 1.5] : [1.3, 1.7], // Reduce height
          movingAwaySpeed: isMobile ? [40, 60] : [60, 80], // Reduce speed on mobile
          movingCloserSpeed: isMobile ? [-80, -120] : [-120, -160], 
          carLightsLength: isMobile ? [250 * 0.03, 250 * 0.15] : [400 * 0.03, 400 * 0.2], // Shorter lights
          carLightsRadius: [0.05, 0.14],
          carWidthPercentage: isMobile ? [0.2, 0.4] : [0.3, 0.5], // Make cars smaller
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
          preserveDrawingBuffer: true, 
          pixelRatio: window.devicePixelRatio, 
          willReadFrequently: true, 
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
            fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: "1.2",
            maxWidth: "90%",
            wordWrap: "break-word",
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
