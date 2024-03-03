import { TicketX, TicketCheck, TicketMinus } from "lucide-react";
export function StateIcon({
  state,
}: {
  state: "查詢中" | "已兌換" | "兌換成功" | "錯誤";
}) {
  if (state === "查詢中") return <></>;
  if (state === "錯誤") return <TicketX size={72} strokeWidth={2} />;
  if (state === "已兌換") return <TicketMinus size={72} strokeWidth={2} />;
  if (state === "兌換成功") return <TicketCheck size={72} strokeWidth={2} />;
}
