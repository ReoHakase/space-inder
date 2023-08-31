import type { ComponentPropsWithoutRef, FC } from 'react';
import { Image } from '@/components/Image/Image';
import { Link } from '@/components/Link/Link';
import GreenLogoImage from '@public/spacemarket.png';

export type HeaderProps = ComponentPropsWithoutRef<'header'>;

export const Header: FC<HeaderProps> = ({ children, ...props }) => (
  <header
    className="sticky top-0 z-30 flex h-[64px] w-full shrink-0 grow items-center justify-center gap-3 space-x-3 bg-keyplate-1 px-6 py-3 font-bold text-keyplate-12"
    {...props}
  >
    <nav
      aria-label="グローバルナビゲーション"
      className="flex w-full max-w-md flex-row flex-nowrap items-center justify-center gap-6"
    >
      <Link href="/" className=" inline-flex shrink-0 items-center duration-100 hover:scale-110 hover:shadow">
        <Image
          src={GreenLogoImage}
          alt="ACMEのロゴ"
          sizes={{
            default: '10vw',
            tablet: '8vw',
            desktop: '10vw',
          }}
          placeholder="blur"
          className="h-[45.493px] w-[47px] shrink-0 dark:hidden"
        />
      </Link>

      <div className="grow">
        <input
          type="text"
          placeholder="🔍キーワードを入力..."
          className="w-full grow rounded-md px-4 py-2 text-black placeholder:text-gray-light-10 focus:outline-none"
          style={{
            borderRadius: '9999px',
            height: 'auto',
            background: '#F1F3F5',
          }}
        />
      </div>
      <div className="">
        <button
          type="button"
          className="flex shrink-0 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-white shadow-sm"
          style={{
            boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.05)',
            borderRadius: '9999px',
            background: '#05A2C2',
            width: 'auto',
            height: 'auto',
          }}
        >
          検索
        </button>
      </div>
    </nav>
  </header>
);

/*
      <Link href="/" className=" inline-flex shrink-0 items-center duration-100 hover:scale-110 hover:shadow">
        <Image
          src={LightLogoImage}
          alt="ACMEのロゴ"
          sizes={{
            default: '20vw',
            tablet: '15vw',
            desktop: '10vw',
          }}
          placeholder="blur"
          className="w-[50px] dark:hidden"
        />
        <Image
          src={DarkLogoImage}
          alt="ACMEのロゴ"
          sizes={{
            default: '20vw',
            tablet: '15vw',
            desktop: '10vw',
          }}
          placeholder="blur"
          className="hidden w-[50px] dark:block"
        />
      </Link>
      <ul className="flex shrink grow flex-row items-center justify-between truncate">
        <li className="inline-flex shrink truncate">
          <Link
            title="記事を見る"
            href="/"
            className="tablet:px-4 truncate rounded-full px-1.5 py-2 no-underline hover:bg-primary-3 hover:text-primary-11"
          >
            私たちについて
          </Link>
        </li>
        <li className="inline-flex shrink truncate">
          <Link
            title="タグを見る"
            href="/"
            className="tablet:px-4 truncate rounded-full px-1.5 py-2 no-underline hover:bg-primary-3 hover:text-primary-11"
          >
            規約
          </Link>
        </li>
        <li className="inline-flex shrink truncate">
          <Link
            title="メンバ紹介"
            href="/"
            className="tablet:px-4 truncate rounded-full px-1.5 py-2 no-underline hover:bg-primary-3 hover:text-primary-11"
          >
            使い方
          </Link>
        </li>
      </ul>

*/
