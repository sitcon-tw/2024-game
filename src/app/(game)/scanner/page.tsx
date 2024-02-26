"use client";

import { useEffect, useState } from "react";
import Scanner from "@/components/Scanner";

import { InfoWindow } from "@/components/InfoWindow";
import { getBoothToken } from "@/lib/getBoothToken";
import { sendPuzzle2Player } from "@/lib/sendPuzzle2Player";
import { invalidToken, puzzleSuccess, puzzleTaken } from "@/lib/const";

export default function Page() {
  const [result, setResult] = useState<string | null>(null);
  const [info, setInfo] = useState({ title: "", msg: "" });
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const handleResult = async () => {
      if (typeof result !== "string") return;
      var boothToken = await getBoothToken(result);
      setResult(null);
      if (boothToken) {
        const playerToken = localStorage.getItem("token");
        if (!playerToken) {
          setInfo({ title: "失敗", msg: "請先報到。" });
          setShowInfo(true);
          return;
        }
        const result = await sendPuzzle2Player(playerToken, boothToken);
        if (result === puzzleSuccess) {
          setInfo({ title: "已完成", msg: "恭喜獲得一塊拼圖!!" });
        } else if (result === puzzleTaken) {
          setInfo({ title: "失敗", msg: "此拼圖已存在。" });
        } else if (result === invalidToken) {
          setInfo({ title: "失敗", msg: "請先報到。" });
        }
      } else {
        setInfo({ title: "失敗", msg: "掃描失敗，請再試一次。" });
      }
      setShowInfo(true);
    };
    handleResult();
  });

  return (
    <>
      <Scanner
        onResult={(result) => {
          setResult(result);
        }}
      />
      {showInfo && (
        <InfoWindow
          title={info.title}
          msg={info.msg}
          onClose={() => {
            setShowInfo(false);
          }}
        />
      )}
    </>
  );
}
