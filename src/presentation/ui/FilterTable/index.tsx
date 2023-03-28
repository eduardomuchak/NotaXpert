import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Slider from '@radix-ui/react-slider';
import {
  TriangleDownIcon,
  CheckIcon,
  MagnifyingGlassIcon
} from '@radix-ui/react-icons';
import { Filter } from "domain/entities/Filter";


export function FilterTable() {

  return (
    <div className='flex flex-row pb-2 gap-3'>
      <SearchImput />
      <DropdownButton label='Tipo de doc' content={<Types />} />
      <DropdownButton label='Agentes' content={<Agents />} />
      <DropdownButton label='SLA' content={<SLA />} />
      <DropdownButton label='Vencido a' content={<Period />} />
      <ButtonFilter label="Ordenar" />
    </div>
  );
}

export function SearchImput() {
  return (
    <form>
      <div className='justify-between items-center flex w-56 border-2 rounded-full border-sanofiPurpleDark border-solid gap-2 px-3 py-1 text-gray-500'>
        <input className='text-xs font-bold font-sanofiSansRegular w-full' type="text" placeholder="Buscar"></input>
        <MagnifyingGlassIcon />
      </div>
    </form>
  );
}
export function CheckboxSla(props: Filter.CheckboxProps) {
  return (
    <form>
      <div className='flex flex-row justify-between aligin-start intens-baseline w-full '>
        {props.sla == false ?
          <div className='flex flex-row text-red-700 gap-2'>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.72506 14.5001H14.2751C15.5584 14.5001 16.3584 13.1084 15.7167 12.0001L9.44173 1.1584C8.80006 0.0500651 7.20006 0.0500651 6.55839 1.1584L0.283394 12.0001C-0.358273 13.1084 0.441727 14.5001 1.72506 14.5001ZM8.00006 8.66673C7.54173 8.66673 7.16673 8.29173 7.16673 7.8334V6.16673C7.16673 5.7084 7.54173 5.3334 8.00006 5.3334C8.45839 5.3334 8.83339 5.7084 8.83339 6.16673V7.8334C8.83339 8.29173 8.45839 8.66673 8.00006 8.66673ZM8.83339 12.0001H7.16673V10.3334H8.83339V12.0001Z" fill="#CF483E" />
            </svg>

            <label className="text-xs font-sanofiSansRegular" htmlFor="c1">
              {props.label}
            </label>
          </div>
          :
          <div className='flex flex-row text-green-700 gap-2'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.8333 0.5H2.17497C1.2583 0.5 0.508301 1.25 0.508301 2.16667V13.8333C0.508301 14.75 1.2583 15.5 2.17497 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V2.16667C15.5 1.25 14.75 0.5 13.8333 0.5ZM10.5083 6.75C10.5083 7.44167 9.94997 8 9.2583 8C9.94997 8 10.5083 8.55833 10.5083 9.25V10.5C10.5083 11.425 9.7583 12.1667 8.84163 12.1667H6.3333C5.87497 12.1667 5.49997 11.7917 5.49997 11.3333C5.49997 10.875 5.87497 10.5 6.3333 10.5H8.84163L8.8333 8.83333H7.99997C7.54163 8.83333 7.16663 8.45833 7.16663 8C7.16663 7.54167 7.54163 7.16667 7.99997 7.16667H8.8333L8.84163 5.5H6.3333C5.87497 5.5 5.5083 5.125 5.5083 4.66667C5.5083 4.20833 5.87497 3.83333 6.3333 3.83333H8.84163C9.7583 3.83333 10.5083 4.58333 10.5083 5.5V6.75Z" fill="#478040" />
            </svg>

            <label className="text-xs font-sanofiSansRegular" htmlFor="c1">
              {props.label}
            </label>
          </div>
        }
        <Checkbox.Root
          className="flex h-[16px] w-[16px] appearance-none text-white text-[20px] items-center justify-center rounded-[4px] bg-violet-700"
          defaultChecked
          id="c1"
        >
          <Checkbox.Indicator className="text-violet11">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
    </form>
  );
}

