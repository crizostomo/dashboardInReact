import React from "react";
import { Line, defaults } from "react-chartjs-2";
import { ResponsiveContainer } from "recharts";
import Title from "./Title";

defaults.global.legend.position = "right";


export default function TempoMedio() {
  const data = {
    labels: [
      "10:00",
      "10:30",
      "11:00",
      "11:30",
      "12:00",
      "12:30",
      "13:00",
      "13:30",
      "14:00",
      "14:30",
      "15:00",
      "15:30",
    ],
    datasets: [
      {
        label: "NF recebida no APP",
        data: [12, 15, 14, 19, 25, 25, 24, 16, 21, 14, 23, 24],
        backgroundColor: "#9370db",
        borderColor: "grey",
        borderWidth: 1,
      },
      {
        label: "NF emitida",
        data: [33, 37, 23, 37, 46, 37, 43, 38, 43, 25, 44, 45],
        backgroundColor: "#ffa07a",
        borderColor: "grey",
        borderWidth: 1,
      },
      {
        label: "Envio ao SEFAZ",
        data: [54, 56, 40, 58, 62, 57, 58, 52, 65, 47, 58, 57],
        backgroundColor: "#90ee90",
        borderColor: "grey",
        borderWidth: 1,
      },
      {
        label: "Numeração",
        data: [72, 80, 62, 65, 82, 65, 80, 60, 82, 61, 75, 74],
        backgroundColor: "grey",
        borderColor: "grey",
        borderWidth: 1,
      },
      {
        label: "SAP recebe",
        data: [80, 95, 80, 80, 99, 80, 99, 76, 97, 82, 88, 100],
        backgroundColor: "#87ceeb",
        borderColor: "grey",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="tempoMedios">
      <Title title="TEMPO MÉDIO POR ETAPA" subtitle="Últimas 3 horas" />
      <div>
      <ResponsiveContainer widht ="100%" height="100%">
        <div className="tempoMedios">
          <Line widht ={700} height={245} data={data}
            options={{
              maintainAspectRatio: false,
              responsive: true,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      min: 0,
                      max: 125,
                      stepSize: 25,
                    },
                    gridLines: {
                      display: true,
                    },
                    scaleLabel: {
                      display: true,
                      fontSize: 12,
                      labelString: 'TEMPO MÉDIO EM SEGUNDOS'
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
                labels: {
                  fontSize: 8,
                  boxWidth: 8,
                },
              },
              
            }}
          ></Line>
        </div>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
