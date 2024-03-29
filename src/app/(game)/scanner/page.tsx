"use client";

import { useEffect, useState } from "react";
import Scanner from "@/components/Scanner";
import { InfoWindow } from "@/components/InfoWindow";
import { getBoothToken } from "@/lib/getBoothToken";
import { sendPuzzle2Player } from "@/lib/sendPuzzle2Player";
import { useReadLocalStorage } from "usehooks-ts";
import { invalidToken, puzzleSuccess, puzzleTaken } from "@/lib/const";
import { getPlayerPuzzle } from "@/lib/getPlayerPuzzle";

export default function Page() {
  const playerToken: string | null = useReadLocalStorage("token");
  const [taken, setTaken] = useState(false);

  useEffect(() => {
    if (!playerToken) return;
    getPlayerPuzzle(playerToken)
      .then((player) => {
        if (typeof player.coupon === "number") setTaken(true);
      })
      .catch(console.error);
  }, [playerToken]);

  if (taken) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-3xl">你已經領取過抽獎券了</div>
      </div>
    );
  } else {
    return <Scan playerToken={playerToken} />;
  }
}

function Scan({ playerToken }: { playerToken: string | null }) {
  const [result, setResult] = useState<string | null>(null);
  const [info, setInfo] = useState({ title: "", msg: "" });
  const [showInfo, setShowInfo] = useState(false);
  useEffect(() => {
    async function handleResult() {
      if (showInfo) return;
      if (typeof result !== "string") return;
      let boothToken = await getBoothToken(result);
      setResult(null);
      if (boothToken) {
        if (!playerToken) {
          setInfo({ title: "失敗", msg: "請先報到。" });
          setShowInfo(true);
          return;
        }
        try {
          const result = await sendPuzzle2Player(playerToken, boothToken);
          if (result === puzzleSuccess) {
            setInfo({ title: "成功", msg: "恭喜獲得拼圖！" });
          } else if (result === puzzleTaken) {
            setInfo({ title: "成功", msg: "你已經有這個拼圖了！" });
          } else if (result === invalidToken) {
            setInfo({ title: "失敗", msg: "請先報到。" });
          }
        } catch (e) {
          console.error(e);
          setInfo({ title: "失敗", msg: "無法兌換此拼圖" });
        }
      } else {
        setInfo({ title: "失敗", msg: "掃描失敗，請再試一次。" });
      }
      setShowInfo(true);
    }
    handleResult();
  }, [result]);

  return (
    <>
      {!showInfo && (
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
      )}
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
