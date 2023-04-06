import Image from 'next/image';
import { ReactNode } from 'react';

import DownloadIcon from 'assets/images/download-icon.svg';

interface ChartContainerProps {
  children: ReactNode;
  chartTitle: string;
}

export function ChartContainer({ children, chartTitle }: ChartContainerProps) {
  return (
    <div className="flex flex-1 w-full">
      <div className="bg-white rounded-[64px] shadow-customShadow h-auto flex flex-col p-8 w-full justify-between">
        <div className="flex w-full justify-between">
          <span className="font-sanofiSansRegular text-2xl leading-8 break-words">
            {chartTitle}
          </span>
          <div className="w-fit">
            <div className="w-9 h-9 rounded-full bg-sanofiPurple flex items-center justify-center">
              <Image src={DownloadIcon} alt="Download" width={24} />
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
