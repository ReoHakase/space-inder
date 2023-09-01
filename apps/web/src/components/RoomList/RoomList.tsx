'use client';

import type { FC } from 'react';
import { useCallback } from 'react';
import { RoomCard } from '@/components/RoomCard/RoomCard';
import type { EvaluateHandler } from '@/components/RoomCard/RoomCard';
import type { Room } from '@/models/room';

const exampleRoom: Room = {
  id: 28450,
  uid: '9dPI7ngGy8UOTI8d',
  spaceUsername: 'ALAMODETHEPALAIS',
  name: 'ア・ラ・モードパレ&ザ・リゾート「メゾン・グラース」　／　A LA MODE PALAIS＆THE RESORT　神戸',
  rentalReputationCount: 0,
  rentalReputationScore: 0,
  prices: [
    {
      minText: '¥50,000',
      maxText: '',
    },
  ],
  thumbnails: [
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/138153/image.jpg',
      description: '華やかな装飾がいっぱいあリます Lorem Ipsum ado ああああああああああああああああ',
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/138154/image.jpg',
      description: null,
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/138155/image.jpg',
      description: null,
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/138156/image.jpg',
      description: null,
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/138157/image.jpg',
      description: null,
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/138158/image.jpg',
      description: null,
    },
  ],
  spaceTypeText: '結婚式場',
  access: 'アイランドセンター駅下車徒歩2分(リバーモール沿い) ',
  area: 150,
  capacity: 100,
  stateText: '兵庫県',
  city: '東灘区',
  latitude: 34.6868949,
  longitude: 135.26923020000004,
};

export type RoomListProps = {
  keyword: string;
};

export const RoomList: FC<RoomListProps> = ({ keyword }) => {
  const onEvaluateHandler: EvaluateHandler = useCallback(
    ({ uid, spaceUsername, type }) => {
      console.log('評価がなされました', { keyword, uid, spaceUsername, type });
    },
    [keyword],
  );

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 text-keyplate-12">
      <article className="flex w-full max-w-2xl flex-col gap-4 p-6">
        <h1 className="my-6 text-center text-3xl font-bold text-keyplate-12">“{keyword}”の検索結果</h1>
        <p className="text-center">
          マッチしたら右にスワイプ👉
          <br />
          👈マッチしなかったら左にスワイプ
        </p>
        <RoomCard
          {...{
            uid: exampleRoom.uid,
            name: exampleRoom.name,
            prices: exampleRoom.prices,
            thumbnails: exampleRoom.thumbnails,
            access: exampleRoom.access,
            capacity: exampleRoom.capacity,
            spaceTypeText: exampleRoom.spaceTypeText,
            spaceUsername: exampleRoom.spaceUsername,
          }}
          onEvaluate={onEvaluateHandler}
          className="max-w-full"
        />
        <RoomCard
          {...{
            uid: 'uidexamplexxx2',
            name: '綺麗な結婚式場その2',
            prices: exampleRoom.prices,
            thumbnails: exampleRoom.thumbnails,
            access: exampleRoom.access,
            capacity: exampleRoom.capacity,
            spaceTypeText: exampleRoom.spaceTypeText,
            spaceUsername: exampleRoom.spaceUsername,
          }}
          onEvaluate={onEvaluateHandler}
          className="max-w-full"
        />
      </article>
    </div>
  );
};
