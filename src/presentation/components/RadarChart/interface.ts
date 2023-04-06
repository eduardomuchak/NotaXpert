export namespace RadarChartComponent {
  export interface Data {
    value: number;
    label: string;
    tooltip: string;
  }

  export interface Dataset {
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }

  export interface RadarChartProps {
    data: {
      labels: string[];
      datasets: Dataset[];
    };
  }
}
