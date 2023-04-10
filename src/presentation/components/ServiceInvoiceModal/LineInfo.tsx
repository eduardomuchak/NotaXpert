import { ReactNode } from 'react';

export function LineInfo({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <div className="border border-sanofiPurpleDark mb-1" />
      <span className="font-sanofiSansBold text-base leading-5 mb-[14px]">
        {title}
      </span>
      {children}
    </div>
  );
}
