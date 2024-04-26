"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { useWordStore } from "@/stores/wordStore";
import { generateSentence } from "@/util/sentenceGenerator";

type PanelProps = {
  word?: string;
  input?: string[];
  className?: string;
  children?: React.ReactNode;
};

const Panel = ({ children, className, word, input }: PanelProps) => {
  const [pressed, setPressed] = useState(false);
  const [synth, setSynth] = useState<SpeechSynthesis | null>(null);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(
    null
  );
  const { words, addWordToEnd, clearWords, removeWordFromEnd } = useWordStore();

  useEffect(() => {
    if (!window.speechSynthesis) return;
    setSynth(window.speechSynthesis);

    setUtterance(new SpeechSynthesisUtterance(words.join(" ")));
  }, [words]);

  const setPressedValue = () => {
    if (word === "" || word === undefined) return;
    if (word === "Generate") {
      console.log("Generating");
      if (input === undefined) return;
      generateSentence(input);
      return;
    }
    if (word === "Speak") {
      if (synth === null) return;
      if (utterance === null) return;
      synth.speak(utterance);
      return;
    }
    if (word === "Clear") {
      clearWords();
      return;
    }
    if (word === "Delete") {
      removeWordFromEnd(words);
      return;
    }
    addWordToEnd(`${word}`);
  };

  return (
    <button
      type="button"
      className={clsx(
        "rounded-lg w-full h-full bg-gray-100 active:shadow-card-on shadow-card-off",
        className
      )}
      onClick={() => setPressedValue()}
    >
      {children}
    </button>
  );
};

export default Panel;
