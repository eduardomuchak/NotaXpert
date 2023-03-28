import { Notification } from "domain/entities/Notification";

import Image from "next/image";
import warningIcon from "assets/images/warning-icon.svg";

interface NotificationCardProps {
  notification: Notification.CardContent;
}

export function NotificationCard(props: NotificationCardProps) {
  return (
    <div className="font-sanofiSansRegular flex flex-col gap-2 border bg-white rounded-[32px] p-4 w-full">
      <h3 className="font-bold">{props.notification.id}</h3>
      <h1 className="font-bold text-black text-3xl">
        {props.notification.title}
      </h1>
      {props.notification.isUrgent && (
        <div className="flex gap-2 items-center">
          <Image src={warningIcon} alt="ícone de aviso importante" />
          <span className="text-sanofiSecondaryOrange">Urgentes</span>
        </div>
      )}
      <span>{props.notification.type}</span>
      <span>{props.notification.date}</span>
    </div>
  );
}
