import * as Dialog from '@radix-ui/react-dialog';
import * as Tabs from '@radix-ui/react-tabs';
import clsx from 'clsx';
import { useState } from 'react';

import { focusStyles } from 'styles/focus';
import { overlayStyle } from 'styles/overlay';

import { StatusTab } from './tabs/StatusTab';

export function ServiceInvoiceModal() {
  const [activeTab, setActiveTab] = useState('status');

  const triggerStyle = (tab: string) =>
    clsx('rounded-full transition-all disabled:hover:cursor-not-allowed', {
      'bg-sanofiPurpleDark border-2 border-sanofiPurpleDark text-white hover:bg-sanofiPurple hover:border-sanofiPurple disabled:opacity-80 disabled:hover:bg-sanofiPurpleDark':
        activeTab === tab,
      'text-sanofiPurpleDark border-2 border-sanofiPurpleDark hover:bg-sanofiPurpleDark hover:text-white disabled:bg-sanofiGray disabled:text-sanofiPurpleDark':
        activeTab !== tab,
    });

  return (
    <Dialog.Root>
      <Dialog.Trigger
        className={`relative h-14 w-14 rounded-2xl flex items-center justify-center cursor-pointer transition-all hover:bg-sanofiPurpleDark ${focusStyles}`}
      >
        <span>Abrir Modal</span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={`${overlayStyle}`} />
        <Dialog.Content className="fixed inset-0 m-auto h-fit flex bg-white rounded-[64px] shadow-lg p-8 w-full max-w-[1280px] flex-col gap-8 md:flex-row md:gap-0">
          {/* Container esquerdo */}
          <div className="flex flex-col grow-[2] gap-4">
            <div className="flex flex-col">
              <Dialog.Title className="font-sanofiSansBold text-2xl leading-8">
                Nota Fiscal de Serviço
              </Dialog.Title>
              <span className="font-sanofiSansBold text-[42px] leading-[48px]">
                5051354
              </span>
            </div>
            <Tabs.Root
              onValueChange={(value: string) => setActiveTab(value)}
              defaultValue={'status'}
            >
              <Tabs.List>
                <Tabs.Trigger className={triggerStyle('status')} value="status">
                  <span className="px-3 py-1 font-sanofiSansRegular text-base leading-5 text-center flex items-center justify-center ">
                    Status
                  </span>
                </Tabs.Trigger>
                <Tabs.Trigger
                  className={triggerStyle('historic')}
                  value="historic"
                >
                  <span className="px-3 py-1 font-sanofiSansRegular text-base leading-5 text-center flex items-center justify-center ">
                    Histórico
                  </span>
                </Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="status" defaultValue="status">
                <StatusTab />
              </Tabs.Content>
              <Tabs.Content value="historic"></Tabs.Content>
            </Tabs.Root>
          </div>
          {/* Container direito */}
          <div className="flex flex-col grow-[3] bg-emerald-500">
            <Dialog.Description>Dados</Dialog.Description>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
