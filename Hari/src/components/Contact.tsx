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
    onSpeedUp: () => { },
    onSlowDown: () => { },
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
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
      shoulderLines: 0xFFFFFF,
      brokenLines: 0xFFFFFF,
      leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
      rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
      sticks: 0x03B3C3,
    }
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