export function CheckboxDemo(props: Filter.CheckboxProps) {
  return (
    <form>
      <div className='flex flex-row justify-between aligin-start intens-baseline w-full'>
        <label className="text-xs font-sanofiSansRegular" htmlFor="c1">
          {props.label}
        </label>
        <Checkbox.Root
          className="flex h-[16px] w-[16px] appearance-none text-white text-[20px] items-center justify-center rounded-[4px] bg-violet-700"
          defaultChecked
          id="c1"
        >
          <Checkbox.Indicator className="text-violet11">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
    </form>
  );
}

export function Agents() {
  return (
    <DropdownMenu.Content className='border-black border-solid border-2 bg-white p-2 gap-2 flex flex-col' sideOffset={5}>
      <SearchImput />
      <DropdownMenu.DropdownMenuLabel className='text-xs font-bold font-sanofiSansRegular'>
        Título
      </DropdownMenu.DropdownMenuLabel>

      <DropdownMenu.Separator className='h-px bg-black' />

      <CheckboxDemo label='Roberto Miranda' />

      <DropdownMenu.Arrow className="DropdownMenuArrow" />
    </DropdownMenu.Content>
  );
}

export function Types() {
  return (
    <DropdownMenu.Content className='w-24 border-black border-solid border-2 bg-white p-2 flex flex-col gap-2' sideOffset={5}>
      <CheckboxDemo label="NFs" />
      <CheckboxDemo label="DANFs" />
      <DropdownMenu.Arrow className="DropdownMenuArrow" />
    </DropdownMenu.Content>
  );
}

export function SLA() {
  return (
    <DropdownMenu.Content className='w-40 border-black border-solid border-2 bg-white p-2 gap-2 flex flex-col' sideOffset={5}>
      <CheckboxSla label="Fora da SLA" sla={false} />
      <CheckboxSla label="Dentro da SLA" sla={true} />
      <DropdownMenu.Arrow className="DropdownMenuArrow" />
    </DropdownMenu.Content>
  );
}

export function Period() {
  return (
    <DropdownMenu.Content className='flex flex-col border-black border-solid border-2 bg-white p-2 gap-3' sideOffset={5}>
      <DropdownMenu.DropdownMenuLabel className='text-xl font-bold font-sanofiSansRegular text-sanofiPurpleDark'>
        Vencido:
      </DropdownMenu.DropdownMenuLabel>
      <div>
        <form>
          <Slider.Root
            className="relative flex items-center select-none touch-none w-[200px] h-5"
            defaultValue={[20, 40]}
            max={50}
            step={10}
            minStepsBetweenThumbs={1}

          >
            <Slider.Track className="bg-gray-200 relative grow rounded-full h-[3px]">
              <Slider.Range className="absolute bg-violet-700 rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb className="block w-4 h-4 rounded-[10px] bg-violet-500" />
            <Slider.Thumb className="block w-4 h-4 rounded-[10px] bg-violet-500" />
          </Slider.Root>
        </form>
        <div className='flex flex-row justify-between text-xs font-sanofiSansRegular'>
          <text>01</text>
          <text>07</text>
          <text>15</text>
          <text>30</text>
          <text>60</text>
          <text>90+</text>
        </div>
      </div>
      <DropdownMenu.DropdownMenuLabel className='text-xs font-bold font-sanofiSansRegular text-violet-900'>
        entre 15 e 60 dias atrás
      </DropdownMenu.DropdownMenuLabel>
      <DropdownMenu.Arrow className="DropdownMenuArrow" />
    </DropdownMenu.Content>
  );
}

export function ButtonFilter(props: Filter.ButtonProps) {
  return (
    <button className='items-center flex w-auto rounded-full bg-sanofiPurpleDark px-3 py-1 text-white text-sm font-sanofiSansRegular'>
      {props.label}
    </button>
  );
}

export function DropdownButton(props: Filter.DropdownMenuProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className='items-center flex w-auto border-2 rounded-full border-sanofiPurpleDark border-solid gap-2 px-3 py-1 text-gray-500' aria-label='Tipos de doc select'>
          <text className='text-xs font-bold font-sanofiSansRegular'>{props.label}</text>
          <TriangleDownIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        {props.content}
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default FilterTable;
