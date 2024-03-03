"use client";
import { Drawer } from "vaul";

export default function Dialog({
  children,
  open: isopen,
  setOpen,
}: {
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Drawer.Root open={isopen} onOpenChange={setOpen}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 mt-24 flex h-max max-h-[90vh] flex-col rounded-t-[10px] bg-[#F8F3E8]">
          <div className="m-auto mt-3 h-1.5 w-20 rounded-full bg-black/20" />
          <div className="max-h-[80vh] overflow-y-auto">{children}</div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
