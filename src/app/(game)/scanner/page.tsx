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

      {result && (
        <InfoWindow msg="恭喜獲得一塊拼圖!!" onClose={() => setResult(null)} />
      )}
    </>
  );
};

export default page;
