import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import { Input } from "presentation/ui/Input";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import logo from "assets/images/sanofi-logo.svg";
import { Button } from "presentation/ui/Button";
import { useAuthStore } from "store/auth";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const signin = useAuthStore((state) => state.signin);

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await signin(email, password);
  }

  return (
    <div className="h-screen w-screen bg-sanofiGray flex items-center justify-center">
      <form
        className="w-full max-w-[480px] flex flex-col  px-10 py-12 bg-white rounded-[32px]"
        onSubmit={handleSubmit}
      >
        <Image
          src={logo}
          alt={"Sanofi Logo"}
          className="w-full max-w-[300px] mb-10 mx-auto"
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
            type={isPasswordVisible ? "text" : "password"}
            value={password}
            onChange={(event) => handlePassword(event)}
          />
        </div>
        <span className="flex self-end my-4 font-sanofiSansRegular text-sm">
          Esqueceu a senha?
        </span>
        <Button variant="primary" type="submit">
          Entrar
        </Button>
      </form>
    </div>
  );
}
