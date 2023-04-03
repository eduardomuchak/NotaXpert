import { Agents } from './Agents';
import { DropdownButton } from './DropdownButton';
import { Period } from './Period';
import { SearchImput } from './SearchImput';
import { SLA } from './SLA';
import { Types } from './Types';
import { ButtonFilter } from './ButtonFilter';

export default function FilterTable() {
  return (
    <div className='flex flex-row gap-3 w-full pb-2 max-h-[40px]'>
      <SearchImput />
      <DropdownButton props={{label:'Tipo de doc', content:<Types />}} />
      <DropdownButton props={{label:'Agentes', content:<Agents />}} />
      <DropdownButton props={{label:'SLA', content:<SLA />}} />
      <DropdownButton props={{label:'Vencido a', content:<Period />}} />
      <ButtonFilter props={{label:"Ordenar"}} />
    </div>
  );
}