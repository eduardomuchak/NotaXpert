import { AiFillPrinter, AiOutlinePlusCircle } from 'react-icons/ai';
import { MdSearch } from 'react-icons/md';

import { Button } from 'presentation/components/Button';
import { PageContainer } from 'presentation/components/ui/PageUi/PageContainer';
import { PageTitle } from 'presentation/components/ui/PageUi/PageTitle';
import { Input } from 'presentation/components/Input';
import { CheckboxDropdown } from 'presentation/components/CheckboxDropdown';

export function ConfigurationUi() {
  const userRoles = [
    { value: '1', label: 'Administrador' },
    { value: '2', label: 'Operador' },
  ];

  const userTeams = [
    { value: '1', label: 'BR-001' },
    { value: '2', label: 'BR-002' },
    { value: '3', label: 'BR-003' },
    { value: '4', label: 'BR-004' },
  ];

  return (
    <PageContainer>
      <PageTitle>Configurações</PageTitle>
      <div className="mt-8">
        <Button
          variant="primary"
          icon={<AiOutlinePlusCircle size={32} color={'#FFF'} />}
        >
          <span className="text-2xl">Cadastrar Usuário</span>
        </Button>
      </div>
      <div className="flex flex-row items-center justify-between mt-8">
        <div className="flex gap-4 w-full">
          <div className="w-full max-w-[215px]">
            <Input
              label="Nome"
              id="name"
              value=""
              icon={<MdSearch size={24} color={'#808080'} />}
            />
          </div>
          <div className="w-full max-w-[200px]">
            <CheckboxDropdown
              id="userRole"
              label="Cargo do Usuário"
              options={userRoles}
            />
          </div>
          <div className="w-full max-w-[150px]">
            <CheckboxDropdown id="userTeam" label="Time" options={userTeams} />
          </div>
        </div>
        <Button variant="secondary" icon={<AiFillPrinter size={24} />}>
          <span className="text-xl leading-6 font-sanofiSansRegular">
            Exportar
          </span>
        </Button>
      </div>
      <div className="bg-sanofiGray p-4 rounded-2xl md:p-8 grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-8 mt-8">
        <span className="font-sanofiSansBold text-base leading-5">Usuário</span>
        <span className="font-sanofiSansBold text-base leading-5">Contato</span>
      </div>
    </PageContainer>
  );
}
