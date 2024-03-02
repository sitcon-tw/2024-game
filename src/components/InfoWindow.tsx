import { motion, AnimatePresence } from "framer-motion";
import { Info } from "lucide-react";
interface Props {
  title: string;
  msg: string;
  onClose: () => void;
}

export function InfoWindow({ title, msg, onClose }: Props) {
  return (
    <motion.div
      className="flex h-full items-center justify-center bg-sitcon-color8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="w-[396px] max-w-full rounded-lg bg-white p-6 text-center text-gray-800 shadow-md"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
      >
        <Info size={48} className="mx-auto" />
        <div className="my-2 text-2xl font-semibold">{title}</div>
        <p>{msg}</p>
        <button
          onClick={onClose}
          className="mt-4 w-full rounded-md bg-sitcon-primary py-2 text-white"
        >
          關閉
        </button>
      </motion.div>
    </motion.div>
  );
}
