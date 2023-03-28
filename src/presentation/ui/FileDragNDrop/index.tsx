import { useState } from 'react';
import Dropzone from 'react-dropzone';
import cloudIcon from 'assets/images/cloud-icon.svg';
import Image from 'next/image';

export function FileDragNDrop() {
  const [file, setFile] = useState<any>(null);
  const handleChange = (file: any) => {
    setFile(file);
  };

  const fileTypes = ['XML', 'CSV', 'XLSX'];

  return (
    <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div
            {...getRootProps()}
            className="bg-sanofiViolet w-full max-w-[1200px] mx-auto mt-16 rounded-[64px] h-[304px] flex flex-col items-center justify-center p-10 gap-4"
          >
            <input {...getInputProps()} />
            <Image
              src={cloudIcon}
              alt={'Ícone de nuvem para upload de arquivos'}
            />
            <span className="font-sanofiSansRegular text-2xl mt-5">
              (.xml, .csv, .xlsx)
            </span>
            <h1 className="text-black font-sanofiSansBold text-[28px] leading-8">
              Faça o upload da planilha de backlog
            </h1>
          </div>
        </section>
      )}
    </Dropzone>
  );
}
