import React from "react";

function ScoreModal({ totalScore }) {
  let bgColorClass = "bg-emerald-500";

  if (totalScore <= 4) {
    bgColorClass = "bg-slate-400";
  } else if (totalScore >= 5 && totalScore <= 6) {
    bgColorClass = "bg-orange-500";
  } else if (totalScore >= 7) {
    bgColorClass = "bg-red-500";
  }
  return (
    <div
      className={`flex justify-center items-center text-center absolute rounded-lg opacity-90 z-20 h-2/6 w-4/6 ${bgColorClass} left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}
    >
      {totalScore}
    </div>
  );
}

export default ScoreModal;
