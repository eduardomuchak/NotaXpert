import { DataContainerSection } from './DataContainerSection';
import { LineDivider } from './LineDivider';

const data = {
  vim: '123456789',
  fornecedor: 'ALFA MONTAGENS E PROJETOS LTDA',
  tipo: 'NF',
  ag: '0001',
  banco: 'BANCO DO BRASIL',
  codigo: '05165130',
  destinatario: 'Sanofi Medley Farm',
};

export function DataContainer() {
  return (
    <div className="flex max-w-[516px] max-h-[650px] grow-[2] bg-sanofiGray rounded-[64px] p-8">
      <div className="flex flex-col overflow-y-scroll p-4">
        <span className="font-sanofiSansBold text-[42px]">Dados Básicos</span>
        <LineDivider />
        <span className="font-sanofiSansBold text-[32px]">
          Dados do fornecedor
        </span>
        <div className="flex flex-col gap-[16px]">
          <DataContainerSection
            title="Fonecedor"
            number={data.vim}
            text={data.fornecedor}
          />
          <DataContainerSection
            title="Banco"
            number={data.ag}
            text={data.banco}
          />
        </div>
        <LineDivider />
        <span className="font-sanofiSansBold text-[32px]">
          Dados destinatário
        </span>
        <div className="flex flex-col gap-[16px]">
          <DataContainerSection
            title="Destinatário"
            number={data.codigo}
            text={data.destinatario}
          />
        </div>
        <LineDivider />
      </div>
    </div>
  );
}
