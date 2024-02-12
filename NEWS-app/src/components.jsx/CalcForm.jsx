import React, { useState } from "react";
import totalScoreCounter from "./scoreCounter";
import ScoreModal from "./scoreModal";

export const CalcForm = () => {
  const [RR, setRR] = useState("");
  const [SpO2, setSpO2] = useState("");
  const [administeredOxygen, setAdministeredOxygen] = useState("");
  const [systolicBP, setSystolicBP] = useState("");
  const [HR, setHR] = useState("");
  const [avpu, setAvpu] = useState("");
  const [temp, setTemp] = useState("");
  const [totalScore, setTotalScore] = useState(0);
  const [showScoreModal, setshowScoreModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const score = totalScoreCounter(
      Number(RR),
      Number(SpO2),
      Number(temp),
      Number(HR),
      Number(systolicBP),
      administeredOxygen,
      avpu
    );
    setTotalScore(score);
    setshowScoreModal(true);
    console.log(totalScore);
  };

  const hideModal = () => {
    setshowScoreModal(false);
  };

  return (
    <div className="p-2 h-screen z-10">
      <form
        className="bg-slate-400 p-4 flex-row m-auto"
        onSubmit={handleSubmit}
      >
        {showScoreModal && (
          <ScoreModal totalScore={totalScore} hideModal={hideModal} />
        )}
        <div className="flex flex-col p-4">
          <label className="pb-2" htmlFor="RR">
            Respiratory Rate
          </label>
          <input
            type="number"
            id="RR"
            name="RR"
            value={RR}
            onChange={(e) => setRR(e.target.value)}
          />
        </div>
        <div className="flex flex-col p-4">
          <label className="pb-2" htmlFor="SpO2">
            Saturation
          </label>
          <input
            type="number"
            id="SpO2"
            name="SpO2"
            value={SpO2}
            onChange={(e) => setSpO2(e.target.value)}
          />
        </div>
        <div className="flex flex-col p-4">
          <label className="pb-2" htmlFor="administeredOxygen">
            Distributed Oxygen
          </label>
          <input
            type="text"
            id="administeredOxygen"
            name="administeredOxygen"
            value={administeredOxygen}
            onChange={(e) => setAdministeredOxygen(e.target.value)}
          />
        </div>
        <div className="flex flex-col p-4">
          <label className="pb-2" htmlFor="systolicBP">
            Systolic Blood pressure
          </label>
          <input
            type="number"
            id="systolicBP"
            name="systolicBP"
            value={systolicBP}
            onChange={(e) => setSystolicBP(e.target.value)}
          />
        </div>
        <div className="flex flex-col p-4">
          <label className="pb-2" htmlFor="HR">
            Heart Rate
          </label>
          <input
            type="number"
            id="HR"
            name="HR"
            value={HR}
            onChange={(e) => setHR(e.target.value)}
          />
        </div>
        <div className="flex flex-col p-4">
          <label className="pb-2" htmlFor="avpu">
            AVPU
          </label>
          <input
            type="text"
            id="avpu"
            name="avpu"
            value={avpu}
            onChange={(e) => setAvpu(e.target.value)}
          />
        </div>
        <div className="flex flex-col p-4">
          <label className="pb-2" htmlFor="temp">
            Temperature
          </label>
          <input
            type="number"
            id="temp"
            name="temp"
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
          />
        </div>
        <div className="text-center items-center justify-center">
          <button
            className=" bg-blue-300 p-2 rounded-md m-auto w-1/2"
            type="submit"
          >
            Calculate Score
          </button>
        </div>
      </form>
    </div>
  );
};

export default CalcForm;
