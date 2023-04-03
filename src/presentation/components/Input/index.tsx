import { useState } from 'react';

import clsx from 'clsx';
import { CustomInput } from './interface';

export function Input({
  label,
  id,
  value,
  icon,
  ...rest
}: CustomInput.InputProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-col relative w-full">
      <label
        className={clsx(
          'z-10 px-1  text-base  pointer-events-none absolute top-[16px] left-5 transition-all duration-300 transform',
          {
            'translate-y-[-28px] translate-x-[10px] scale-90 Active text-gray-600 font-sanofiSansBold bg-white':
              isActive || value.length,
            'text-gray-400 font-sanofiSansRegular': !isActive && !value.length,
          },
        )}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="z-auto relative w-full flex flex-row justify-between text-gray-700  appearance-none font-sanofiSansRegular bg-white h-14 px-7 py-4 rounded-full border-2 border-sanofiPurpleDark focus:outline-none focus:ring-2 focus:ring-sanofiPurple focus:border-transparent transition-all duration-200"
        id={id}
        value={value}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        autoFocus
        {...rest}
      />
      {icon ? (
        <button className="absolute top-7 right-5 transform -translate-y-1/2 focus:outline-none">
          {icon}
        </button>
      ) : null}
    </div>
  );
}
