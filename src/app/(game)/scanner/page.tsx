"use client";

import { useEffect, useState } from "react";
import Scanner from "@/components/Scanner";

import { InfoWindow } from "@/components/InfoWindow";
import { getBoothToken } from "@/lib/getBoothToken";
import { sendPuzzle2Player } from "@/lib/sendPuzzle2Player";
import { useReadLocalStorage } from "usehooks-ts";
import { invalidToken, puzzleSuccess, puzzleTaken } from "@/lib/const";

export default function Page() {
  const [result, setResult] = useState<string | null>(null);
  const [info, setInfo] = useState({ title: "", msg: "" });
  const [showInfo, setShowInfo] = useState(false);
  const playerToken: string | null = useReadLocalStorage("token");

  useEffect(() => {
    const handleResult = async () => {
      if (typeof result !== "string") return;
      let boothToken = await getBoothToken(result);
      setResult(null);
      if (boothToken) {
        if (!playerToken) {
          setInfo({ title: "失敗", msg: "請先報到。" });
          setShowInfo(true);
          return;
        }
        const result = await sendPuzzle2Player(playerToken, boothToken);
        if (result === puzzleSuccess) {
          setInfo({ title: "已完成", msg: "恭喜獲得拼圖!!" });
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
  }, [result]);

  return (
    <>
      <Scanner
        onResult={(result) => {
          if (result.startsWith("http")) {
            // get token from query string
            const url = new URL(result);
            const token = url.searchParams.get("token");
            if (token) {
              setResult(token);
            }
          } else {
            setResult(result);
          }
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
