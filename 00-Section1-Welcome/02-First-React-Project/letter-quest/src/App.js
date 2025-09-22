import React, { useState, useEffect } from "react";
import { LetterQuest } from "./components/LetterQuest";
function App() {
  const [alphabet, setAlphabet] = useState("A");
  const [emoji, setEmojit] = useState("🍎");
  const [word, setWord] = useState("Apple");
  const [count, setCount] = useState(0);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);

  useEffect(() => {
    // Load voices
    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices();
      setVoices(availableVoices);

      // pick a female voice by default (if found)
      const female = availableVoices.find((v) =>
        v.name.toLowerCase().includes("female")
      );
      if (female) setSelectedVoice(female);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const getAlphabet = function () {
    fetch("/alphabet.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Alphabet:", data.uppercase.letter);
        const rendemAlp =
          data.uppercase[Math.floor(Math.random() * data.uppercase.length)];
        setAlphabet(rendemAlp.letter);
        setEmojit(rendemAlp.emoji);
        setWord(rendemAlp.word);
        setCount((c) => c + 1);
      });
  };
  const viceSentence = `${alphabet} is for ${word}`;
  const sentence = `${alphabet} is for ${word} ${emoji}`;
  const spack = () => {
    const utterance = new SpeechSynthesisUtterance(viceSentence);
    utterance.lang = "en-US";
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <LetterQuest
        alphabet={alphabet}
        isSentence={sentence}
        onNext={getAlphabet}
        onSpeak={spack}
        count={count}
      />
    </div>
  );
}

export default App;
