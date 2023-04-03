import ReactDOM from "react-dom";
import Image from "next/image";
import errorIcon from "assets/images/error-icon.svg";
import { Button } from "presentation/components/Button";
import React from "react";

interface LoginErrorModalProps {
  onClose: () => void;
}

export function LoginErrorModal(props: LoginErrorModalProps) {
  return (
    <>
      <div className="absolute z-40 h-full w-full bg-black bg-opacity-20 backdrop-blur-md" />
      <div className="flex flex-col rounded-[64px] h-fit py-8 px-24 absolute bg-white w-full max-w-[513px] inset-0 m-auto z-50">
        <div className="flex flex-col gap-6 items-center">
          <Image src={errorIcon} alt="ícone de erro" />
          <h1 className="font-sanofiSansBold text-sanofiPurpleDark text-2xl">
            Erro ao fazer login!
          </h1>
          <div className="flex flex-col items-center justify-center">
            <span className="font-sanofiSansRegular text-black">
              Seu e-mail ou senha não estão corretos
            </span>
            <span className="font-sanofiSansRegular text-black">
              Por favor, tente novamente
            </span>
          </div>
          <Button onClick={props.onClose} variant="primary">
            Tentar Novamente
          </Button>
        </div>
      </div>
    </>
  );
}
