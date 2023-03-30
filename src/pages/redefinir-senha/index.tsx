import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { Input } from 'presentation/ui/Input';

import logo from 'assets/images/sanofi-logo.svg';
import { Button } from 'presentation/ui/Button';

export default function RedefinirSenha() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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

  return (
    <div className="h-screen w-full bg-sanofiGray flex items-center justify-center">
      <form
        className="w-full max-w-[540px] flex flex-col px-12 py-14 bg-white rounded-[32px]"
        onSubmit={handleSubmit}
      >
        <Image
          src={logo}
          alt={'Sanofi Logo'}
          className="w-full max-w-[300px] mb-10 mx-auto"
        />
        <h1 className="font-sanofiSansBold text-4xl text-center text-sanofiBlue mb-6">
          Redefinir Senha
        </h1>
        <div className="flex flex-col gap-6">
          <Input
            label="Nova senha"
            id="password"
            type="password"
            value={password}
            onChange={handleChange}
          />
          <Input
            label="Confirme a nova senha"
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={handleChange}
          />

          <Button variant="primary" type="submit">
            Redefinir senha
          </Button>
        </div>
      </form>
    </div>
  );
}
