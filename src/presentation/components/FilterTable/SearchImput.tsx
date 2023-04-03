import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export function SearchImput() {
    return (
      <form>
        <div className='items-center flex flex-row min-w-fit border-2 rounded-full border-sanofiPurpleDark border-solid gap-2 px-3 py-1 text-gray-500'>
          <input className='text-xs font-bold font-sanofiSansRegular w-full' type="text" placeholder="Buscar"></input>
          <MagnifyingGlassIcon />
        </div>
      </form>
    );
  }