import React, { useState } from "react";
import totalScoreCounter from "./scoreCounter"; // replace with the actual path

export const CalcForm = () => {
  const [RR, setRR] = useState("");
  const [SpO2, setSpO2] = useState("");
  const [administeredOxygen, setAdministeredOxygen] = useState("");
  const [systolicBP, setSystolicBP] = useState("");
  const [HR, setHR] = useState("");
  const [avpu, setAvpu] = useState("");
  const [temp, setTemp] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const totalScore = totalScoreCounter(
      Number(RR),
      Number(SpO2),
      Number(temp),
      Number(HR),
      Number(systolicBP),
      administeredOxygen,
      avpu
    );
    console.log(totalScore);
  };

  return (
    <div className="p-8 h-screen">
      <form className="bg-gray-500 p-4 flex-row m-auto" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="RR">Respiratory Rate</label>
          <input
            type="number"
            id="RR"
            name="RR"
            value={RR}
            onChange={(e) => setRR(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="SpO2">Saturation</label>
          <input
            type="number"
            id="SpO2"
            name="SpO2"
            value={SpO2}
            onChange={(e) => setSpO2(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="administeredOxygen">Distributed Oxygen</label>
          <input
            type="text"
            id="administeredOxygen"
            name="administeredOxygen"
            value={administeredOxygen}
            onChange={(e) => setAdministeredOxygen(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="systolicBP">Systolic Blood pressure</label>
          <input
            type="number"
            id="systolicBP"
            name="systolicBP"
            value={systolicBP}
            onChange={(e) => setSystolicBP(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="HR">Heart Rate</label>
          <input
            type="number"
            id="HR"
            name="HR"
            value={HR}
            onChange={(e) => setHR(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="avpu">AVPU</label>
          <input
            type="text"
            id="avpu"
            name="avpu"
            value={avpu}
            onChange={(e) => setAvpu(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="temp">Temperature</label>
          <input
            type="number"
            id="temp"
            name="temp"
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
          />
        </div>
        <button type="submit">Calculate Score</button>
      </form>
    </div>
  );
};

export default CalcForm;
