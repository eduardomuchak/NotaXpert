export const options = {
  responsive: true,
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  },
  plugins: {
    legend: {
      display: false,
      position: 'right' as 'right',
      offset: 0,
      labels: {
        font: {
          size: 16,
          family: 'sanofiSansRegular',
          weight: 'bold' as 'bold',
        },
        boxWidth: 0,
        boxHeight: 0,
        padding: 32,
      },
    },
  },
  scales: {
    r: {
      angleLines: {
        display: true,
        // color: '#22004C',
      },
      grid: {
        // color: '#22004C',
        circular: true,
      },
    },
  },
  elements: {
    line: {
      tension: 0,
    },
  },
};
