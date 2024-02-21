"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function Page() {
  const [token, setToken] = useState("");
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(new URLSearchParams(window.location.search).get("token")!);
    }
  }, []);
  function copy() {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(token);
    } else {
      console.error("window is undefined");
      prompt("請複製以下代碼", token);
    }
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 500);
  }
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
          你發現了拼圖碎片
          <span className="absolute">！</span>
        </h1>
        <div className="my-4 flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-gray-50 p-4 pl-6 text-center text-6xl shadow">
          <div
            className="grow overflow-hidden text-ellipsis p-2 text-left"
            style={{
              fontFamily: `"Roboto Mono", monospace`,
            }}
          >
            {token}
          </div>
          <motion.button
            onClick={copy}
            className="mx-auto overflow-hidden rounded-2xl bg-purple-500 px-6 py-2 text-2xl font-bold text-white shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            key={copied ? "copied" : "copy"}
          >
            {copied ? "已複製" : "複製"}
          </motion.button>
        </div>
        <div className="text-center text-2xl text-gray-600">
          在 OPass &gt; 大地遊戲 &gt; 掃描器中輸入以下代碼來取得拼圖
        </div>
      </motion.div>
    </div>
  );
}
