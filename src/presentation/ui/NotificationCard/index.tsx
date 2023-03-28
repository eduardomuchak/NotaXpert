import { Notification } from "domain/entities/Notification";

import Image from "next/image";
import warningIcon from 'assets/images/warning-icon.svg';

export function NotificationCard(props: Notification.NotificationCardProps) {
  return (
    <div className="font-sanofiSansRegular flex flex-col gap-1 border bg-white rounded-[32px] p-4 w-[564px]">
      <h3>549167</h3>
      <h1 className="font-bold text-black text-3xl">
        Vim está vencido há 15 dias
      </h1>
      <div className="flex gap-2 items-center">
        <Image src={warningIcon} alt="ícone de aviso importante" />
        <span className="text-sanofiSecondaryOrange">Urgentes</span>
      </div>
      <span>NF</span>
      <span>Notificação de 15/01/2023</span>
    </div>
  );
}
