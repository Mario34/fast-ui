import { generateGuideGroups } from '../../demo/utils/group';

const routes = [
  {
    name: 'introduce',
    path: '/introduce',
  },
  {
    name: 'install',
    path: '/install',
  },
];

test('generateGuideGroups', () => {
  expect(generateGuideGroups(routes)).toEqual([
    {
      title: '',
      items: [
        {
          name: 'introduce',
          title: 'FAST UI',
        },
        {
          name: 'install',
          title: '快速上手',
        },
      ],
    },
  ]);
});
