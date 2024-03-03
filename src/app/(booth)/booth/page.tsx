"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Scanner from "@/components/Scanner";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendPuzzle2Player } from "@/lib/sendPuzzle2Player";
import { invalidToken, puzzleSuccess, puzzleTaken } from "@/lib/const";
import { getBoothName } from "@/lib/getBoothName";
export default function Page() {
  const [playerToken, setPlayerToken] = useState<string | null>(null);
  const [boothToken, setBoothToken] = useState("");
  const [boothName, setBoothName] = useState<string | null>(null);
  useEffect(() => {
    const handleResult = async () => {
      if (typeof window !== "undefined") {
        const boothToken = new URLSearchParams(window.location.search).get(
          "token",
        )!;
        setBoothToken(boothToken);
        if (boothName === null) {
          const boothName = (await getBoothName(boothToken))?.slug;
          setBoothName(boothName ? boothName : "（攤位不存在）");
        }
      }
      if (typeof playerToken !== "string") return;
      const result = await sendPuzzle2Player(playerToken, boothToken);
      setPlayerToken(null);
      if (result === puzzleSuccess) {
        toast(`已為 ${playerToken} 增加拼圖`, { type: "success" });
      } else if (result === puzzleTaken) {
        toast(`${playerToken} 已存在這張拼圖`, { type: "warning" });
      } else if (result === invalidToken) {
        toast(`${playerToken} 尚未報到`, {
          type: "error",
        });
      }
    };
    handleResult();
  });
  return (
    <div>
      <motion.div
        className="mx-auto w-full max-w-[512px] px-2 py-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-center text-4xl font-bold">
          攤位掃描器
          <span className="absolute">！</span>
        </h1>
        <div className="my-4 flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-gray-50 p-4 pl-6 text-center shadow">
          <Scanner
            onResult={(result) => {
              console.log(result);
              setPlayerToken(result);
            }}
          />
        </div>
        <div className="text-center text-2xl text-gray-600">
          請刷取會眾 OPass 上的 QR code
          <br />
          攤位: {boothName}
        </div>
      </motion.div>
      <ToastContainer />
    </div>
  );
}
