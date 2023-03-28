import React from "react";

interface NotificationsContainerProps {
  children: React.ReactNode;
}

export function NotificationsContainer({
  children,
}: NotificationsContainerProps) {
  return (
    <div className="rounded-[32px] bg-sanofiLightOrange p-4 flex flex-col gap-4">
      {children}
    </div>
  );
}
