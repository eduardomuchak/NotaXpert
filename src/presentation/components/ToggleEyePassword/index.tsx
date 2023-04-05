import { MouseEvent } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

interface Props {
  isPasswordVisible: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
}

export function ToggleEyePassword({ isPasswordVisible, onClick }: Props) {
  return (
    <div className="bg-white" onClick={onClick}>
      {isPasswordVisible ? (
        <AiFillEye size={24} />
      ) : (
        <AiFillEyeInvisible size={24} />
      )}
    </div>
  );
}
