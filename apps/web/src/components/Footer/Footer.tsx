import type { ComponentPropsWithoutRef, FC } from 'react';

type FooterProps = ComponentPropsWithoutRef<'footer'>;

export const Footer: FC<FooterProps> = (props) => (
  <div className="flex justify-center">
    <footer
      className="fixed bottom-3 mx-auto my-0 flex items-center justify-center rounded-full bg-keyplate-3 px-4 py-2 shadow-floating"
      {...props}
    >
      <div className="shrink-0 items-center justify-center">
        <p>
          Made with 💙 by <span className="underline">Karatou</span>
        </p>
      </div>
    </footer>
  </div>
);
