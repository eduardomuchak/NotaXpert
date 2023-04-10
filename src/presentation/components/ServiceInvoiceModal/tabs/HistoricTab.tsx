import * as Tabs from '@radix-ui/react-tabs';
import clsx from 'clsx';
import { useState } from 'react';
import { MdOutlineTimeline, MdTableChart } from 'react-icons/md';

export function HistoricTab() {
  const [activeTab, setActiveTab] = useState('timeline');

  const triggerStyle = (tab: string) =>
    clsx('rounded-full transition-all disabled:hover:cursor-not-allowed', {
      'bg-sanofiPurpleDark border-2 border-sanofiPurpleDark text-white hover:bg-sanofiPurple hover:border-sanofiPurple disabled:opacity-80 disabled:hover:bg-sanofiPurpleDark':
        activeTab === tab,
      'text-sanofiPurpleDark border-2 border-sanofiPurpleDark hover:bg-sanofiPurpleDark hover:text-white disabled:bg-sanofiGray disabled:text-sanofiPurpleDark':
        activeTab !== tab,
    });

  return (
    <div className="flex flex-col pr-0 md:pr-8">
      <Tabs.Root
        onValueChange={(value: string) => setActiveTab(value)}
        defaultValue={'timeline'}
      >
        <Tabs.List className="mb-8 flex gap-2 justify-end">
          <Tabs.Trigger className={triggerStyle('timeline')} value="timeline">
            <div className="flex gap-2 px-3 py-1">
              <MdOutlineTimeline
                size={20}
                color={activeTab === 'timeline' ? '#FFFFFF' : '#22004C'}
              />
              <span className=" font-sanofiSansRegular text-base leading-5 text-center flex items-center justify-center ">
                Linha do Tempo
              </span>
            </div>
          </Tabs.Trigger>
          <Tabs.Trigger className={triggerStyle('table')} value="table">
            <div className="flex gap-2 px-3 py-1">
              <MdTableChart
                size={20}
                color={activeTab === 'table' ? '#FFFFFF' : '#22004C'}
              />
              <span className=" font-sanofiSansRegular text-base leading-5 text-center flex items-center justify-center ">
                Tabela
              </span>
            </div>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="timeline">
          <span>Teste 1</span>
        </Tabs.Content>
        <Tabs.Content value="table">
          <span>Teste 2</span>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
