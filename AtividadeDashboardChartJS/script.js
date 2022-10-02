const labels = ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Temperatura",
      backgroundColor: "rgb(255,00, 00)",
      borderColor: "rgb(255, 00, 00)",
      data: [30, 29, 28, 25, 22, 23],
    },

    {
      label: "Umidade",
      backgroundColor: "rgb(00, 00, 255)",
      borderColor: "rgb(0, 0, 255)",
      data: [80, 82, 80, 85, 80, 83],
    },
  ],
};

const data2 = {
  labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
  datasets: [
    {
      label: "Temperatura média",
      backgroundColor: "rgb(54, 162, 135)",

      data: [22, 24, 27, 23, 20, 18],
    },
    {
      label: "Umidade média",
      backgroundColor: "rgb(255, 192, 200)",
      data: [90, 89, 93, 87, 88, 82],
    },
  ],
};

const tamanhoFonte = 30;
const estiloFont = "Poppins";

const config = {
  type: "line",
  data: data,
  options: {
    scales: {
      xAxis: {
        ticks: {
          font: {
            family: estiloFont,
            size: tamanhoFonte,
          },
        },
      },
      yAxis: {
        ticks: {
          font: {
            family: estiloFont,
            size: tamanhoFonte,
          },
        },
      },
    },
    radius: 20,

    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: tamanhoFonte,
            family: estiloFont,
          },
        },
      },
      tooltips: {
        enabled: true,
      },
    },
  },
};

const config2 = {
  type: "bar",
  data: data2,
  options: {
    scales: {
      xAxis: {
        ticks: {
          font: {
            family: estiloFont,
            size: tamanhoFonte,
          },
        },
      },
      yAxis: {
        ticks: {
          font: {
            family: estiloFont,
            size: tamanhoFonte,
          },
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        labels: {
          font: {
            size: tamanhoFonte,
            family: estiloFont,
          },
        },
      },
    },
  },
};

const myChart = new Chart(
  document.getElementById("myGraphic"),
  config
).getContext("2d");

const Mychart2 = new Chart(document.getElementById("myGraphic2"), config2);

// Inserindo dados no grafico
