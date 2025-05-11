'use client';

import React, { useState } from 'react';

interface CopyButtonProps {
  text: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (text !== "Coming soon") {
      navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2 text-lg">
      <span className="text-gray-400">CA:</span>
      <button
        onClick={handleCopy}
        className={`font-mono ${
          text === "Coming soon"
            ? "text-gray-500 cursor-not-allowed"
            : "text-yellow-500 hover:text-yellow-400 cursor-pointer"
        } transition-colors duration-200`}
        disabled={text === "Coming soon"}
      >
        {text}
      </button>
      {isCopied && (
        <span className="text-green-500 text-sm">Copied!</span>
      )}
    </div>
  );
} 