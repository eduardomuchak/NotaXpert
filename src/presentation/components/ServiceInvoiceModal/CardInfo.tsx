import { AiOutlinePlusCircle } from 'react-icons/ai';
import { ChangeEvent, useState } from 'react';

import { TextArea } from '../TextArea';
import { Button } from '../Button';

export function CardInfo() {
  const [comment, setComment] = useState('');

  const handleComment = (event: ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

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
          <div className="w-full max-w-xs flex flex-col gap-4">
            <TextArea
              label="Adicionar Comentário"
              id="comentario"
              value={comment}
              onChange={(event) => handleComment(event)}
            />
            <div className="w-1/2">
              <Button
                variant="primary"
                icon={<AiOutlinePlusCircle size={28} color={'#FFF'} />}
              >
                Adicionar
              </Button>
            </div>
          </div>
        </div>
        {/* <button className="bg-white text-sanofiPurpleDark border-2 border-sanofiPurpleDark hover:bg-sanofiPurpleDark hover:text-white disabled:bg-sanofiGray disabled:text-sanofiPurpleDark flex items-center justify-center w-fit rounded-full transition-all disabled:hover:cursor-not-allowed px-4 py-2 gap-[10px] text-xl">
          <MdComment size={24} />
          <span>Ler Comentário</span>
        </button> */}
      </div>
    </div>
  );
}
