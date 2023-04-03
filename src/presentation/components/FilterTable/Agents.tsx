import  * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CheckboxDemo } from "./Checkbox";
import { SearchImput } from "./SearchImput";

export function Agents() {
    return (
      <DropdownMenu.Content className='border-black border-solid border-2 bg-white p-2 gap-2 flex flex-col' sideOffset={5}>
        <SearchImput />
        <DropdownMenu.DropdownMenuLabel className='text-xs font-bold font-sanofiSansRegular'>
          Título
        </DropdownMenu.DropdownMenuLabel>
  
        <DropdownMenu.Separator className='h-px bg-black' />
  
        <CheckboxDemo props={{label:'Roberto Miranda'}} />
  
        <DropdownMenu.Arrow className="DropdownMenuArrow" />
      </DropdownMenu.Content>
    );
  }