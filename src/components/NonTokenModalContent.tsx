"use client";
import React, { useEffect, useState } from "react";
import Dialog from "./Dialog";
import Scanner from "./Scanner";
import { getPlayerPuzzle } from "@/lib/getPlayerPuzzle";

const NonTokenModalContent = () => {
  const [isModalOpen, setModalOpen] = useState(true);
  const [manualInputModal, setManualInputModal] = useState<boolean>(false);
  const [scanQRCodeModal, setScanQRCodeModal] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    const handleLogin = async () => {
      console.log(result);
      if (typeof result !== "string") return;
      var puzzle = await getPlayerPuzzle(result);
      setResult(null);
      if (puzzle !== "Invalid token, please try again after checkin.") {
        console.log(puzzle);
        localStorage.setItem("token", result);
        // setModalOpen(false);
      } else {
        setModalOpen(true);
        alert("驗證失敗，請再試一次。");
      }
    };
    handleLogin();
  });

  return (
    <div>
      <Dialog open={isModalOpen} setOpen={() => setModalOpen(false)}>
        <div className="flex flex-col gap-4 break-all p-6">
          <p className="mt-0">
            請檢查 OPass 是否已成功報到，或透過下列方式進入遊戲。
          </p>
          <div className="flex flex-col">
            <div
              className="cursor-pointer p-4 m-2 border rounded shadow-lg"
              onClick={() => setManualInputModal(true)}
            >
              <div className="flex items-center">
                <i className="bx bxs-keyboard text-4xl"></i>
                <div className="ml-4">
                  <div className="font-bold">手動輸入票券代碼</div>
                </div>
              </div>
            </div>
            <div
              className="cursor-pointer p-4 m-2 border rounded shadow-lg"
              onClick={() => setScanQRCodeModal(true)}
            >
              <div className="flex items-center">
                <i className="bx bx-qr-scan text-4xl"></i>
                <div className="ml-4">
                  <div className="font-bold">掃描票券 QR Code</div>
                </div>
              </div>
            </div>
          </div>

          <Dialog
            open={manualInputModal}
            setOpen={() => setManualInputModal(false)}
          >
            <div className="flex flex-col gap-4 break-all p-6">
              <div>手動輸入票券代碼</div>
              <div>
                <p className="mt-0">請輸入 OPass 票券代碼</p>
                <input
                  className="input border m-2 p-2"
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="請輸入票券代碼"
                />
              </div>
              <div>
                <button
                  className="m-2 p-2 border"
                  onClick={() => setManualInputModal(false)}
                >
                  取消
                </button>
                <button
                  className="m-2 p-2 border bg-blue-500 text-white"
                  onClick={() => {
                    setResult(inputValue);
                    setModalOpen(false);
                  }}
                >
                  完成
                </button>
              </div>
            </div>
          </Dialog>

          <Dialog
            open={scanQRCodeModal}
            setOpen={() => setScanQRCodeModal(false)}
          >
            <div className="flex flex-col gap-4 break-all p-6">
              <div>掃描票券 QR Code</div>
              <div>
                <p className="mt-0">
                  請開啟 OPass 中的我的票券，並掃描其中的 QR Code
                </p>
                <Scanner
                  onResult={(result) => {
                    setResult(result);

                    // Dirty hack to close the modal.
                    setTimeout(() => {
                      setModalOpen(false);
                    }, 1000);
                  }}
                />
              </div>
              <button
                className="m-2 p-2 border"
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
