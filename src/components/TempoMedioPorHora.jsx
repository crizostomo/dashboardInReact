import React from "react";
import { Bar, defaults } from "react-chartjs-2";
import { ResponsiveContainer } from "recharts";
import Title from "./Title";

defaults.global.legend.position = "bottom";


export default function TempoMedioPorHora() {
  const data = {
    labels: [
      "00h",
      "01h",
      "02h",
      "03h",
      "04h",
      "05h",
      "06h",
      "07h",
      "08h",
      "09h",
      "10h",
      "11h",
      "12h",
      "13h",
      "14h",
      "15h",
      "16h",
      "17h",
      "18h",
      "19h",
      "20h",
      "21h",
      "22h",
      "23h",
    ],
    datasets: [
      {
        label: "NF recebida no APP",
        data: [15, 17, 40, 25, 35, 17, 1, 30, 5, 11, 9, 40, 28, 22, 15, 30, 3, 6, 17, 22, 3, 45, 
        12, 6],
        backgroundColor: "#9370db",
        borderColor: "grey",
        borderWidth: 1,
      },
      {
        label: "NF emitida",
        data: [33, 3, 13, 2, 25, 15, 10, 19, 10, 4, 
        31, 35, 6, 6, 20, 5, 31, 10, 14, 43, 2, 7, 
        28, 24],
        backgroundColor: "#ffa07a",
        borderColor: "grey",
        borderWidth: 1,
      },
      {
        label: "Envio ao SEFAZ",
        data: [12, 33, 22, 28, 20, 11, 30, 11, 32, 20, 9, 27, 7, 32, 6, 8, 6, 44, 12, 27, 15, 24, 
        20, 16],
        backgroundColor: "#90ee90",
        borderColor: "grey",
        borderWidth: 1,
      },
      {
        label: "Numeração",
        data: [16, 19, 21, 17, 30, 18, 35, 33, 25, 23, 34, 23, 14, 29, 9, 39, 37, 15, 25, 33, 20, 7, 25, 4],
        backgroundColor: "grey",
        borderColor: "grey",
        borderWidth: 1,
      },
      {
        label: "SAP recebe",
        data: [34, 18, 34, 6, 13, 34, 20, 8, 8, 24, 4, 32, 18, 8, 8, 30, 27, 8, 19, 14, 45, 9, 
        34, 11],
        backgroundColor: "#87ceeb",
        borderColor: "grey",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="tempoMedios">
      <Title title="TEMPO MÉDIO POR HORA" subtitle="Últimas 24h, agrupado por hora" />
      <div>
      <ResponsiveContainer widht ="100%" height="100%">
        <div className="tempoMedios">
          <Bar widht ={700} height={245} data={data}
            options={{
              maintainAspectRatio: false,
              responsive: true,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      min: 0,
                      max: 200,
                      stepSize: 50,
                    },
                    stacked: true,
                    gridLines: {
                      display: true,
                    },
                    scaleLabel: {
                      display: true,
                      fontSize: 12,
                      labelString: 'MÉDIA TEMPO EM SEGUNDOS'
                    },
                  },
                ],
                xAxes: [
                  {
                    stacked: true,
                    gridLines: {
                      display: false,
                    },
                  },
                ],
              },
              legend: {
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