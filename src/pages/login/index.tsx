import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { Input } from 'presentation/ui/Input';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import logo from 'assets/images/sanofi-logo.svg';
import { Button } from 'presentation/ui/Button';

const EyeIcon = ({
  isPasswordVisible,
  setIsPasswordVisible,
}: {
  isPasswordVisible: boolean;
  setIsPasswordVisible: (isPasswordVisible: boolean) => void;
}) => {
  return (
    <button
      className="bg-white"
      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
    >
      {isPasswordVisible ? (
        <AiFillEye size={24} />
      ) : (
        <AiFillEyeInvisible size={24} />
      )}
    </button>
  );
};

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className="h-screen w-screen bg-sanofiGray flex items-center justify-center">
      <form className="w-full max-w-[480px] flex flex-col  p-10">
        <Image
          src={logo}
          alt={'Sanofi Logo'}
          className="w-full max-w-[300px] mb-7 mx-auto"
        />
        <div className="flex flex-col gap-6 w-full">
          <Input
            label="Email"
            id="email"
            type="email"
            value={email}
            onChange={(event) => handleEmail(event)}
          />
          <Input
            // icon={
            //   <EyeIcon
            //     isPasswordVisible
            //     setIsPasswordVisible={setIsPasswordVisible}
            //   />
            // }
            label="Password"
            id="password"
            type={isPasswordVisible ? 'text' : 'password'}
            value={password}
            onChange={(event) => handlePassword(event)}
          />
        </div>
        <span className="flex self-end my-4 font-sanofiSansRegular text-sm">
          Esqueceu a senha?
        </span>
        <Button variant="primary">Entrar</Button>
      </form>
    </div>
  );
}
