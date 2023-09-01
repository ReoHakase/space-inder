import type { ComponentPropsWithoutRef, FC } from 'react';
import { useCallback } from 'react';
import { Image } from '@/components/Image/Image';
import type { Room } from '@/models/room';
import { cn } from '@/utils/cn';

const generateRoomLink = ({ uid, spaceUsername }: Pick<Room, 'uid' | 'spaceUsername'>) =>
  new URL(`/spaces/${spaceUsername}/rooms/${uid}/`, 'https://www.spacemarket.com/');

export type EvaluateHandler = ({
  uid,
  spaceUsername,
  type,
}: Pick<Room, 'uid' | 'spaceUsername'> & { type: 'match' | 'unmatch' }) => void | Promise<void>;

export type SpaceCardProps = ComponentPropsWithoutRef<'div'> &
  Pick<Room, 'name' | 'prices' | 'thumbnails' | 'access' | 'capacity' | 'spaceTypeText' | 'uid' | 'spaceUsername'> & {
    onEvaluate: EvaluateHandler;
  };

export const RoomCard: FC<SpaceCardProps> = ({
  name,
  prices,
  thumbnails,
  access,
  capacity,
  spaceTypeText,
  uid,
  spaceUsername,
  className,
  onEvaluate = () => {},
  children,
  ...props
}) => {
  const onMatchHandler = useCallback(() => {
    onEvaluate({ uid, spaceUsername, type: 'match' });
  }, [onEvaluate, uid, spaceUsername]);

  const onUnmatchHandler = useCallback(() => {
    onEvaluate({ uid, spaceUsername, type: 'unmatch' });
  }, [onEvaluate, uid, spaceUsername]);

  const firstThumbnail = thumbnails[0];
  const subThumbnails = thumbnails.slice(1, 1 + 4); // 2番目から5番目までのサムネイルを取得する
  const roomLink = generateRoomLink({ uid, spaceUsername });
  return (
    <div
      className={cn(
        'bg-keyplate-1 p-6 gap-3 flex flex-col justify-start items-stretch rounded-2xl shadow-floating w-full',
        className,
      )}
      {...props}
    >
      <div className="flex flex-col items-stretch justify-start gap-3">
        <figure className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={firstThumbnail.url}
            alt={firstThumbnail.description || `部屋 ${name} のサムネイル`}
            sizes={{
              default: '100vw',
              tablet: '50vw',
              desktop: '30vw',
            }}
            fill
            className="bg-keyplate-3 object-cover"
          />
          <figcaption className="absolute bottom-0 flex w-full flex-col items-center p-2">
            <span className="max-w-full truncate rounded-lg bg-keyplate-1/75 p-2 text-xs backdrop-blur-md">
              {firstThumbnail.description}
            </span>
          </figcaption>
        </figure>
        <div className="flex h-12 flex-row items-stretch justify-start gap-3">
          {subThumbnails.map((thumbnail) => (
            <figure key={thumbnail.url} className="relative aspect-video h-full overflow-hidden rounded-lg">
              <Image
                src={thumbnail.url}
                alt={thumbnail.description || `部屋 ${name} のサムネイル`}
                sizes={{
                  default: '20vw',
                  tablet: '10vw',
                  desktop: '10vw',
                }}
                fill
                className="bg-keyplate-3 object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
      <p className="w-full text-lg font-bold">{name}</p>
      <p className="text-xs font-bold">{`${prices[0].minText} 〜 ${prices[0].maxText}`}</p>
      <p className="w-full text-xs text-keyplate-11">{`🚉 ${access} ・ 👫 ${capacity}人収容・🏡 ${spaceTypeText}`}</p>
      <hr className="h-[2px] rounded-full text-keyplate-4" />
      <div className="flex flex-row items-center justify-center gap-2">
        <button
          type="button"
          aria-label="不適合として評価"
          className="flex aspect-square h-full shrink-0 grow-0 flex-row items-center justify-center rounded-full bg-pink-light-3 p-2 text-xs text-pink-light-11 duration-100 hover:scale-125"
          onClick={onUnmatchHandler}
        >
          👎
        </button>
        <a
          target="_blank"
          href={roomLink.href}
          className="flex grow flex-row items-center justify-center gap-1 self-end overflow-hidden text-ellipsis rounded-full bg-keyplate-3 p-2 text-right text-xs text-keyplate-11 no-underline duration-100 hover:scale-105"
          rel="noreferrer"
        >
          ⛓️ spacemarket.com で開く
        </a>
        <button
          type="button"
          aria-label="適合として評価"
          className="flex aspect-square h-full shrink-0 grow-0 flex-row items-center justify-center rounded-full bg-lime-light-3 p-2 text-xs text-lime-light-11 duration-100 hover:scale-125"
          onClick={onMatchHandler}
        >
          👍
        </button>
      </div>
    </div>
  );
};
