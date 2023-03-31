import Image from 'next/image';

import { useTransition, animated, config } from 'react-spring';
import { PageTitle } from '../PageTitle';
import { Notification } from 'domain/entities/Notification';
import { NotificationsContainer } from '../NotificationsContainer';
import { NotificationCard } from '../NotificationCard';
import { FaBell } from 'react-icons/fa';

import warningIcon from 'assets/images/warning-icon.svg';
import notificationIcon from 'assets/images/notification-button.svg';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
interface NotificationsModalProps {
  notifications: Notification[];
}

export function NotificationsModal(prop: NotificationsModalProps) {
  const [open, setOpen] = useState(false);
  const transitions = useTransition(open, {
    from: { opacity: 0, transform: 'translateY(-10px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-10px)' },
    config: config.stiff,
  });

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger className="relative h-14 w-14 bg-white rounded-2xl flex items-center justify-center cursor-pointer hover:brightness-90 transition-all">
        <FaBell color={'#22004C'} size={24} />
        <div className="absolute bg-secondaryPink w-3 h-3 rounded-full top-0 right-0" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        {transitions((style, item) =>
          item ? (
            <animated.div style={style}>
              <DropdownMenu.Content className="bg-white w-min md:w-full md:max-w-2xl p-4 md:p-8  shadow-customShadow flex flex-col gap-8 h-[86vh] overflow-y-scroll mt-6 md:mt-8">
                <div className="min-w-[300px]">
                  <PageTitle>Notificações</PageTitle>
                </div>
                <div className="flex gap-2 items-center border-2 border-sanofiSecondaryOrange rounded-full w-fit px-[8px] py-[4px]">
                  <Image src={warningIcon} alt="ícone de aviso importante" />
                  <span className="text-sanofiSecondaryOrange">Urgentes</span>
                </div>
                <NotificationsContainer>
                  {prop.notifications.map((notification, index) => (
                    <NotificationCard
                      notification={{
                        id: notification.id,
                        title: notification.title,
                        isUrgent: notification.isUrgent,
                        type: notification.type,
                        date: notification.date,
                      }}
                      key={`${index}${notification.id}`}
                    />
                  ))}
                </NotificationsContainer>
                <button className="bg-sanofiPurpleDark flex items-center gap-2 rounded-full px-4 py-2 w-fit">
                  <Image src={notificationIcon} alt="ícone de um filtro" />
                  <span className="text-white">
                    Mostrar todos os VIMs com notificação
                  </span>
                </button>
              </DropdownMenu.Content>
            </animated.div>
          ) : null,
        )}
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
