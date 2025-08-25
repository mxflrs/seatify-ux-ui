import React from "react";
import { useContactDialogStore } from "../../../core/store/contactDialogStore";

interface Props {
  cta: string;
}

const DialogTriggerButtons: React.FC<Props> = ({ cta }) => {
  const open = useContactDialogStore((state) => state.open);

  const ctaWords = cta?.split(" ") ?? [];
  const lastWord = ctaWords.pop();
  const firstPart = ctaWords.join(" ");

  const baseClasses =
    "my-12 md:my-24 items-center justify-center rounded-full font-thin transition-all duration-200 mx-auto ring-1 ring-white/25 hover:ring-white/50 cursor-pointer px-12 py-8 text-base bg-black text-white hover:bg-sfv-green-600 hover:text-black select-none";

  return (
    <div>
      <button
        onClick={open}
        className={`block md:hidden ${baseClasses}`}
      >
        {firstPart}
      </button>
      <button
        onClick={open}
        className={`hidden md:block ${baseClasses}`}
      >
        {cta}
      </button>
    </div>
  );
};

export default DialogTriggerButtons;
