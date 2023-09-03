"use client";
import QrScanner from "qr-scanner"; // Import using ES6 syntax
import React, { useEffect } from "react";

const Scan: React.FC = () => {
  useEffect(() => {
    let videoElem: HTMLVideoElement | null = document.getElementById(
      "video"
    ) as HTMLVideoElement | null;

    if (videoElem) {
      // Create a new QrScanner instance and pass the video element
      const qrScanner = new QrScanner(videoElem, (result: string | null) => {
        console.log(`🚀 ~ result:`, result);
        if (result !== null) {
          console.log("decoded qr code:", result);
        }
      });

      // Start the QR code scanning
      qrScanner.start();
    }
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <video id="video" autoPlay playsInline></video>
    </div>
  );
};

export default Scan;
