import * as Collapsible from '@radix-ui/react-collapsible';
import { ChangeEvent, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import { TextArea } from '../TextArea';
import { Button } from '../Button';

export function CommentsSection() {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState('');

  const handleComment = (event: ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger asChild>
        <div className="flex flex-row items-center justify-start gap-2 hover:cursor-pointer">
          <span className="font-sanofiSansRegular text-base leading-5">
            Comentários
          </span>
          <button className="IconButton">
            {open ? <IoIosArrowDown size={20} /> : <IoIosArrowUp size={20} />}
          </button>
        </div>
      </Collapsible.Trigger>
      <Collapsible.Content className="flex flex-col mt-4 gap-6 CollapsibleContent">
        <div className="flex flex-col gap-1">
          <span className="text-base leading-5 font-sanofiSansRegular">
            Juliana Silva Ferreira
          </span>
          <span className="text-base leading-5 font-sanofiSansRegular">
            11/04/2023 - 14:35
          </span>
          <span className="text-base leading-5 font-sanofiSansBold">
            Registro SAP document. check
          </span>
        </div>
        <div className="w-[98%] max-w-xs flex flex-col gap-4 self-center">
          <TextArea
            label="Adicionar Comentário"
            id="comentario"
            value={comment}
            onChange={(event) => handleComment(event)}
          />
          <div className="w-1/2">
            <Button
              variant="small-primary"
              icon={<AiOutlinePlusCircle size={24} color={'#FFF'} />}
            >
              Adicionar
            </Button>
          </div>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
