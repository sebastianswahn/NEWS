import React from "react";
import { Line } from "react-chartjs-2";
import { format, startOfDay, endOfDay } from "date-fns";
import { Chart, registerables } from "chart.js";
import "chartjs-adapter-date-fns";
import { useEffect, useState } from "react";

Chart.register(...registerables);

function GraphResults() {
  const name = localStorage.getItem("name");
  const [names, setNames] = useState([]);
  const [selectedName, setSelectedName] = useState("");

  useEffect(() => {
    const keys = Object.keys(localStorage);
    setNames(keys);
  }, []);

  const scores = selectedName
    ? JSON.parse(localStorage.getItem(selectedName)) || []
    : [];

  const scoreData = scores.map((score) => score.totalScore);
  const timeData = scores.map((score) =>
    format(new Date(score.timestamp), "yyyy-MM-dd HH:mm:ss")
  );

  const data = {
    labels: timeData,
    datasets: [
      {
        label: selectedName,
        data: scoreData,
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "hour",
          displayFormats: {
            hour: "ha",
          },
          ticks: {
            stepSize: 1,
            source: "auto",
          },
        },
        min: format(startOfDay(new Date()), "yyyy-MM-dd HH:mm:ss"),
        max: format(endOfDay(new Date()), "yyyy-MM-dd HH:mm:ss"),
      },
      y: {
        type: "linear",
        min: 0,
        max: 20,
      },
    },
  };

  const handleSelectChange = (event) => {
    setSelectedName(event.target.value);
  };

  return (
    <div className="mx-2 my-6 w-full h-[80vh]">
      <select value={selectedName} onChange={handleSelectChange}>
        <option value="">Select a name</option>
        {names.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>
      <Line data={data} options={options} />
      <div className="flex justify-center mt-6">
        <div className="text-center">
          <button className="rounded-lg bg-blue-400 hover:bg-blue-500 p-1">
            Clear Data
          </button>
        </div>
        <div className="text-center ml-12">
          <button className="rounded-lg bg-blue-400 hover:bg-blue-500 p-1">
            Print & Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default GraphResults;
