import { ReactNode } from 'react';

export function GrayBackgroundContainer({ children }: { children: ReactNode }) {
  return (
    <div className="bg-sanofiGray p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-8">
      {children}
    </div>
  );
}
