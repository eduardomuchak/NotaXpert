import { PriorityTag } from 'presentation/components/PriorityTag';

import { LineInfo } from '../LineInfo';
import { StatusTag } from '../StatusTag';

export function StatusTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-8 pr-0 md:pr-8">
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
        <span className="font-sanofiSansRegular text-2xl leading-8">03</span>
      </LineInfo>
      <LineInfo title={'Prioridade:'}>
        <PriorityTag priority={'Urgente'} variant={'primary'} />
      </LineInfo>
    </div>
  );
}
