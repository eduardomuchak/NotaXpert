import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

interface Props {
  isPasswordVisible: boolean;
  setIsPasswordVisible: (isPasswordVisible: boolean) => void;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export function ToggleEyePassword({
  isPasswordVisible,
  setIsPasswordVisible,
  onClick,
}: Props) {
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

