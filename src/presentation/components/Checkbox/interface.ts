import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { ComponentProps } from 'react';

export namespace CustomCheckbox {
  export interface CheckboxProps
    extends ComponentProps<typeof RadixCheckbox.Root> {
    label: string;
  }
}
