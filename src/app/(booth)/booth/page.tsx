"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Scanner from "@/components/Scanner";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendPuzzle2Player } from "@/lib/sendPuzzle2Player";
import { invalidToken, puzzleSuccess, puzzleTaken } from "@/lib/const";
import { getBoothName } from "@/lib/getBoothName";
import { getPlayerPuzzle } from "@/lib/getPlayerPuzzle";
import { QrCode } from "lucide-react";
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
      const playerInfo = await getPlayerPuzzle(playerToken);
      setPlayerToken(null);
      if (result === puzzleSuccess) {
        toast(`已為 ${playerInfo.user_id} 增加拼圖`, { type: "success" });
      } else if (result === puzzleTaken) {
        toast(`${playerInfo.user_id} 已存在這張拼圖`, { type: "warning" });
      } else if (result === invalidToken) {
        toast(`${playerInfo.user_id} 尚未報到`, {
          type: "error",
        });
      }
    };
    handleResult();
  });
  return (
    <div>
      <motion.div
        className="mx-auto w-full max-w-[512px] px-2 py-10 text-gray-950"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
      >
        <QrCode size={32} className="m-auto" />
        <h1 className="mt-2 text-center text-xl tracking-wider opacity-75">
          攤位掃描器
        </h1>
        <h1 className="text-center text-2xl font-bold">{boothName}</h1>
        <div className="my-4 flex w-full items-center justify-center gap-6 rounded-2xl bg-gray-50 p-2 text-center shadow">
          <div className="aspect-square w-full overflow-hidden rounded-xl">
            <Scanner
              onResult={(result) => {
                console.log(result);
                setPlayerToken(result);
              }}
            />
          </div>
        </div>
        <div className="text-center text-xl text-gray-600">
          請掃描會眾 Opass 中的 QR code
        </div>
      </motion.div>
      <ToastContainer />
    </div>
  );
}
