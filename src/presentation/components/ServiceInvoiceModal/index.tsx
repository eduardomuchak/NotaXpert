import * as Dialog from '@radix-ui/react-dialog';

import { focusStyles } from 'styles/focus';
import { overlayStyle } from 'styles/overlay';

import { Button } from '../Button';
import { PriorityTag } from '../PriorityTag';

import { LineInfo } from './LineInfo';
import { StatusTag } from './StatusTag';

export function ServiceInvoiceModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        className={`relative h-14 w-14 rounded-2xl flex items-center justify-center cursor-pointer transition-all hover:bg-sanofiPurpleDark ${focusStyles}`}
      >
        <span>Abrir Modal</span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={`${overlayStyle}`} />
        <Dialog.Content className="fixed inset-0 m-auto h-fit flex bg-white rounded-[64px] shadow-lg p-8 w-full max-w-[1280px]">
          {/* Container esquerdo */}
          <div className="flex flex-col grow-[3] gap-4">
            <div className="flex flex-col">
              <Dialog.Title className="font-sanofiSansBold text-2xl leading-8">
                Nota Fiscal de Serviço
              </Dialog.Title>
              <span className="font-sanofiSansBold text-[42px] leading-[48px]">
                5051354
              </span>
            </div>
            <div className="flex gap-2 mb-4">
              <Button variant="small-primary">Status</Button>
              <Button variant="small-secondary">Histórico</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-8 pr-8">
              <LineInfo title={'Agente:'}>
                <span className="font-sanofiSansRegular text-2xl leading-8">
                  Roberto Miranda
                </span>
              </LineInfo>
              <LineInfo title={'Status atual:'}>
                <StatusTag status={'Em tratamento'} />
              </LineInfo>
              <LineInfo title={'Adicionado em:'}>
                <span className="font-sanofiSansRegular text-2xl leading-8">
                  22/02/2023
                </span>
              </LineInfo>
              <LineInfo title={'Vence em:'}>
                <span className="font-sanofiSansRegular text-2xl leading-8">
                  25/02/2023
                </span>
              </LineInfo>
              <LineInfo title={'Dias no board:'}>
                <span className="font-sanofiSansRegular text-2xl leading-8">
                  03
                </span>
              </LineInfo>
              <LineInfo title={'Prioridade:'}>
                <PriorityTag priority={'Urgente'} variant={'primary'} />
              </LineInfo>
            </div>
          </div>
          {/* Container direito */}
          <div className="flex flex-col grow-[2] bg-emerald-500">
            <Dialog.Description>Dados</Dialog.Description>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
