import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { Checkbox } from '../Checkbox';

import { CustomSelect } from './interface';

export function CheckboxDropdown({
  label,
  id,
  options,
}: CustomSelect.SelectProps) {
  const [isActive, setIsActive] = useState(false);
  const [contentWidth, setContentWidth] = useState('');

  const labelRef = useRef<HTMLLabelElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // useEffect(() => {
  //   const labelWidth = labelRef.current?.offsetWidth;
  //   if (labelWidth) {
  //     const labelBackground = document.getElementById(`${id}-labelBackground`);
  //     if (labelBackground) {
  //       labelBackground.style.width = `${labelWidth - 7}px`;
  //     }
  //   }
  // }, [labelRef, label]);

  useEffect(() => {
    if (isActive && triggerRef.current) {
      setContentWidth(`${triggerRef.current.offsetWidth}px`);
    }
  }, [isActive]);

  return (
    <DropdownMenu.Root onOpenChange={() => setIsActive(!isActive)}>
      <DropdownMenu.Trigger
        id={`${id}-trigger`}
        ref={triggerRef}
        className="z-auto relative w-full flex flex-row justify-between items-center text-gray-700  appearance-none font-sanofiSansRegular bg-white h-14 px-7 py-4 rounded-full border-2 border-sanofiPurpleDark focus:outline-none focus:ring-2 focus:ring-sanofiPurple focus:border-transparent transition-all duration-200"
      >
        {/* <div
          id={`${id}-labelBackground`}
          className={clsx('absolute h-1 left-5 z-10', {
            'bg-white translate-y-[-26px] translate-x-[16px] transition-all duration-300 transform':
              isActive,
          })}
        /> */}
        <label
          ref={labelRef}
          className={clsx(
            'z-10 px-1 text-base  pointer-events-none absolute top-1/2 -translate-y-1/2 left-5 transition-all duration-300 transform',
            // {
            //   'translate-y-[-39px] translate-x-[10px] scale-90 Active text-gray-600 font-sanofiSansBold ':
            //     isActive,
            //   'text-gray-400 font-sanofiSansRegular': !isActive,
            // },
          )}
        >
          {label}
        </label>
        <div className="absolute top-1/2 right-5 transform -translate-y-1/2 focus:outline-none">
          {isActive ? <FiChevronUp /> : <FiChevronDown />}
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="DropdownMenuContent border-black border-solid border-2 bg-white p-4 gap-4 flex flex-col"
          sideOffset={5}
          style={{ width: contentWidth }}
        >
          {options.map((option) => (
            <Checkbox
              key={option.value}
              option={option}
              onCheckedChange={() => {
                // console.log(option.label);
              }}
            />
          ))}
          <DropdownMenu.Arrow />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
