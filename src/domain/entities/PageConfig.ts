import React from 'react';

export namespace PageConfig {
  export interface ContainerProps {
    children: React.ReactNode;
  }
  export interface TitleProps {
    children: string;
    isCentered?: boolean;
  }
}
