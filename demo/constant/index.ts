export interface GroupRule {
  groups: string,
  title: string,
  items: string[][]
}

export const COMPONENTS_GROUP: GroupRule[] = [
  {
    groups: 'basic',
    title: '基础组件',
    items: [
      ['button', '按钮'],
      ['layout', '布局'],
    ],
  },
];

export const GUIDE_GROUP: GroupRule[] = [
  {
    groups: 'guide',
    title: '',
    items: [
      ['introduce', 'FAST UI'],
      ['install', '快速上手'],
    ],
  },
];
