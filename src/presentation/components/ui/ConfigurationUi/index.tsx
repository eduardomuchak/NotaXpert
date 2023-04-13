import { AiOutlinePlusCircle } from 'react-icons/ai';
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
      <div className="flex gap-4">
        <Input
          label="Nome"
          id="name"
          value=""
          icon={<MdSearch size={24} color={'#808080'} />}
        />
        <CheckboxDropdown
          id="userRole"
          label="Cargo do Usuário"
          options={userRoles}
        />
        <CheckboxDropdown id="userTeam" label="Time" options={userTeams} />
      </div>
    </PageContainer>
  );
}
