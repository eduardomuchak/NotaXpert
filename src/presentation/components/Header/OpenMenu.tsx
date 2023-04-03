import { Popover } from '@headlessui/react';
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { focusStyles } from 'styles/focus';

export function OpenMenu() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Popover.Button
      className={`h-14 w-14 font-semibold rounded-2xl p-2 flex justify-center items-center hover:bg-white transition-colors ${focusStyles}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <HiMenu size={24} color={isHovering ? '#22004C' : '#F2E6FD'} />
    </Popover.Button>
  );
}
