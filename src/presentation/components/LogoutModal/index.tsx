import * as AlertDialog from '@radix-ui/react-alert-dialog';
import Image from 'next/image';
import { useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { focusStyles } from 'styles/focus';
import AlertIcon from 'assets/images/alert-icon.svg';

import { useTransition, animated, config } from 'react-spring';
import { destroyCookie } from 'nookies';
import { useRouter } from 'next/router';

export function LogoutModal() {
  const [open, setOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    destroyCookie(null, 'sanofi-token');
    router.push('/login');
  };

  const transitions = useTransition(open, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.stiff,
  });

  return (
    <AlertDialog.Root open={open} onOpenChange={setOpen}>
      <AlertDialog.Trigger
        className={`relative h-14 w-14 rounded-2xl flex items-center justify-center cursor-pointer transition-all hover:bg-white ${focusStyles}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <FiLogOut size={24} color={isHovering ? '#22004C' : '#F2E6FD'} />
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-md" />
        {transitions((style, item) =>
          item ? (
            <animated.div style={style}>
              <AlertDialog.Content className="fixed inset-0 m-auto h-fit flex flex-col items-center justify-center bg-white rounded-[64px] shadow-lg p-8 w-full max-w-[518px] py-8 px-28 gap-6">
                <div className="flex items-center justify-center w-32">
                  <Image src={AlertIcon} alt="Alerta" width={106} />
                </div>
                <AlertDialog.Title className="font-sanofiSansBold text-2xl leading-8 text-center">
                  Deseja sair do sistema?
                </AlertDialog.Title>
                <AlertDialog.Description className="font-sanofiSansRegular text-base leading-5 text-center">
                  Ao confirmar você será desconectado da plataforma.
                </AlertDialog.Description>
                <div className="flex w-full items-center justify-center gap-6">
                  <AlertDialog.Cancel
                    className={`${focusStyles} rounded-full h-12 font-sanofiSansRegular text-xl transition-all disabled:hover:cursor-not-allowed text-sanofiPurpleDark border-2 border-sanofiPurpleDark hover:bg-sanofiPurpleDark hover:text-white disabled:bg-sanofiGray disabled:text-sanofiPurpleDark`}
                  >
                    <span className="px-4">Cancelar</span>
                  </AlertDialog.Cancel>
                  <AlertDialog.Action
                    className={`${focusStyles} h-12 rounded-full font-sanofiSansRegular text-xl transition-all disabled:hover:cursor-not-allowed bg-sanofiPurpleDark text-white hover:bg-sanofiPurple disabled:opacity-80 disabled:hover:bg-sanofiPurpleDark`}
                    onClick={() => handleLogout()}
                  >
                    <span className="px-4">Confirmar</span>
                  </AlertDialog.Action>
                </div>
              </AlertDialog.Content>
            </animated.div>
          ) : null,
        )}
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
