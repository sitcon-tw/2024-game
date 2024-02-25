"use client";

import { useEffect, useState } from "react";
import Scanner from "@/components/Scanner";

import { InfoWindow } from "@/components/InfoWindow";
import { getBoothToken } from "@/lib/getBoothToken";

function page() {
  const [result, setResult] = useState<string | null>(null);
  const [info, setInfo] = useState({ title: "", msg: "" });
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const handleResult = async () => {
      if (typeof result !== "string") return;
      var boothToken = await getBoothToken(result);
      setResult(null);
      if (boothToken) {
        console.log(boothToken);
        setInfo({ title: "已完成", msg: "恭喜獲得一塊拼圖!!" });
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

export default page;
