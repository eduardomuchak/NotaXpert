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
    legend: {
      position: 'bottom' as 'bottom',
      offset: 20,
      labels: {
        font: {
          size: 16,
          family: 'sanofiSansRegular',
          weight: 'bold' as 'bold',
        },
        boxWidth: 20,
        boxHeight: 20,
        padding: 20,
      },
    },
    tooltip: {
      callbacks: {
        label: (context: any) => {
          // Get all the values of the current dataset and show the percentage of each value
          const dataset = context.dataset.data;
          const total = dataset.reduce(
            (previousValue: number, currentValue: number) => {
              return previousValue + currentValue;
            },
          );
          const currentValue = dataset[context.dataIndex];
          const percentage = Math.floor((currentValue / total) * 100 + 0.5);
          return ` ${currentValue} VIMs - ${percentage}%`;
        },
      },
    },
    datalabels: {
      color: (context: any) => {
        return context.dataset.backgroundColor;
      },
      font: {
        size: 20,
        family: 'sanofiSansRegular',
        weight: 'bold' as 'bold',
      },
      formatter: (_value: number, context: any) => {
        // Get all the values of the current dataset and show the percentage of each value
        const dataset = context.dataset.data;
        const total = dataset.reduce(
          (previousValue: number, currentValue: number) => {
            return previousValue + currentValue;
          },
        );
        const currentValue = dataset[context.dataIndex];
        const percentage = Math.floor((currentValue / total) * 100 + 0.5);
        return `${percentage}%`;
      },
      anchor: 'end' as 'end',
      align: 'end' as 'end',
      offset: 10,
      clamp: true,
    },
  },
  radius: '90%',
};
