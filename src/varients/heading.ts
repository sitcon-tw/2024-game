import { tv } from "tailwind-variants";

export const heading = tv({
  base: "font-sans font-bold",
  variants: {
    level: {
      1: 'text-[30px] leading-[36px]',
      2: 'text-[24px] leading-[28.8px]',
      3: 'text-[22px] leading-[26.4px]',
      4: 'text-[20px] leading-[24px]',
      5: 'text-[18px] leading-[21.6px]',
    }
  },
  defaultVariants: {
    level: 1,
  },
});

