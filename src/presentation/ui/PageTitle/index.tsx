import { PageConfig } from 'domain/entities/PageConfig';
import clsx from 'clsx';

export function PageTitle({ children, isCentered }: PageConfig.TitleProps) {
  return (
    <h1
      className={clsx(
        'text-4xl md:text-6xl font-sanofiSansBold text-black leading-tight md:leading-[72px]',
        {
          'mx-auto': isCentered,
        },
      )}
    >
      {children}
    </h1>
  );
}
