import type { FC } from 'react';

const Home: FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-keyplate-12">
      <article className="flex max-w-2xl flex-col gap-4 p-6">
        <section>
          <p className="w-full shrink-0 text-2xl font-bold text-center">
            マッチング率を判断したい<br></br> キーワードを入力してください。
          </p>
        </section>
      </article>
    </div>
  );
};

export default Home;
