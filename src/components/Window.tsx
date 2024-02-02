import { ReactNode } from "react";

type Props = {
  title: string;
  content: ReactNode;
};

export function Window({ title, content }: Props) {
  return <div>window</div>;
}
