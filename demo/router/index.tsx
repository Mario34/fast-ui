import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import generateGroups from '@/demo/utils/group';
/**
 * 路由加载规则
 * docs/*.md 作为组件的文档 /components
 * docs/guide/*.md 作为指南文档 /guide
 * pages/**.tsx 作为普通页面
*/

/**
 * 按文件夹引入*.md文件，并组装路由
*/
function loadDocs() {
  const guideRoutes: RouteRecordRaw[] = [];
  const componentsRoutes: RouteRecordRaw[] = [];
  const docs = require.context('@/docs/', true, /\.md$/);
  docs.keys().forEach(key => {
    if (key.match(/guide\/.+\.md$/)) {
      const name = (key.match(/(?<=guide\/).*?(?=\.md)/) || [])[0];
      guideRoutes.push({
        name: name,
        path: name,
        component: () => import(`@/docs/${key.slice(2)}`),
      });
    } else {
      const name = (key.match(/(?<=\.\/).*?(?=\.md)/) || [])[0];
      componentsRoutes.push({
        name: name,
        path: name,
        component: () => import(`@/docs/${key.slice(2)}`),
      });
    }
  });
  return {
    guideRoutes,
    componentsRoutes,
  };
}

const { guideRoutes, componentsRoutes } = loadDocs();

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/components',
      component: () => import('@/demo/components/doc-layout'),
      props: {
        navConfig: generateGroups(componentsRoutes),
      },
      children: [
        ...componentsRoutes,
      ],
    },
    {
      path: '/guide',
      component: () => import('@/demo/components/doc-layout'),
      props: {
        navConfig: generateGroups(guideRoutes),
      },
      children: [
        ...guideRoutes,
      ],
    },
  ],
});

export {
  guideRoutes,
  componentsRoutes,
};

export default router;

