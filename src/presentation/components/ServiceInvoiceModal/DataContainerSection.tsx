export interface ContainerSectionProps {
  title: string;
  number: string;
  text: string;
}

export function DataContainerSection(props: ContainerSectionProps) {
  return (
    <div>
      <span className="font-sanofiSansBold text-[20px]">{props.title}</span>
      <div className="flex flex-row justify-between text-[24px] gap-[32px]">
        <span>{props.number}</span>
        <span>{props.text}</span>
      </div>
    </div>
  );
}
