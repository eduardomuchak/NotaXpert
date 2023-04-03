import Image from 'next/image';
import DownloadIcon from 'assets/images/download-icon.svg';

interface ChartContainerProps {
  children: React.ReactNode;
  chartTitle: string;
}

export function ChartContainer({ children, chartTitle }: ChartContainerProps) {
  return (
    <div className="bg-white rounded-[64px] shadow-customShadow h-fit flex flex-col p-8 w-full">
      <div className="flex justify-between">
        <span className="font-sanofiSansRegular text-2xl leading-8">
          {chartTitle}
        </span>
        <div className="w-9 h-9 rounded-full bg-sanofiPurple flex items-center justify-center">
          <Image src={DownloadIcon} alt="Download" width={24} />
        </div>
      </div>
      {children}
    </div>
  );
}
