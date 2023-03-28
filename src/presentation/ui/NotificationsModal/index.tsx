import React from "react";
import { FaBell } from "react-icons/fa";

import Image from "next/image";

import warningIcon from "assets/images/warning-icon.svg";

import { Notification } from "domain/entities/Notification";

import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { PageTitle } from "../PageTitle";
import { NotificationsContainer } from "../NotificationsContainer";
import { NotificationCard } from "../NotificationCard";

interface NotificationsModalProps {
  notifications: Notification[];
}

export function NotificationsModal(prop: NotificationsModalProps) {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center cursor-pointer hover:brightness-90 transition-all">
          <div className="relative">
            <FaBell color={"#22004C"} size={24} />
            <div className="absolute bg-secondaryPink w-3 h-3 rounded-full top-0 right-0" />
          </div>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="bg-white w-[692px] p-[32px] mt-7 shadow-customShadow flex flex-col gap-8"
          sideOffset={5}
        >
          <PageTitle>Notificações</PageTitle>
          <div className="flex gap-2 items-center border border-sanofiSecondaryOrange rounded-full w-fit px-[8px] py-[4px]">
            <Image src={warningIcon} alt="ícone de aviso importante" />
            <span className="text-sanofiSecondaryOrange">Urgentes</span>
          </div>
          <NotificationsContainer>
            <NotificationCard
              notification={{
                id: "549167",
                title: "Vim está vencido há 15 dias",
                isUrgent: true,
                type: "NF",
                date: "Notificação de 15/01/2023",
              }}
            />
            <NotificationCard
              notification={{
                id: "549167",
                title: "Vim está vencido há 15 dias",
                isUrgent: true,
                type: "NF",
                date: "Notificação de 15/01/2023",
              }}
            />
            <NotificationCard
              notification={{
                id: "549167",
                title: "Vim está vencido há 15 dias",
                isUrgent: true,
                type: "NF",
                date: "Notificação de 15/01/2023",
              }}
            />
          </NotificationsContainer>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
