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
        'h-12 rounded-full font-sanofiSansRegular text-xl transition-all disabled:hover:cursor-not-allowed',
        {
          'bg-sanofiPurpleDark text-white hover:bg-sanofiPurple disabled:opacity-80 disabled:hover:bg-sanofiPurpleDark':
            variant === 'primary',
          'text-sanofiPurpleDark border-2 border-sanofiPurpleDark hover:bg-sanofiPurpleDark hover:text-white disabled:bg-sanofiGray disabled:text-sanofiPurpleDark ':
            variant === 'secondary',
        },
      )}
      {...rest}
    >
      <span className="px-4">{children}</span>
    </button>
  );
}
