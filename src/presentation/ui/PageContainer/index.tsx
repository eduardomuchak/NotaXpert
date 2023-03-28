import { PageConfig } from 'domain/entities/PageConfig';

export function PageContainer({ children }: PageConfig.ContainerProps) {
  return <div className="p-10 w-screen flex flex-col">{children}</div>;
}
