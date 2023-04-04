export namespace PieChartComponent {
  export interface Data {
    value: number;
    label: string;
  }

  export interface Dataset {
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
  }

  export interface PieChartProps {
    data: {
      labels: string[];
      datasets: Dataset[];
    };
  }
}
