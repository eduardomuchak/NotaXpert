import * as RadixCheckbox from '@radix-ui/react-checkbox';
import React from 'react';
import { BsCheckLg } from 'react-icons/bs';

import { CustomCheckbox } from './interface';

export function Checkbox({ label, ...rest }: CustomCheckbox.CheckboxProps) {
  return (
    <RadixCheckbox.Root
      className="flex items-center justify-between gap-3 group focus:outline-none disabled:cursor-not-allowed"
      {...rest}
    >
      <span className="text-black text-base leading-5 font-sanofiSansRegular">
        {label}
      </span>
      <div className="w-[28px] h-[28px] rounded-md flex items-center justify-center bg-white border-2 border-sanofiPurple group-data-[state=checked]:bg-sanofiPurple group-data-[state=checked]:border-bg-sanofiPurple transition-all duration-400 group-focus:ring-2 group-focus:ring-bg-sanofiPurple group-focus:ring-offset-2 group-focus:ring-offset-background">
        <RadixCheckbox.Indicator>
          <BsCheckLg size={24} color="white" />
        </RadixCheckbox.Indicator>
      </div>
    </RadixCheckbox.Root>
  );
}
