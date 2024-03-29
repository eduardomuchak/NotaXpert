import Image from 'next/image';
import { ReactNode } from 'react';

import DownloadIcon from 'assets/images/download-icon.svg';

interface StatisticsContainerProps {
  children: ReactNode;
  title: string;
}

export function StatisticsContainer({
  children,
  title,
}: StatisticsContainerProps) {
  return (
    <div className="flex flex-1 w-full">
      <div className="bg-white rounded-[64px] shadow-customShadow h-auto flex flex-col p-8 w-full justify-between">
        <div className="flex justify-between">
          <span className="font-sanofiSansBold text-secondaryGreen text-[34px] md:text-[50px] leading-[56px]">
            {title}
          </span>
          <div className="w-9 h-9 rounded-full bg-sanofiPurple flex items-center justify-center">
            <Image src={DownloadIcon} alt="Download" width={24} />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
