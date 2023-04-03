import  * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { Filter } from "domain/entities/Filter";

interface CheckboxSLAProps{
  props: Filter.CheckboxProps;
}

export function CheckboxSLA({props}: CheckboxSLAProps) {
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