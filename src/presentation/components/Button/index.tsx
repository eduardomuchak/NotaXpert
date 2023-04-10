import clsx from 'clsx';

import { CustomButton } from './interface';

export function Button({
  children,
  variant,
  ...rest
}: CustomButton.ButtonProps) {
  return (
    <button
      className={clsx(
        'rounded-full transition-all disabled:hover:cursor-not-allowed',
        {
          'h-12 bg-sanofiPurpleDark text-white hover:bg-sanofiPurple disabled:opacity-80 disabled:hover:bg-sanofiPurpleDark ':
            variant === 'primary',
          ' h-12 text-sanofiPurpleDark border-2 border-sanofiPurpleDark hover:bg-sanofiPurpleDark hover:text-white disabled:bg-sanofiGray disabled:text-sanofiPurpleDark ':
            variant === 'secondary',
          'bg-sanofiPurpleDark text-white hover:bg-sanofiPurple disabled:opacity-80 disabled:hover:bg-sanofiPurpleDark ':
            variant === 'small-primary',
          'text-sanofiPurpleDark border-2 border-sanofiPurpleDark hover:bg-sanofiPurpleDark hover:text-white disabled:bg-sanofiGray disabled:text-sanofiPurpleDark':
            variant === 'small-secondary',
        },
      )}
      {...rest}
    >
      <span
        className={clsx('', {
          'px-4': variant === 'primary' || variant === 'secondary',
          'px-3 py-1 font-sanofiSansRegular text-base leading-5 text-center flex items-center justify-center ':
            variant === 'small-primary' || variant === 'small-secondary',
        })}
      >
        {children}
      </span>
    </button>
  );
}
