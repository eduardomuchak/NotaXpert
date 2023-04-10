import clsx from 'clsx';
import { FaExclamationTriangle } from 'react-icons/fa';

import { Priority } from './interface';

export function PriorityTag({
  priority,
  variant,
  ...rest
}: Priority.PriorityTagProps) {
  return (
    <div
      className={clsx(
        'flex items-center justify-center rounded-full transition-all disabled:hover:cursor-not-allowed w-fit px-3 py-1 gap-2',
        {
          'bg-secondaryRed text-white':
            priority === 'Urgente' && variant === 'primary',
        },
        {
          'bg-secondaryOrange text-white':
            priority === 'Alta' && variant === 'primary',
        },
        {
          'bg-secondaryYellow text-white':
            priority === 'Média' && variant === 'primary',
        },
        {
          'bg-secondaryGreen text-white':
            priority === 'Baixa' && variant === 'primary',
        },
        {
          'text-secondaryRed': priority === 'Urgente' && variant === 'ghost',
        },
      )}
      {...rest}
    >
      <FaExclamationTriangle
        color={variant === 'primary' ? '#FFFFFF' : '#CF483E'}
      />
      <span className={'font-sanofiSansRegular text-base leading-5'}>
        {priority}
      </span>
    </div>
  );
}
