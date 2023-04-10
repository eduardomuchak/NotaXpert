import clsx from 'clsx';

import { Status } from './interface';

export function StatusTag({ status, ...rest }: Status.StatusProps) {
  return (
    <div
      className={clsx(
        'flex items-center justify-center rounded-full transition-all disabled:hover:cursor-not-allowed w-fit px-3 py-1',
        {
          'bg-sanofiPurpleDark text-white': status === 'Backlog',
        },
        {
          'bg-secondaryBlue text-white': status === 'Em tratamento',
        },
        {
          'bg-secondaryPink text-white': status === 'Com Solicitante',
        },
        {
          'bg-secondaryRed text-white': status === 'Regras',
        },
        {
          'bg-secondaryGreen text-white': status === 'Concluído',
        },
      )}
      {...rest}
    >
      <span className={'font-sanofiSansRegular text-base leading-5'}>
        {status}
      </span>
    </div>
  );
}
