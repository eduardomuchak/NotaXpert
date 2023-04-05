import { useCallback, useState } from 'react';
import Dropzone from 'react-dropzone';
import Image from 'next/image';

import cloudIcon from 'assets/images/cloud-icon.svg';
import fileIcon from 'assets/images/file-icon.svg';

export function FileDropzone() {
  const [file, setFile] = useState<any>(null);

  // console.log('file', file);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // console.log('Teste', acceptedFiles[0].name);
    acceptedFiles.forEach((file: File) => {
      const reader = new FileReader();

      // reader.onabort = () => console.log('file reading was aborted');
      // reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        // Do whatever you want with the file contents
        // const binaryStr = reader.result;
        // console.log(binaryStr);
      };
      setFile(acceptedFiles[0]);
      reader.readAsArrayBuffer(file);
    });
  }, []);

  return (
    <Dropzone onDrop={onDrop}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div className="bg-sanofiViolet border-2 border-sanofiPurpleDark w-full max-w-[1200px] mx-auto mt-16 rounded-[64px] h-[304px] flex justify-center p-10 hover:cursor-pointer">
            {file ? (
              <div className="flex flex-col items-center justify-center gap-4">
                <Image src={fileIcon} alt={'Ícone de arquivo selecionado'} />
                <span className="font-sanofiSansRegular text-2xl mt-5">
                  {file.name}
                </span>
                <div className="flex flex-row gap-4">
                  <button className="py-1 px-3 border-2 rounded-full border-sanofiPurpleDark text-sanofiPurpleDark bg-white ">
                    Cancelar
                  </button>
                  <button className="py-1 px-3 rounded-full text-white bg-sanofiPurpleDark ">
                    Confirmar
                  </button>
                </div>
              </div>
            ) : (
              <div
                {...getRootProps()}
                className="flex flex-col items-center justify-center gap-4"
              >
                <input {...getInputProps()} />
                <Image
                  src={cloudIcon}
                  alt={'Ícone de nuvem para upload de arquivos'}
                />
                <span className="font-sanofiSansRegular text-2xl mt-5">
                  (.xml, .csv, .xlsx)
                </span>
                <h1 className="text-black font-sanofiSansBold text-[28px] leading-8 text-center">
                  Faça o upload da planilha de backlog
                </h1>
              </div>
            )}
          </div>
        </section>
      )}
    </Dropzone>
  );
}
