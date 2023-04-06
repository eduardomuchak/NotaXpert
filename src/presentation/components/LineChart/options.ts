export const options = {
  responsive: true,
  layout: {
    padding: {
      left: 0,
      right: 50,
      top: 0,
      bottom: 0,
    },
  },
  elements: {
    line: {
      borderWidth: 2,
    },
  },
  plugins: {
    tooltip: {
      enabled: true,
      intersect: false,
      mode: 'index' as const,
      callbacks: {
        label: (context: any) => {
          const label = context.dataset.label || '';
          if (label) {
            return `${label}: ${context.formattedValue}`;
          } else {
            return context.formattedValue;
          }
        },
      },
    },
    legend: {
      position: 'bottom' as const,
      align: 'start' as const,
      labels: {
        boxWidth: 20,
        boxHeight: 20,
        color: 'black',
        font: {
          size: 16,
          family: 'sanofiSansRegular',
          color: '#000000',
        },
        padding: 20,
      },
    },
    labels: {
      color: 'black',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
    datalabels: {
      display: false,
      // anchor: 'end' as const,
      // align: 'right' as const,
      // offset: 5,
      // clamp: true,
      // color: (context: any) => {
      //   return context.dataset.backgroundColor;
      // },
      // font: {
      //   size: 14,
      //   family: 'sanofiSansRegular',
      // },
      // formatter: (_value: number, context: any) => {
      //   const dataset = context.dataset.data[context.dataset.data.length - 1];
      //   if (_value === dataset) {
      //     return dataset;
      //   } else {
      //     return null;
      //   }
      // },
    },
  },
  scales: {
    x: {
      display: true,
      ticks: {
        color: 'black',
      },
      grid: {
        //color: 'rgba(0, 0, 0, 1)',
        display: true,
      },
    },
    y: {
      ticks: {
        //color: 'black',
      },
      grid: {
        //color: 'rgba(0, 0, 0, 1)',
        display: false,
      },
    },
  },
};
