import * as Dialog from '@radix-ui/react-dialog';
import * as Tabs from '@radix-ui/react-tabs';
import clsx from 'clsx';
import { useState } from 'react';

import { focusStyles } from 'styles/focus';
import { overlayStyle } from 'styles/overlay';

import { StatusTab } from './tabs/StatusTab';
import { HistoricTab } from './tabs/HistoricTab';
import { DataContainer } from './DataContainer';

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
    <Dialog.Root onOpenChange={() => setActiveTab('status')}>
      <Dialog.Trigger
        className={`relative h-14 w-14 rounded-2xl flex items-center justify-center cursor-pointer transition-all hover:bg-sanofiPurpleDark ${focusStyles}`}
      >
        <span>Abrir Modal</span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={`${overlayStyle}`} />
        <Dialog.Content className="fixed inset-0 m-auto h-auto md:h-fit overflow-auto flex bg-white rounded-[32px] md:rounded-[64px] shadow-lg p-6 md:p-8 w-full max-w-[1280px] flex-col gap-8 md:flex-row md:gap-0">
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
              <Tabs.List className="mb-8 flex gap-2">
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
              <Tabs.Content value="historic">
                <HistoricTab />
              </Tabs.Content>
            </Tabs.Root>
          </div>
          {/* Container direito */}
          <DataContainer />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
