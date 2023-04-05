export const options = {
  responsive: true,
  plugins: {
    datalabels: {
      color: 'white',
      font: {
        family: 'sanofiSansRegular',
        size: 16,
      },
      align: 'start' as 'start',
      offset: 10,
      anchor: 'end' as 'end',
    },
    legend: {
      display: true,
      position: 'bottom' as 'bottom',
      labels: {
        boxWidth: 20,
        boxHeight: 20,
        padding: 16,
        font: {
          size: 16,
          family: 'sanofiSansRegular',
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      display: false,
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
      display: true,
    },
  },
};
