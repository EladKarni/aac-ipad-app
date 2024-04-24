"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { useWordStore } from "@/stores/wordStore";

type PanelProps = {
  word?: string;
  className?: string;
  children?: React.ReactNode;
};

const Panel = ({ children, className, word }: PanelProps) => {
  const [pressed, setPressed] = useState(false);
  const { words, addWordToEnd, clearWords, removeWordFromEnd } = useWordStore();
  // @ts-ignore

  const setPressedValue = (value: boolean) => {
    if (typeof window !== "undefined") {
      let utterance = new window.SpeechSynthesisUtterance();

      setPressed(value);
      if (word === "" || word === undefined) return;
      if (word === "Speak") {
        utterance.text = words.join(" ");
        speechSynthesis.speak(utterance);
        return;
      }
      if (word === "Clear") {
        clearWords();
        return;
      }
      if (!pressed && value) {
        if (word === "Delete") {
          removeWordFromEnd(words);
          return;
        }
        addWordToEnd(`${word}`);
      }
    }
  };

  return (
    <button
      type="button"
      className={clsx(
        "rounded-lg w-full h-full bg-gray-100",
        !pressed ? "card-shadow-off" : "card-shadow-on",
        className
      )}
      onTouchStart={() => setPressedValue(true)}
      onTouchEnd={() => setPressedValue(false)}
    >
      {children}
    </button>
  );
};

export default Panel;
