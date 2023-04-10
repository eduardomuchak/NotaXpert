import clsx from 'clsx';

export function SmallButton({ children, variant, ...rest }: any) {
  return (
    <button
      className={clsx(
        'rounded-full font-sanofiSansRegular text-xl transition-all disabled:hover:cursor-not-allowed',
        {
          'bg-sanofiPurpleDark text-white hover:bg-sanofiPurple disabled:opacity-80 disabled:hover:bg-sanofiPurpleDark':
            variant === 'primary',
          'text-sanofiPurpleDark border-2 border-sanofiPurpleDark hover:bg-sanofiPurpleDark hover:text-white disabled:bg-sanofiGray disabled:text-sanofiPurpleDark ':
            variant === 'secondary',
        },
      )}
      {...rest}
    >
      <span className="px-3 py-1 font-sanofiSansRegular text-base text-center flex items-center justify-center">
        {children}
      </span>
    </button>
  );
}
