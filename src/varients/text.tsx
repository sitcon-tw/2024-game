import { tv } from "tailwind-variants";

export const text = tv({
  base: "font-sans",
  variants: {
    level: {
      1: 'text-lg',
      2: 'text-base',
      3: 'text-sm',
      4: 'text-xs leading-[18px]',
    },
    bold: {
      true: 'font-medium',
      false: 'font-normal',
    }
  },
  defaultVariants: {
    level: 1,
    bold: false,
  },
});
