export namespace CustomInput {
  export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    value: string;
    icon?: React.ReactNode;
  }
}
