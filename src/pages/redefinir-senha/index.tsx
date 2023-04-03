import React, { ChangeEvent, useState } from 'react';

import { useRouter } from 'next/router';
import { Input } from 'presentation/components/Input';
import { Button } from 'presentation/components/Button';
import { ToggleEyePassword } from 'presentation/components/ToggleEyePassword';

import Image from 'next/image';
import logo from 'assets/images/sanofi-logo.svg';

export default function RedefinirSenha() {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'password') {
      setPassword(event.target.value);
    }
    if (event.target.name === 'confirmPassword') {
      setConfirmPassword(event.target.value);
    }
  };

  const router = useRouter();

  return (
    <div className="h-screen w-full bg-sanofiGray flex items-center justify-center">
      <form
        className="w-full max-w-[540px] flex flex-col px-12 py-14 bg-white rounded-[32px]"
        onSubmit={handleSubmit}
      >
        <Image
          src={logo}
          alt={'Sanofi Logo'}
          className="w-full max-w-[300px] mb-10 mx-auto hover:cursor-pointer"
          onClick={() => router.push('/login')}
        />
        <h1 className="font-sanofiSansBold text-4xl text-center text-sanofiBlue mb-6">
          Redefinir Senha
        </h1>
        <div className="flex flex-col gap-6">
          <Input
            icon={
              <ToggleEyePassword
                isPasswordVisible={isPasswordVisible}
                setIsPasswordVisible={setIsPasswordVisible}
              />
            }
            label="Nova senha"
            id="password"
            type={isPasswordVisible ? 'text' : 'password'}
            value={password}
            onChange={handleChange}
            name="password"
          />
          <Input
            icon={
              <ToggleEyePassword
                isPasswordVisible={isConfirmPasswordVisible}
                setIsPasswordVisible={setIsConfirmPasswordVisible}
              />
            }
            label="Confirme a nova senha"
            id="confirmPassword"
            type={isConfirmPasswordVisible ? 'text' : 'password'}
            value={confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
          />
          <Button variant="primary" type="submit">
            Redefinir senha
          </Button>
        </div>
      </form>
    </div>
  );
}
