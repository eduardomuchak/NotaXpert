import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { ComponentProps } from 'react';

export namespace CustomCheckbox {
  export interface Option {
    label: string;
    value: string;
  }
  export interface CheckboxProps
    extends ComponentProps<typeof RadixCheckbox.Root> {
    option: Option;
  }
}
