import { CommentsSection } from './CommentsSection';

export function CardInfo() {
  return (
    <div className="flex items-center w-full pl-2">
      {/* Círculo */}
      {/* <div className="relative">
        <div className="border border-black w-[30px]" />
        <div className="absolute inset-0 m-auto mr-3 w-6 h-6 rounded-full border border-sanofiPurpleDark bg-white" />
        <div className="absolute inset-0 m-auto mr-4 w-4 h-4 rounded-full bg-sanofiPurpleDark" />
      </div> */}

      {/* Card */}
      <div className="bg-sanofiGray border border-black rounded-[32px] p-4 flex flex-col gap-4 w-full">
        <span className="font-sanofiSansRegular text-base leading-5">
          12/01/2023 - 15:25:23 até 12/01/2023 - 15:26:43
        </span>
        <div className="flex flex-col gap-2">
          <span className="font-sanofiSansRegular text-base leading-5">
            Atividade
          </span>
          <span className="font-sanofiSansBold text-base leading-5">
            SAP document. check
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-sanofiSansRegular text-base leading-5">
            Tipo de processo
          </span>
          <span className="font-sanofiSansBold text-base leading-5">
            Processar fatura com OC (OC) OCR
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 pr-0 md:pr-8">
          <div className="flex flex-col gap-2">
            <span className="font-sanofiSansRegular text-base leading-5">
              Status
            </span>
            <span className="font-sanofiSansBold text-base leading-5">OK</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-sanofiSansRegular text-base leading-5">
              Status do documento
            </span>
            <span className="font-sanofiSansBold text-base leading-5">
              Bloqueado
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-sanofiSansRegular text-base leading-5">
              Função Real
            </span>
            <span className="font-sanofiSansBold text-base leading-5">-</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-sanofiSansRegular text-base leading-5">
              Agente
            </span>
            <span className="font-sanofiSansBold text-base leading-5">
              Juliana Silva Ferreira
            </span>
          </div>

          <CommentsSection />
        </div>
      </div>
    </div>
  );
}
