import type { ReactElement } from 'react';
import { RoomList } from '@/components/RoomList/RoomList';

export const revalidate = 10;

type SearchPageParams = {
  keyword: string;
};

const Home = async ({ params }: { params: SearchPageParams }): Promise<ReactElement> => {
  const unescapedKeyword = decodeURIComponent(params.keyword);
  return <RoomList keyword={unescapedKeyword} />;
};

export default Home;
