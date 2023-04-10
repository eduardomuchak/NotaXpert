export namespace Priority {
  export type Variant = 'primary' | 'ghost';
  export type Priority = 'Urgente' | 'Alta' | 'Média' | 'Baixa';

  export interface PriorityTagProps {
    priority: Priority;
    variant: Variant;
  }
}
