"use client";

import { useState } from "react";

export default function ExpandableSection({ titulo, datos }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-green-services-300 rounded-lg p-4 my-2 text-xl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-gray-800 font-semibold flex items-center justify-between p-2 bg-green-300 rounded-md hover:bg-green-500 focus:outline-none"
      >
        <span className="text-2xl">{titulo}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && <div className="mt-2 p-4 bg-gray-50 rounded-md">{datos}</div>}
    </div>
  );
}
