export const options = {
  responsive: true,
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 20,
      bottom: 0,
    },
  },
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
      align: 'start' as 'start',
      labels: {
        boxWidth: 20,
        boxHeight: 20,
        padding: 30,
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
  barPercentage: 0.9,
  categoryPercentage: 1,
};
