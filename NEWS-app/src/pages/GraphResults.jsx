import React from "react";
import { Line } from "react-chartjs-2";
import { format, startOfDay, endOfDay } from "date-fns";
import { Chart, registerables } from "chart.js";
import "chartjs-adapter-date-fns";
import { useEffect, useState } from "react";

Chart.register(...registerables);

function GraphResults() {
  // Get the name from localStorage
  const name = localStorage.getItem("name");
  const [names, setNames] = useState([]);
  const [selectedName, setSelectedName] = useState("");

  useEffect(() => {
    // Get all keys from localStorage
    const keys = Object.keys(localStorage);
    setNames(keys);
  }, []);

  // Get the scores from localStorage
  const scores = selectedName
    ? JSON.parse(localStorage.getItem(selectedName)) || []
    : [];

  // Extract the scores and timestamps
  const scoreData = scores.map((score) => score.totalScore);
  const timeData = scores.map((score) =>
    format(new Date(score.timestamp), "yyyy-MM-dd HH:mm:ss")
  );

  const data = {
    labels: timeData,
    datasets: [
      {
        label: name,
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
          unit: "hour", // Change this to 'hour'
          displayFormats: {
            hour: "ha", // Change this to display hours
          },
          ticks: {
            stepSize: 1, // Add this to display every hour
            source: "auto",
          },
        },
        min: format(startOfDay(new Date()), "yyyy-MM-dd HH:mm:ss"), // Midnight of the current day
        max: format(endOfDay(new Date()), "yyyy-MM-dd HH:mm:ss"), // End of the current day
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
    </div>
  );
}

export default GraphResults;
