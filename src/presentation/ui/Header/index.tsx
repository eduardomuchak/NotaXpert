import { Fragment } from 'react';
import { FaBell } from 'react-icons/fa';
import { BsList } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { Popover, Transition } from '@headlessui/react';

import sanofiLogoLight from 'assets/images/sanofi-logo-light.svg';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  const pages = [
    {
      name: 'Board',
      path: '/',
    },
    {
      name: 'Estatísticas',
      path: '/estatisticas',
    },
    {
      name: 'Upload de Backlog',
      path: '/upload',
    },
    {
      name: 'Configurações',
      path: '/configuracoes',
    },
  ];

  return (
    <Popover className="relative bg-sanofiPurpleDark p-8">
      <div className="flex items-center gap-[42px] flex-1 justify-between">
        <div className="flex justify-start">
          <Link href="/">
            <Image src={sanofiLogoLight} alt="Sanofi logo" className="w-20" />
          </Link>
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="border border-violet-500 font-semibold rounded-lg p-2 flex items-center hover:bg-violet-600 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background">
            <BsList className="h-6 w-6" aria-hidden="true" color="white" />
          </Popover.Button>
        </div>
        <nav className="hidden gap-[42px] md:flex text-white items-start">
          {pages.map((page, index) => (
            <Link
              key={`${index}${page.path}`}
              href={page.path}
              className="text-2xl font-sanofiSansRegular hover:text-gray-300 transition-colors"
            >
              {page.name}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center cursor-pointer hover:brightness-90 transition-all">
            <div className="relative">
              <FaBell color={'#22004C'} size={24} />
              <div className="absolute bg-secondaryPink w-3 h-3 rounded-full top-0 right-0" />
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden bg-sanofiPurpleDark"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-background shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    src={sanofiLogoLight}
                    alt="Sanofi logo"
                    className="w-20"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-lg bg-violet-500 p-2 text-gray-300 hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-600">
                    <AiOutlineClose
                      className="h-6 w-6"
                      aria-hidden="true"
                      color={'white'}
                    />
                  </Popover.Button>
                </div>
              </div>
              <nav className="flex flex-col items-end gap-y-8 mt-6 mr-4 text-white">
                {pages.map((page, index) => (
                  <Link
                    key={`${index}${page.path}`}
                    href={page.path}
                    className="text-2xl font-sanofiSansRegular hover:text-gray-300 transition-colors"
                  >
                    {page.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
