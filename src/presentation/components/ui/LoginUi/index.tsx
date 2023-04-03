import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { Input } from "presentation/components/Input";
import logo from "assets/images/sanofi-logo.svg";
import { Button } from "presentation/components/Button";
import { ToggleEyePassword } from "presentation/components/ToggleEyePassword";
import Link from "next/link";
import { AuthUser } from "domain/usecases/AuthUser";
import { useAuthStore } from "presentation/hooks/auth";
import { LoginErrorModal } from "../LoginErrorModal";

interface LoginUIProps {
  authUser: AuthUser;
}

export function LoginUI(props: LoginUIProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);

  const signin = useAuthStore((state) => state.signin);

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload = await props.authUser.execute({
      email,
      password,
    });

    if (!payload) {
      return;
    }

    signin({ email, password });
  }

  function onCloseErrorModal() {
    setIsErrorModalVisible(false);
  }

  return (
    <>
      {isErrorModalVisible ? (
        <LoginErrorModal onClose={onCloseErrorModal} />
      ) : null}
      <div className="h-screen w-screen bg-sanofiGray flex items-center justify-center">
        <form
          className="w-full max-w-[540px] flex flex-col px-12 py-14 bg-white rounded-[32px]"
          onSubmit={handleSubmit}
          autoComplete="off"
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
              icon={
                <ToggleEyePassword
                  isPasswordVisible={isPasswordVisible}
                  setIsPasswordVisible={setIsPasswordVisible}
                  onClick={(event) => {
                    event.preventDefault();
                    setIsPasswordVisible(!isPasswordVisible);
                  }}
                />
              }
              label="Password"
              id="password"
              type={isPasswordVisible ? "text" : "password"}
              value={password}
              onChange={(event) => handlePassword(event)}
            />
          </div>
          <Link
            href="/recuperar-senha"
            className="flex self-end my-4 font-sanofiSansRegular text-sm hover:underline"
          >
            Esqueceu a senha?
          </Link>
          <Button variant="primary" type="submit">
            Entrar
          </Button>
        </form>
      </div>
    </>
  );
}
