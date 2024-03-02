"use client";
import Image from "next/image";
import book from "@/img/book.svg";
import { heading } from "@/varients/heading";
import { useState } from "react";
import { text } from "@/varients/text";
import Dialog from "./Dialog";
import { BookText } from "lucide-react";
export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-sitcon-color8 p-4">
      <h1 className="bg-gradient-to-r from-[#385AACCC] via-[#946E34BF] via-60% to-[#462002] bg-clip-text text-xl font-bold text-transparent">
        SITCON 2024
      </h1>
      <button
        className="flex cursor-pointer items-center gap-1 text-xl font-bold"
        onClick={() => setOpen((o) => !o)}
      >
        <BookText strokeWidth={2.5} />
        規則
      </button>
      <Dialog open={open} setOpen={setOpen}>
        <Rule />
      </Dialog>
    </nav>
  );
}

function Rule() {
  return (
    <div className="flex flex-col gap-4 px-4 py-2">
      <div className="flex flex-col items-center justify-center gap-2 text-center tracking-wider">
        <BookText strokeWidth={2} size={48} />
        <h1 className={heading({ level: 1 })}>規則</h1>
      </div>

      <p className={text({ level: 1 })}>
        今年的大地遊戲，我們將 SITCON 2024
        諸多年會相關活動都融合進了「迷因拼圖」遊戲中，邀請您來一同邊玩邊探索，解鎖所有活動體驗！
      </p>
      <h1 className={heading({ level: 1 })}>該從哪裡開始？</h1>
      <p className={text({ level: 1 })}>
        請在攤位、年會活動、與 BONUS
        三種關卡類型中選擇一個您有興趣的活動，並依照「如何完成任務？」中的提示完成指定任務，即可獲得該活動相對應的拼圖點數！（每類型關卡皆有各別完成之上限，鼓勵以多元形式參與。）
      </p>
      <h1 className={heading({ level: 1 })}>為何要收集拼圖點數？</h1>
      <p className={text({ level: 1 })}>
        當您每解完一個任務，都將會在「我的拼圖」中發現新增的迷因拼圖塊，最終，您將可以成功湊出至多
        3 組迷因拼圖。您可以自由選擇完成 1 至 3 組迷因拼圖，並至 3F
        講者服務台兌換相應數量的紀念品抽獎券。
      </p>
      <h1 className={heading({ level: 1 })}>如何兌換獎勵？</h1>
      <p className={text({ level: 1 })}>
        您可以在「累積獎勵」的進度條上，確認當前可兌換的紀念禮品抽獎券數量，並至
        3F
        講者服務台兌換抽獎券（抽獎活動之詳細說明請參考「我的拼圖」頁面右下方之「抽獎活動說明」）。
      </p>
      <p className={text({ level: 1 })}>
        {" "}
        您需要注意的是，每個 OPass
        帳號當日僅限兌換乙次抽獎券，當您確認兌換後將不得再繼續累積拼圖與更多抽獎券。
      </p>
      <b className={text({ level: 1, bold: true })}>
        完成越多任務、中獎機率越高！快點開始遊戲吧 {"(ﾉ>ω<)ﾉ"}
      </b>
      <b className={text({ level: 1, bold: true })}>重要時間戳記及地點：</b>
      <div className="grid w-fit grid-cols-3 gap-[1px] border border-gray-400 bg-gray-400">
        <Cell></Cell>
        <Cell>時間</Cell>
        <Cell>地點</Cell>
        <Cell>抽獎券兌換</Cell>
        <Cell>13：00～15：35</Cell>
        <Cell>3F 講者服務台</Cell>
        <Cell>抽獎活動</Cell>
        <Cell>
          15：55～16：00
          <br />
          （點心時間結束前 10 分鐘）
        </Cell>
        <Cell>R0 國際會議廳</Cell>
        <Cell>獎品兌換</Cell>
        <Cell>16：00～16：50</Cell>
        <Cell>3F 講者服務台</Cell>
      </div>
      <p className={text({ level: 1 })}>
        若有任何問題，歡迎於 13：00 後至 3F 講者服務台詢問現場工作人員。
      </p>
    </div>
  );
}

function Cell({ children }: { children?: React.ReactNode }) {
  return <div className="bg-white p-1">{children}</div>;
}
