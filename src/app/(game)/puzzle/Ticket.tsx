"use client";

import { CheckCircle2, Circle, Ticket } from "lucide-react";
import { useState } from "react";
import Dialog from "@/components/Dialog";
import { twMerge } from "tailwind-merge";

export function TicketItem({
  isDone,
  num,
  taken,
}: {
  isDone: boolean;
  num: number;
  taken: boolean;
}) {
  return (
    <div
      className={twMerge(
        "flex items-center gap-2 break-all rounded-xl border border-sitcon-secondary p-3 text-left shadow-sm",
        isDone
          ? "bg-sitcon-secondary text-[#462002]"
          : "border-opacity-50 bg-white",
        taken && "grayscale",
      )}
    >
      {isDone ? (
        <CheckCircle2
          size={48}
          strokeWidth={2}
          className={twMerge("shrink-0")}
        />
      ) : (
        <Circle
          size={48}
          strokeWidth={2}
          className={twMerge("shrink-0 text-[#F8F3E8]")}
        />
      )}
      <div>
        <div className="text-xl font-bold">抽獎券</div>
        <div className="text-base font-normal">
          {isDone
            ? `可至 3F 議程組服務台兌換抽獎券`
            : `完成拼圖 ${num} 即可兌換`}
        </div>
      </div>
    </div>
  );
}
export function TicketRules() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        className="text-xl underline underline-offset-2"
        onClick={() => setShow(true)}
      >
        抽獎活動說明
      </button>
      <Dialog open={show} setOpen={setShow}>
        <div className="p-6">
          <div className="mb-4 flex flex-col items-center justify-center gap-2 text-center tracking-wider">
            <Ticket strokeWidth={2} size={48} />
            <h1 className="text-2xl font-bold">抽獎活動說明</h1>
          </div>
          本活動開放所有與會朋友一同參與，歡迎您在下午 3 點 55 分至 R0
          參與抽獎過程，屆時將由工作人員現場抽出 12
          位幸運朋友，於公布中獎名單後將中獎序號推播到 OPass
          系統公告，請中獎者確認序號後於下午 4 點 50 分前至 3F
          議程組服務台出示抽獎券留存票根領取獎品。
          <div className="mt-2 text-xl font-bold">注意事項：</div>
          <ul className="list-inside list-disc">
            <li>本活動以抽獎券留存票根為兌獎憑證，請務必妥善保管以便兌獎。</li>
            <li>
              中獎序號名單依現場公布為主，若無法於抽獎活動時間到場請多加留意
              OPass 推播訊息，並確認您的序號。
            </li>
            <li>
              若中獎者未在時間內前來領取，將被視為自動放棄兌獎權益，年會活動結束後不額外提供獎品寄送。
            </li>
          </ul>
          <div className="mt-2 text-xl font-bold">獎品：</div>{" "}
          <ul className="list-inside list-disc">
            <li>頭獎 - 十週年紀念票卡 共 1 位 </li>
            <li>二獎 - SITCON 2024 紀念品啤酒杯 共 3 位</li>
            <li>三獎 - SITCON 鑰匙圈 共 3 位</li>
            <li>四獎 - 小石金屬徽章 共 5 位</li>
          </ul>
        </div>
      </Dialog>
    </>
  );
}
