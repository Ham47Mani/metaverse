
// ==================== Start Explore Worlds ====================
export type explorerWorldsType = {
  id: string,
  imgUrl: string,
  title: string
}

export const exploreWorlds : explorerWorldsType[] = [
  {
    id: 'world-1',
    imgUrl: '/imgs/planet/planet-01.png',
    title: 'The Hogwarts',
  },
  {
    id: 'world-2',
    imgUrl: '/imgs/planet/planet-02.png',
    title: 'The Upside Down',
  },
  {
    id: 'world-3',
    imgUrl: '/imgs/planet/planet-03.png',
    title: 'Kadirojo Permai',
  },
  {
    id: 'world-4',
    imgUrl: '/imgs/planet/planet-04.png',
    title: 'Paradise Island',
  },
  {
    id: 'world-5',
    imgUrl: '/imgs/planet/planet-05.png',
    title: 'Hawkins Labs',
  }
]
// ==================== End Explore Worlds ====================

// ==================== Start Starting Features ====================
export const startingFeatures: string[] = [
  'Find a world that suits you and you want to enter',
  'Enter the world by reading basmalah to be safe',
  'No need to beat around the bush, just stay on the gas and have fun',
];

// ==================== Start New Features ====================
export type newFeaturesType = {
  imgUrl: string,
  title: string,
  subtitle: string
}

export const newFeatures = [
  {
    imgUrl: '/imgs/icons/vrpano.svg',
    title: 'A new world',
    subtitle:'we have the latest update with new world for you to try never mind',
  },
  {
    imgUrl: '/imgs/icons/headset.svg',
    title: 'More realistic',
    subtitle:'In the latest update, your eyes are narrow, making the world more realistic than ever',
  },
];
// ==================== End New Features ====================

// ==================== Start Insights ====================
export type inisghtType = newFeaturesType;

export const insights = [
  {
    imgUrl: '/imgs/planet/planet-06.png',
    title: 'The launch of the Metaverse makes Elon musk ketar-ketir',
    subtitle:
        'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
  },
  {
    imgUrl: '/imgs/planet/planet-07.png',
    title: '7 tips to easily master the madness of the Metaverse',
    subtitle:
        'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
  },
  {
    imgUrl: '/imgs/planet/planet-08.png',
    title: 'With one platform you can explore the whole world virtually',
    subtitle:
        'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
  },
];
// ==================== End Insights ====================

// ==================== Start Social ====================
export interface socialType {
  name: string;
  url: string;
}
export const socials: socialType[] = [
  {
    name: 'twitter',
    url: '/imgs/icons/twitter.svg',
  },
  {
    name: 'linkedin',
    url: '/imgs/icons/linkedin.svg',
  },
  {
    name: 'instagram',
    url: '/imgs/icons/instagram.svg',
  },
  {
    name: 'facebook',
    url: '/imgs/icons/facebook.svg',
  },
];
// ==================== End Social ====================