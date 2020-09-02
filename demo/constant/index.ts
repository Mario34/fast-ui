export interface GroupRule {
  groups: string;
  title: string;
  items: string[][];
}

export const COMPONENTS_GROUP: GroupRule[] = [
  {
    groups: 'basic',
    title: '基础组件',
    items: [
      ['layout', '布局'],
      ['icon', '图标'],
      ['button', '按钮'],
      ['tag', '标签'],
    ],
  },
  {
    groups: 'form',
    title: '表单数据',
    items: [
      ['input', '输入框'],
      ['check-box', '多选框*'],
    ],
  },
  {
    groups: '',
    title: '交互',
    items: [
      ['message', '消息'],
      ['notice', '通知*'],
      ['modal', '模态框*'],
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
