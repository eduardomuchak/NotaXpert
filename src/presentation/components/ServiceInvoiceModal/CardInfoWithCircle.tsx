// import { ArcherContainer, ArcherElement } from 'react-archer';
import Image from 'next/image';
import * as Separator from '@radix-ui/react-separator';
import clsx from 'clsx';

import CardCircle from 'assets/images/card-circle.svg';

import { CardInfo } from './CardInfo';

export function CardInfoWithCircle() {
  const cards = [
    {
      id: 1,
      title: 'Card 1',
    },
    {
      id: 1,
      title: 'Card 1',
    },
  ];

  return (
    <>
      {cards.map((card, index) => (
        <div className="flex w-full" key={card.id}>
          <div className="flex flex-col items-center justify-center">
            <Separator.Root
              className={clsx(
                'data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[1px] mr-4',
                {
                  'bg-black': index !== 0,
                  'bg-transparent': index === 0,
                },
              )}
              orientation="vertical"
            />
            {cards.length !== 1 ? (
              <Image src={CardCircle} alt="Card Circle" />
            ) : null}
            <Separator.Root
              className={clsx(
                'data-[orientation=vertical]:h-10 data-[orientation=vertical]:w-[1px] mr-4',
                {
                  'bg-black': index !== cards.length - 1,
                },
              )}
              orientation="vertical"
            />
            <Separator.Root
              className={clsx(
                'data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[1px] mr-4',
                {
                  'bg-black': index !== cards.length - 1,
                },
              )}
              orientation="vertical"
            />
          </div>
          <div />
          <div
            className={clsx('w-full', {
              'mb-10': index !== cards.length - 1,
            })}
          >
            <CardInfo />
          </div>
        </div>
      ))}
    </>
  );
}
