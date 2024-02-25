"use client";
import React, { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import { InfoWindow } from "../components/InfoWindow";

function Scanner() {
  useEffect(() => {
    getUserCameraList();
  }, []);
  async function getUserCameraList() {
    await navigator.mediaDevices.getUserMedia({ audio: false, video: true });
    let devices = await navigator.mediaDevices.enumerateDevices();
    devices = devices.filter((device) => device.kind == "videoinput");
    setCameras(devices);
    setCurrentCamera(devices[0].deviceId);
  }
  const [IsgetData, setIsgetData] = useState(false);
  const [cameras, setCameras] = useState<MediaDeviceInfo[]>([]);
  const [currentCamera, setCurrentCamera] = useState<string | null>(null);

  return (
    <div className="relative flex h-full w-full items-center justify-center text-center">
      <div className="h-full w-full">
        <div>
          <select
            onChange={(e) => setCurrentCamera(e.target.value)}
            value={currentCamera || ""}
            className="absolute left-0 right-0 top-4 z-10 m-auto w-[256px] rounded-md border border-gray-300 bg-white p-2 shadow-md"
          >
            {cameras.map((camera) => (
              <option key={camera.deviceId} value={camera.deviceId}>
                {camera.label}
              </option>
            ))}
          </select>
        </div>

        {currentCamera && (
          <QrReader
            key={currentCamera}
            onResult={(result) => {
              if (!!result) {
                // alert(data);
                // check the data if it is valid
                setIsgetData(true);
                // sendPuzzle2Player('7679f08f7eaeef5e9a65a1738ae2840e', '') send Puzzle to the player, how to get playerToken
              }
            }}
            constraints={{
              deviceId: currentCamera!,
            }}
            videoStyle={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
              position: "relative",
            }}
            videoContainerStyle={{
              height: "100%",
              width: "100%",
              padding: "0",
            }}
            containerStyle={{
              height: "100%",
              width: "100%",
            }}
          />
        )}
      </div>
      {IsgetData && (
        <InfoWindow
          msg="恭喜獲得一塊拼圖!!"
          onClose={() => setIsgetData(false)}
        />
      )}
    </div>
  );
}

export default Scanner;
