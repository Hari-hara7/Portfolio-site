import React, { useEffect, useState } from "react";
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
