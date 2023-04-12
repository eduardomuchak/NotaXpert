export interface ContainerSectionProps {
  title: string;
  number: string;
  text?: string;
}

export function DataContainerSection(props: ContainerSectionProps) {
  return (
    <>
      {props.text ? (
        <div>
          <span className="font-sanofiSansBold text-[20px]">{props.title}</span>
          <div className="text-[24px] grid grid-cols-2 grid-flow-row w-full">
            <span>{props.number}</span>
            <span>{props.text}</span>
          </div>
        </div>
      ) : (
        <div>
          <span className="font-sanofiSansBold text-[20px]">{props.title}</span>
          <div className="text-[24px]">
            <span>{props.number}</span>
          </div>
        </div>
      )}
    </>
  );
}
