"use strict";

const ctx = document.getElementById("expense-chart");

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
        hoverBackgroundColor: [
          "#ff9b87",
          "#ff9b87",
          "#b4dfe5",
          "#ff9b87",
          "#ff9b87",
          "#ff9b87",
          "#ff9b87",
        ],
      },
    ],
  },
  options: {
    onHover: (event, chartElement) => {
      event.native.target.style.cursor = chartElement[0]
        ? "pointer"
        : "default";
      event.native.target.style.backGroundColor = chartElement[0]
        ? "blue"
        : "green";
    },
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
      tooltip: {
        caretSize: 0,
        displayColors: false,
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
  },
});
