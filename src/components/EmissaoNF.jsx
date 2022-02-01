import React from "react";
import { Bar } from "react-chartjs-2";
import Title from "./Title";
import { ResponsiveContainer } from "recharts";


export default function BarChartEmissaoNF() {
  const data = {
    labels: [
      "SAP recebe",
      "Numeração",
      "Envio ao SEFAZ",
      "NF emitida",
      "NF recebida no APP",
    ],
    datasets: [
      {
        label: "",
        data: [12, 24, 15, 54, 13],
        backgroundColor: "#00bfff",
        borderColor: "grey",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="emissaoNFs">
      <Title title="TEMPO MÉDIO PARA EMISSÃO DE NF" subtitle="Últimos 30 minutos" />
      <div>
      <div>
        <Title text2="▲ 14.5%" text="1:08"/>
      </div>
      <ResponsiveContainer widht ="100%" height="100%">        
      <div className="emissaoNFs">
          <Bar widht ={200} height={150} data={data}
            options={{
              maintainAspectRatio: false,
              responsive: true,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      min: 0,
                      max: 60,
                      stepSize: 10,
                    },
                    gridLines: {
                      display: true,
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