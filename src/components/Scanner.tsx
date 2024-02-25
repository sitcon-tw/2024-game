"use client";
import { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
// Override console.error
// This is a hack to suppress the warning about missing defaultProps in react-qr-reader
const error = console.error;
console.error = (...args: any) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};
function Scanner({ onResult }: { onResult: (result: string) => void }) {
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
  const [cameras, setCameras] = useState<MediaDeviceInfo[]>([]);
  const [currentCamera, setCurrentCamera] = useState<string | null>(null);

  return (
    <div className="relative flex h-full w-full items-center justify-center text-center">
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

      {currentCamera && (
        <QrReader
          key={currentCamera}
          onResult={async (result) => {
            const text = result?.getText();
            if (text) {
              onResult(text);
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
  );
}

export default Scanner;
