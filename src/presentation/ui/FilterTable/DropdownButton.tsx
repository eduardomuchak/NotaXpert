import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import { Filter } from "domain/entities/Filter";

interface DropdownButtonProps{
  props: Filter.DropdownMenuProps;
}

export function DropdownButton({props}: DropdownButtonProps) {
    return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className='items-center flex flex-row min-w-fit border-2 rounded-full border-sanofiPurpleDark border-solid gap-2 px-3 py-1 text-gray-500' aria-label='Tipos de doc select'>
            <p className='text-xs font-bold font-sanofiSansRegular'>{props.label}</p>
            <TriangleDownIcon />
          </button>
        </DropdownMenu.Trigger>
  
        <DropdownMenu.Portal>
          {props.content}
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    );
  }