import type { FC } from 'react';

const Home: FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-keyplate-12">
      <article className="flex max-w-2xl flex-col gap-4 p-6">
        <h1 className="my-6 text-5xl font-bold text-keyplate-12">ACMEへようこそ！</h1>
        <section>
          <p>
            株式会社SPACEMARKETの25卒向けサマーインターンで作成している検索キーワードマッチング検証用のWebアプリです。
          </p>
          <p>
            スマートフォンから操作できること 1検索条件1スペースの単位で定性評価できること
            検索キーワードに対して、スペースマーケットのapiから取得されたスペースが表示されていること
            表示されるスペースは1view 1スペース単位で表示されること
            UI操作は右スワイプ（マッチ）と左スワイプ（不適合）のみで完結すること
            マッチング結果は何かしらの方法でデータ永続化と保存がされていること
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p>
            そこでは、あらゆる事が可能である。人は一瞬にして氷雲の上に飛躍し大循環の風を従へて北に旅する事もあれば、赤い花杯の下を行く蟻と語ることもできる。
            罪や、かなしみでさへそこでは聖くきれいにかゞやいてゐる。
          </p>
        </section>
      </article>
    </div>
  );
};

export default Home;
