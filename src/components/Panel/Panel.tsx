"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { useWordStore } from "@/stores/wordStore";
import { generateSentence } from "@/util/sentenceGenerator";
import { usePageStore } from "@/stores/pageStore";

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
  const { page } = usePageStore();

  useEffect(() => {
    if (!window.speechSynthesis) return;
    setSynth(window.speechSynthesis);

    setUtterance(new SpeechSynthesisUtterance(words.join(" ")));
  }, [words]);

  const setPressedValue = async () => {
    if (word === "" || word === undefined) return;
    if (word === "Previous") {
      usePageStore.setState({
        page: 1,
      });
      return;
    }
    if (word === "Next") {
      usePageStore.setState({
        page: 2,
      });
      return;
    }
    if (word === "Generate") {
      console.log("Generating");
      if (input === undefined) return;
      useWordStore.setState({
        sentenceOptions: await generateSentence(input),
      });
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
      useWordStore.setState({
        sentenceOptions: [],
      });
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
