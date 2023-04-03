import { Popover } from '@headlessui/react';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { focusStyles } from 'styles/focus';

export function CloseButton() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Popover.Button
      className={`relative h-14 w-14 rounded-2xl flex items-center justify-center cursor-pointer transition-all hover:bg-white ${focusStyles}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <AiOutlineClose
        size={24}
        aria-hidden="true"
        color={isHovering ? '#22004C' : '#F2E6FD'}
      />
    </Popover.Button>
  );
}
