import { TextareaHTMLAttributes } from 'react';

export namespace CustomTextArea {
  export interface TextAreaProps extends TextareaHTMLAttributes<any> {
    label: string;
    id: string;
    value: string;
  }
}
