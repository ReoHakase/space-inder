'use client';

import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { searchQueryFn } from './fetcher';
import { RoomCard } from '@/components/RoomCard/RoomCard';
import type { EvaluateHandler } from '@/components/RoomCard/RoomCard';

export type RoomListProps = {
  keyword: string;
};

export const RoomList: FC<RoomListProps> = ({ keyword }) => {
  const [page, setPage] = useState(1);
  const queryResult = useQuery({
    queryKey: ['search', keyword, page],
    queryFn: async () => {
      const result = searchQueryFn({ keyword, page, limit: 10 });
      return result;
    },
    suspense: true,
  });

  useEffect(() => {
    console.log('検索クエリ結果: ', queryResult);
  }, [queryResult]);

  const onEvaluateHandler: EvaluateHandler = useCallback(
    async ({ uid, spaceUsername, type }) => {
      console.log('評価がなされました', { keyword, uid, spaceUsername, type });
      const postData = {
        isMatch: type.toUpperCase(),
        keyword: keyword,
        spaceUid: uid,
      };
      //エンドポイントにデータ送信
      const response = await fetch(`/api/submit`, {
        method: 'POST',
        body: JSON.stringify(postData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
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
        <p className="flex grow flex-row items-center justify-center gap-1 overflow-hidden text-ellipsis rounded-full bg-keyplate-3 p-2 text-right text-xs text-keyplate-11 no-underline duration-100">
          📄 {queryResult.data?.data.pageInfo.totalCount} 件の結果が見つかりました{' '}
        </p>
        <motion.div
          layout
          transition={{ type: 'spring', stiffness: 600, damping: 30 }}
          className="flex w-full flex-col gap-4"
        >
          {queryResult.data?.data.results.map((room) => (
            <RoomCard
              key={room.uid}
              {...{
                uid: room.uid,
                name: room.name,
                prices: room.prices,
                thumbnails: room.thumbnails,
                access: room.access,
                capacity: room.capacity,
                spaceTypeText: room.spaceTypeText,
                spaceUsername: room.spaceUsername,
              }}
              onEvaluate={onEvaluateHandler}
              className="max-w-full"
            />
          ))}
        </motion.div>

        <p className="flex grow flex-row items-center justify-center gap-1 overflow-hidden text-ellipsis rounded-full bg-keyplate-3 p-2 text-right text-xs text-keyplate-11 no-underline duration-100">
          📄 {queryResult.data?.data.pageInfo.totalPages} ページ中 {page} ページ目を表示中
        </p>
        <button
          type="button"
          className="flex grow flex-row items-center justify-center gap-1 self-center overflow-hidden text-ellipsis rounded-full border border-cyan-light-9 bg-cyan-light-3 p-2 text-right text-xs font-bold text-cyan-light-11 no-underline shadow-card duration-100 hover:scale-105"
          onClick={() => setPage((prev) => prev + 1)}
        >
          もっとみる
        </button>
      </article>
    </div>
  );
};
