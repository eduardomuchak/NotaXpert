import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { Input } from 'presentation/ui/Input';

import logo from 'assets/images/sanofi-logo.svg';
import { Button } from 'presentation/ui/Button';

export default function RecuperarSenha() {
  const [email, setEmail] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(email);
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div className="h-screen w-screen bg-sanofiGray flex items-center justify-center">
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
          Recuperar Senha
        </h1>
        <div className="flex flex-col gap-6">
          <h2 className="font-sanofiSansRegular text-2xl text-center text-sanofiBlue">
            Você receberá um link para redefinir a sua senha
          </h2>

          <Input
            label="Email"
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />

          <Button variant="primary" type="submit">
            Recuperar senha
          </Button>
        </div>
      </form>
    </div>
  );
}
