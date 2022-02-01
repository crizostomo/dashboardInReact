import React from "react";
import { Bar } from "react-chartjs-2";
import Title from "./Title";
import { ResponsiveContainer } from "recharts";


export default function TOP10Un() {
  const data = {
    labels: [
      "Shanghai",
      "Beijing",
      "Karachi",
      "Shenzhen",
      "Guangzhou",
      "Istanbul",
      "Mumbai",
      "Moscow",
      "São Paulo",
      "Delhi",
    ],
    datasets: [
      {
        label: "",
        data: [124.2, 120.8, 114.9, 103.7, 98.1, 96.7, 91.4, 88.2, 81.0, 73.7],
        backgroundColor: "#00bfff",
        borderColor: "grey",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="NFPendente">
      <Title title="TOP 10 UNIDADES COM MAIOR TEMPO PARA EMISSÃO DE NF" subtitle="Últimos 30 minutos" />
      <div>
      <ResponsiveContainer widht ="100%" height="100%">        
      <div className="NFPendente">
          <Bar widht ={400} height={215} data={data}
            options={{
              maintainAspectRatio: false,
              responsive: true,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      min: 0,
                      max: 150,
                      stepSize: 25,
                    },
                    gridLines: {
                      display: true,
                    },
                    scaleLabel: {
                      display: true,
                      fontSize: 10,
                      labelString: 'MÉDIA TEMPO EM SEGUNDOS'
                    },
                  },
                ],
                xAxes: [
                  {
                    gridLines: {
                      display: false,
                    },
                  },
                ],
              },
             legend: {
               display: false,
               labels: {
                 fontSize: 8,
                 boxWidth: 8,
               },
              },
            }}
          ></Bar>
        </div>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
