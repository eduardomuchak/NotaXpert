import { DataContainerSection } from './DataContainerSection';
import { LineDivider } from './LineDivider';

const data = {
  vim: '123456789',
  fornecedor: 'ALFA MONTAGENS E PROJETOS LTDA',
  tipo: 'NF',
  ag: '0001',
  banco: 'BANCO DO BRASIL',
  contaBancaria: '20651684651320-00',
  codigo: '05165130',
  destinatario: 'Sanofi Medley Farm',
};

export function DataContainer() {
  return (
    <div className="flex w-full md:max-w-[516px] bg-sanofiGray rounded-[64px] p-8">
      <div className="flex flex-col overflow-y-auto p-4">
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
          <DataContainerSection
            title="Conta bancária"
            number={data.contaBancaria}
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
