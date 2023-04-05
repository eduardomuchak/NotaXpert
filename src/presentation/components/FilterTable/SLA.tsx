import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { CheckboxSLA } from './CheckboxSLA';

export function SLA() {
  return (
    <DropdownMenu.Content
      className="w-40 border-black border-solid border-2 bg-white p-2 gap-2 flex flex-col"
      sideOffset={5}
    >
      <CheckboxSLA props={{ label: 'Fora da SLA', sla: false }} />
      <CheckboxSLA props={{ label: 'Dentro da SLA', sla: true }} />
      <DropdownMenu.Arrow className="DropdownMenuArrow" />
    </DropdownMenu.Content>
  );
}
