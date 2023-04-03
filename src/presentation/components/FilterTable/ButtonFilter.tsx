import { Filter } from "domain/entities/Filter";

interface ButtonFilterProps{
  props: Filter.ButtonProps;
}

export function ButtonFilter({props}: ButtonFilterProps) {
    return (
      <button className='items-center flex w-auto rounded-full bg-sanofiPurpleDark px-3 py-1 text-white text-sm font-sanofiSansRegular'>
        {props.label}
      </button>
    );
  }