"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
function DoughnutChart({ accounts }: DoughnutChartProps) {
  const accountsNames = accounts.map((account)=>account.name)
  const balances = accounts.map((account)=>account.currentBalance)
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: balances,
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: accountsNames,
  };
  return (
    <Doughnut
      data={data}
      options={{ cutout: "60%", plugins: { legend: { display: false } } }}
    />
  );
}

export default DoughnutChart;
