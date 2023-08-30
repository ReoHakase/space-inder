# 🏡 space-inder

A monorepo starter that includes Next 13 app

株式会社SPACEMARKETの25卒向けサマーインターンで作成している検索キーワードマッチング検証用のWebアプリです。

![Frame 2](https://github.com/ReoHakase/space-inder/assets/16751535/ec4d1314-0059-4a35-89b8-786cfaaeab53)

> 今回作っていただきたいプロダクトは、特定キーワードを検索条件として表示されたスペースが、キーワードにマッチしているか判断できるアプリケーション、「検索キーワードマッチング検証アプリ」です。
> 判断結果はいずれかの場所に保存され、結果からマッチング率分析ができる形式が望ましいです。

- スマートフォンから操作できること
- 1検索条件1スペースの単位で定性評価できること
- 検索キーワードに対して、スペースマーケットのapiから取得されたスペースが表示されていること
- 表示されるスペースは1view 1スペース単位で表示されること
- UI操作は右スワイプ（マッチ）と左スワイプ（不適合）のみで完結すること
- マッチング結果は何かしらの方法でデータ永続化と保存がされていること

# Turborepo starter

This is an official pnpm starter turborepo.

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
pnpm dlx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
pnpm dlx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
