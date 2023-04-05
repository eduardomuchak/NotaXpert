import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Slider from '@radix-ui/react-slider';

export function Period() {
  return (
    <DropdownMenu.Content
      className="flex flex-col border-black border-solid border-2 bg-white p-2 gap-3"
      sideOffset={5}
    >
      <DropdownMenu.DropdownMenuLabel className="text-xl font-bold font-sanofiSansRegular text-sanofiPurpleDark">
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
        <div className="flex flex-row justify-between text-xs font-sanofiSansRegular">
          <p>01</p>
          <p>07</p>
          <p>15</p>
          <p>30</p>
          <p>60</p>
          <p>90+</p>
        </div>
      </div>
      <DropdownMenu.DropdownMenuLabel className="text-xs font-bold font-sanofiSansRegular text-violet-900">
        entre 15 e 60 dias atrás
      </DropdownMenu.DropdownMenuLabel>
      <DropdownMenu.Arrow className="DropdownMenuArrow" />
    </DropdownMenu.Content>
  );
}
