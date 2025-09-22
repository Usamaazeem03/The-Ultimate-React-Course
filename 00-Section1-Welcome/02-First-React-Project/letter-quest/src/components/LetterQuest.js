import React, { useState } from "react";

export function LetterQuest({ alphabet, isSentence, onNext, onSpeak, count }) {
  return (
    <div className="w-full max-w-md p-6 m-2 bg-white/60 dark:bg-gray-800/50 rounded-2xl shadow-lg backdrop-blur-md">
      <div className="grid grid-cols-2">
        {/* Letter Display Section */}
        <div className="md:col-span-2 flex justify-center">
          <div className="w-32 h-32 m-5 bg-gradient-to-tr from-orange-400 to-pink-500 rounded-xl flex items-center justify-center">
            <span className="text-8xl font-bold text-white">{alphabet}</span>
          </div>
        </div>

        <div className="md:col-span-8">
          <div className="flex justify-between items-start mb-4 gap-1">
            <div>
              <h2 className="inline-block text-xl font-semibold text-white">
                Letter Quest
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {isSentence}
              </p>
            </div>
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  console.log("Speak button clicked");
                  if (onSpeak) {
                    onSpeak();
                  } else {
                    console.error("onSpeak is not defined");
                  }
                }}
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                🔊
              </button>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={onNext}
              className="p-4 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 hover:opacity-90 text-white"
            >
              Next
            </button>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {count} changes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
