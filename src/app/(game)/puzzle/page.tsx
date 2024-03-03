"use client";
import { Menu } from "@/components/Menu";
import { useState } from "react";
import Puzzle from "@/components/Puzzle";
import { useFinished } from "@/hooks/useFinished";
import { useLocalStorage } from "usehooks-ts";
import { twMerge } from "tailwind-merge";
import { activities, type ActivityType } from "@/data/activity";
import { CheckCircle2, Circle, Ticket } from "lucide-react";
import Dialog from "@/components/Dialog";
function sum(a: number, b: ActivityType) {
  return a + b.piece;
}
function TicketItem({ isDone, num }: { isDone: boolean; num: number }) {
  return (
    <div
      className={twMerge(
        "flex items-center gap-2 break-all rounded-xl border border-sitcon-secondary p-3 text-left shadow-sm",
        isDone
          ? "bg-sitcon-secondary text-[#462002]"
          : "border-opacity-50 bg-white",
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
        <div className="text-base font-normal">完成拼圖 {num} 即可兌換</div>
      </div>
    </div>
  );
}
function TicketRules() {
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
          講者服務台出示抽獎券留存票根領取獎品。
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
export default function Page() {
  const [active, setActive] = useState(0);
  const [playerToken] = useLocalStorage("token", "");
  const finishedList = useFinished(playerToken);
  function isActivityFinished(activity: ActivityType) {
    return finishedList.includes(activity.name);
  }

  const data = activities.flat().map((item) => ({
    isFinished: isActivityFinished(item),
    ...item,
  }));
  const finishedN = data
    .filter((item) => isActivityFinished(item))
    .reduce(sum, 0);

  const puzzle1 = Array.from({ length: 9 })
    .map((_, i) => i + 1)
    .sort((a, b) => playerToken.charCodeAt(a) - playerToken.charCodeAt(b));
  const puzzle2 = Array.from({ length: 16 })
    .map((_, i) => i + 1)
    .sort((a, b) => playerToken.charCodeAt(a) - playerToken.charCodeAt(b));
  const puzzle3 = Array.from({ length: 16 })
    .map((_, i) => i + 1)
    .sort((a, b) => playerToken.charCodeAt(b) - playerToken.charCodeAt(a));
  const done1 = puzzle1.slice(0, finishedN);
  const done2 = puzzle2.slice(0, Math.max(finishedN - 9, 0));
  const done3 = puzzle3.slice(0, Math.max(finishedN - 9 - 16, 0));
  return (
    <div>
      <Menu
        texts={["拼圖 1", "拼圖 2", "拼圖 3"]}
        active={active}
        setActive={setActive}
      />
      {active === 0 ? (
        <Puzzle src="/meme/meme-1.jpg" done={done1} size="3x3" />
      ) : active === 1 ? (
        <Puzzle src="/meme/meme-2.jpg" done={done2} size="4x4" />
      ) : active === 2 ? (
        <Puzzle src="/meme/meme-3.jpg" done={done3} size="4x4" />
      ) : null}
      <div className="m-2">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">累計獎勵</div>
          <TicketRules />
        </div>
        <div className="my-2 grid gap-2 md:grid-cols-3">
          <TicketItem isDone={finishedN >= 9} num={1} />
          <TicketItem isDone={finishedN >= 25} num={2} />
          <TicketItem isDone={finishedN >= 41} num={3} />
        </div>
      </div>
    </div>
  );
}
