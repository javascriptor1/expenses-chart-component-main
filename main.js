"use strict";

const ctx = document.getElementById("expense-chart");

/*
  <!-- <div>mon</div>
        <div>tue</div>
        <div>wed</div>
        <div>thu</div>
        <div>fri</div>
        <div>sat</div>
        <div>sun</div> -->


  */

new Chart(ctx, {
  type: "bar",

  data: {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        label: "",
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
        borderWidth: 1,
        borderRadius: 5,
        borderSkipped: false,
        backgroundColor: [
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(186, 34%, 60%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
        ],
      },
    ],
  },
  options: {
    scales: {
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
      x: {
        border: {
          color: "transparent",
        },
        grid: {
          display: false,
        },
        ticks: {
          color: "hsl(28, 10%, 53%)",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
