import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { CheckboxDemo } from './Checkbox';

export function Types() {
  return (
    <DropdownMenu.Content
      className="w-24 border-black border-solid border-2 bg-white p-2 flex flex-col gap-2"
      sideOffset={5}
    >
      <CheckboxDemo props={{ label: 'NFs' }} />
      <CheckboxDemo props={{ label: 'DANFs' }} />
      <DropdownMenu.Arrow className="DropdownMenuArrow" />
    </DropdownMenu.Content>
  );
}
