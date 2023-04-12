import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { CustomTextArea } from './interface';

export function TextArea({
  label,
  id,
  value,
  ...rest
}: CustomTextArea.TextAreaProps) {
  const [isActive, setIsActive] = useState(false);

  const labelRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    const labelWidth = labelRef.current?.offsetWidth;
    if (labelWidth) {
      const labelBackground = document.getElementById(`${id}-labelBackground`);
      if (labelBackground) {
        labelBackground.style.width = `${labelWidth - 7}px`;
      }
    }
  }, [labelRef, label]);

  return (
    <div className="flex flex-col relative w-full">
      <div
        id={`${id}-labelBackground`}
        className={clsx('absolute h-1 left-5 z-10', {
          'bg-white translate-y-[-2px] translate-x-[16px] transition-all duration-300 transform':
            isActive || value.length,
        })}
      />
      <div className="relative">
        <label
          ref={labelRef}
          className={clsx(
            'z-10 px-1 text-base  pointer-events-none absolute top-[16px] left-5 transition-all duration-300 transform',
            {
              'translate-y-[-28px] translate-x-[10px] scale-90 Active text-gray-600 font-sanofiSansBold ':
                isActive || value.length,
              'text-gray-400 font-sanofiSansRegular':
                !isActive && !value.length,
            },
          )}
          htmlFor={id}
        >
          {label}
        </label>
      </div>

      <textarea
        className="z-auto relative w-full flex flex-row justify-between text-gray-700  appearance-none font-sanofiSansRegular bg-white h-32 px-7 py-4 rounded-3xl border-2 border-sanofiPurpleDark focus:outline-none focus:ring-2 focus:ring-sanofiPurple focus:border-transparent transition-all duration-200 resize-none"
        id={id}
        value={value}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        {...rest}
      />
    </div>
  );
}
