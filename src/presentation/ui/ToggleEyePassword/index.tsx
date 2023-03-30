import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export function ToggleEyePassword({
  isPasswordVisible,
  setIsPasswordVisible,
}: {
  isPasswordVisible: boolean;
  setIsPasswordVisible: (isPasswordVisible: boolean) => void;
}) {
  return (
    <div
      className="bg-white"
      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
    >
      {isPasswordVisible ? (
        <AiFillEye size={24} />
      ) : (
        <AiFillEyeInvisible size={24} />
      )}
    </div>
  );
}
