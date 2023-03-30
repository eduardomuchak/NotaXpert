import  * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { Filter } from "domain/entities/Filter";

interface CheckboxDemoProps{
  props: Filter.CheckboxProps;
}

export function CheckboxDemo({props}: CheckboxDemoProps) {
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