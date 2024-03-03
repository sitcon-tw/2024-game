"use client";
import React, { useEffect, useState } from "react";
import Dialog from "./Dialog";
import Scanner from "./Scanner";
import { getPlayerPuzzle } from "@/lib/getPlayerPuzzle";
import { useLocalStorage } from "usehooks-ts";

import { KeyRound, FormInput, QrCode } from "lucide-react";
const NonTokenModalContent = () => {
  const [isModalOpen, setModalOpen] = useState(true);
  const [manualInputModal, setManualInputModal] = useState<boolean>(false);
  const [scanQRCodeModal, setScanQRCodeModal] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [token, setToken] = useLocalStorage("token", "");

  useEffect(() => {
    const handleLogin = async () => {
      if (typeof result !== "string") return;
      getPlayerPuzzle(result)
        .then((puzzle) => {
          console.log(puzzle);
          setToken(() => result);
          // setModalOpen(false);
        })
        .catch(() => {
          setModalOpen(true);
          alert("驗證失敗，請再試一次。");
        });
      setResult(null);
    };
    handleLogin();
  });

  return (
    <div>
      <Dialog open={isModalOpen} setOpen={setModalOpen}>
        <div className="flex flex-col gap-4 break-all p-6">
          <KeyRound size={48} strokeWidth={2} className="m-auto" />
          <p className="text-center font-bold">
            請檢查 OPass 是否已成功報到，或透過下列方式進入遊戲。
          </p>
          <div className="flex flex-col gap-2">
            <div
              className="cursor-pointer rounded-xl border border-sitcon-secondary border-opacity-50 bg-white p-4 shadow-sm"
              onClick={() => setManualInputModal(true)}
            >
              <div className="flex items-center gap-4">
                <FormInput size={32} strokeWidth={2} />
                <div>手動輸入票券代碼</div>
              </div>
            </div>
            <div
              className="cursor-pointer rounded-xl border border-sitcon-secondary border-opacity-50 bg-white p-4 shadow-sm"
              onClick={() => setScanQRCodeModal(true)}
            >
              <div className="flex items-center gap-4">
                <QrCode size={32} strokeWidth={2} />
                <div>掃描票券 QR code</div>
              </div>
            </div>
          </div>

          <Dialog open={manualInputModal} setOpen={setManualInputModal}>
            <div className="flex w-full flex-col items-center gap-4 break-all p-6 text-center">
              <FormInput size={48} strokeWidth={2} />
              <div className="text-center text-xl font-bold">
                手動輸入票券代碼
              </div>

              <p className="mt-0">請輸入 OPass 票券代碼</p>
              <input
                className="w-full rounded-xl border px-4 py-2"
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="請輸入票券代碼"
              />

              <div className="flex w-full flex-col gap-2">
                <button
                  className="rounded-xl bg-blue-500 px-4 py-2 text-white"
                  onClick={() => {
                    setResult(inputValue);
                    setModalOpen(false);
                  }}
                >
                  完成
                </button>
                <button
                  className="rounded-xl border border-sitcon-secondary border-opacity-50 bg-white px-4 py-2"
                  onClick={() => setManualInputModal(false)}
                >
                  取消
                </button>
              </div>
            </div>
          </Dialog>

          <Dialog open={scanQRCodeModal} setOpen={setScanQRCodeModal}>
            <div className="flex flex-col items-center gap-4 break-all p-6">
              <QrCode size={48} strokeWidth={2} />
              <div className="text-center text-xl font-bold">
                掃描票券 QR code
              </div>
              <div className="relative h-[396px]">
                <Scanner
                  onResult={(result) => {
                    setResult(result);

                    // Dirty hack to close the modal.
                    setTimeout(() => {
                      setModalOpen(false);
                    }, 1000);
                  }}
                />

                <p className="absolute bottom-0 left-0 right-0 m-auto inline-block w-max max-w-full rounded-t-xl bg-sitcon-secondary/40 px-3 py-1 text-center text-white backdrop-blur">
                  請開啟 OPass 中的我的票券，並掃描其中的 QR code
                </p>
              </div>
              <button
                className="w-full rounded-xl border border-sitcon-secondary border-opacity-50 bg-white px-4 py-2"
                onClick={() => setScanQRCodeModal(false)}
              >
                取消
              </button>
            </div>
          </Dialog>
        </div>
      </Dialog>
    </div>
  );
};

export default NonTokenModalContent;
