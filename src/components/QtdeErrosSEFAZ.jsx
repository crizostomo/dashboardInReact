import React from "react";
import { Bar } from "react-chartjs-2";
import Title from "./Title";
import { ResponsiveContainer } from "recharts";


export default function QtdeErrosSEFAZ() {
  const data = {
    labels: [
      "01/12",
      "02/12",
      "03/12",
      "04/12",
      "05/12",
      "06/12",
      "07/12",
    ],
    datasets: [
      {
        label: "",
        data: [10, 2, 6, 5, 8, 1, 3],
        backgroundColor: "#dc143c",
        borderColor: "grey",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="NFPendente">
      <Title title="QUANTIDADE DE ERROS NO SEFAZ" subtitle="Últimos 7 dias, agrupados por dia" />
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
                      max: 12,
                      stepSize: 2,
                    },
                    gridLines: {
                      display: true,
                    },
                    scaleLabel: {
                      display: true,
                      fontSize: 10,
                      labelString: 'QUANTIDADE DE ERROS'
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
