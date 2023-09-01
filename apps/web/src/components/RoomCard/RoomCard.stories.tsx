import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { RoomCard } from './RoomCard';
import type { Room } from '@/models/room';

const exampleRoom: Room = {
  id: 28450,
  uid: '9dPI7ngGy8UOTI8d',
  spaceUsername: 'ALAMODETHEPALAIS',
  name: 'ア・ラ・モードパレ&ザ・リゾート「メゾン・グラース」　／　A LA MODE PALAIS＆THE RESORT　神戸',
  rentalReputationCount: 0,
  rentalReputationScore: 0,
  prices: [
    {
      minText: '¥50,000',
      maxText: '',
    },
  ],
  thumbnails: [
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/138153/image.jpg',
      description: '華やかな装飾がいっぱいあリます Lorem Ipsum ado ああああああああああああああああ',
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/138154/image.jpg',
      description: null,
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/138155/image.jpg',
      description: null,
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/138156/image.jpg',
      description: null,
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/138157/image.jpg',
      description: null,
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/138158/image.jpg',
      description: null,
    },
  ],
  spaceTypeText: '結婚式場',
  access: 'アイランドセンター駅下車徒歩2分(リバーモール沿い) ',
  area: 150,
  capacity: 100,
  stateText: '兵庫県',
  city: '東灘区',
  latitude: 34.6868949,
  longitude: 135.26923020000004,
};

const exampleRoom2: Room = {
  id: 35967,
  uid: 'tCHh9lOEITCn41l9',
  spaceUsername: 'sessionskobe',
  name: '<<SESSIONS 03>>築50年のビルをリノベーション。目の前を電車が通るロケーション自然光が多く入り撮影にも最適！',
  rentalReputationCount: 43,
  rentalReputationScore: 4.769999980926514,
  prices: [
    {
      minText: '¥2,000',
      maxText: '',
    },
  ],
  thumbnails: [
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/443127/image.jpg',
      description: '北向きの全面窓から入る自然光が人気です。',
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/265687/image.jpg',
      description: '約20坪のスペースに、置いてある什器や備品はご自由にご利用ください。',
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/369702/image.jpg',
      description: 'ギャラリー１Ｆ入口',
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/354699/image.jpg',
      description: '屋上の目の前を電車が通ります',
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/354701/image.jpg',
      description: '備え付けの全身鏡１台あり',
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/354700/image.jpg',
      description: 'トイレ、水周り',
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/294896/image.jpg',
      description: '備品はご自由にお使いください。\n簡易椅子　×１０脚',
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/324676/image.jpg',
      description: '移動式のアンティークドア',
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/324677/image.jpg',
      description: '組み立て式4段棚　',
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/324678/image.jpg',
      description: '組み立て式4段棚',
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/324679/image.jpg',
      description: '長机×２',
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/324680/image.jpg',
      description: '長机×２',
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/324681/image.jpg',
      description: 'アンティークラック　×１',
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/324682/image.jpg',
      description: 'シングルバー　×３',
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/324683/image.jpg',
      description: 'チャーチチェア　４連',
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/324684/image.jpg',
      description: '作業台　×１',
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/324685/image.jpg',
      description: 'アンティークソファー　×１',
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/324686/image.jpg',
      description: 'アンティーク台　×１',
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/324687/image.jpg',
      description: '水まわり',
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/264416/image.jpg',
      description: 'ワークショップの様子',
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/264419/image.jpg',
      description: '外観',
    },
    {
      url: 'https://spacemarket-sandbox.global.ssl.fastly.net/uploads/attachments/264418/image.jpg',
      description: '屋上の様子',
    },
  ],
  spaceTypeText: 'イベントスペース',
  access:
    'JR元町駅　徒歩５分\r\n神戸市営地下鉄海岸線　みなともとまち駅　徒歩３分\r\n神戸市営地下鉄山手線　県庁前駅　徒歩５分\r\n阪急電鉄　花隈駅　徒歩２分',
  area: 60,
  capacity: 20,
  stateText: '兵庫県',
  city: '神戸市中央区',
  latitude: 34.6874554,
  longitude: 135.1837151,
};

type Story = StoryObj<typeof RoomCard>;

const meta = {
  component: RoomCard,
  args: {
    uid: exampleRoom.uid,
    name: exampleRoom.name,
    prices: exampleRoom.prices,
    thumbnails: exampleRoom.thumbnails,
    access: exampleRoom.access,
    capacity: exampleRoom.capacity,
    spaceTypeText: exampleRoom.spaceTypeText,
    spaceUsername: exampleRoom.spaceUsername,
    onEvaluate: action('onEvaluate'),
    className: 'max-w-sm',
  },
  argTypes: {},
} satisfies Meta<typeof RoomCard>;

export default meta;

export const Default: Story = {};

export const AnotherExample: Story = {
  args: {
    uid: exampleRoom2.uid,
    name: exampleRoom2.name,
    prices: exampleRoom2.prices,
    thumbnails: exampleRoom2.thumbnails,
    access: exampleRoom2.access,
    capacity: exampleRoom2.capacity,
    spaceTypeText: exampleRoom2.spaceTypeText,
    spaceUsername: exampleRoom2.spaceUsername,
  },
};
