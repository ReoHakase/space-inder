'use client';
import { useRouter } from 'next/navigation';
import { ComponentPropsWithoutRef, FC, useRef } from 'react';
import { Image } from '@/components/Image/Image';
import { Link } from '@/components/Link/Link';
import GreenLogoImage from '@public/spacemarket.png';

export type HeaderProps = ComponentPropsWithoutRef<'header'>;

export const Header: FC<HeaderProps> = ({ children, ...props }) => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const hundleOnClick = () => {
    const currentValue = inputRef.current?.value ?? '';
    router.push(`/search/${currentValue}`);
  };
  return (
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
            alt="ロゴ"
            sizes={{
              default: '10vw',
              tablet: '8vw',
              desktop: '10vw',
            }}
            placeholder="blur"
            className="h-[45.493px] w-[47px] shrink-0"
          />
        </Link>

        <div className="grow">
          <input
            ref={inputRef}
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
            onClick={hundleOnClick}
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
};
