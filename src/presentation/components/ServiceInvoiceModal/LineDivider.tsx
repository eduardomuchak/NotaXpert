import * as Separator from '@radix-ui/react-separator';

export function LineDivider() {
  return (
    <Separator.Root className="bg-black p-px data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-full mt-[32px] mb-[16px]" />
  );
}
