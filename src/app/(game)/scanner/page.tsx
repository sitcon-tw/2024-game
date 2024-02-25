"use client";

import { useState } from "react";
import Scanner from "@/components/Scanner";

import { InfoWindow } from "@/components/InfoWindow";
const page = () => {
  const [result, setResult] = useState<string | null>(null);

  return (
    <>
      <Scanner
        onResult={(result) => {
          setResult(result);
        }}
      />
      console.log(result);

      {result === "success" && (
        <InfoWindow
          title="已完成"
          msg="恭喜獲得一塊拼圖!!"
          onClose={() => setResult(null)}
        />
      )}
      {result === "fail" && (
        <InfoWindow
          title="失敗"
          msg="掃描失敗，請再試一次。"
          onClose={() => setResult(null)}
        />
      )}
    </>
  );
};

export default page;
