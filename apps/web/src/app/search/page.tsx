import type { ReactElement } from 'react';
import { RoomList } from '@/components/RoomList/RoomList';

const Home = async (): Promise<ReactElement> => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-keyplate-12">
      <RoomList keyword="くつろげる部屋" />
    </div>
  );
};

export default Home;
