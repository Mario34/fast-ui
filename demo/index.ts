import { createApp } from 'vue';
import AppContainer from './app';
import router from './router';
import DemoContainer from './components/demo-container';
import '@/demo/styles/index.scss';
import 'normalize.css';

const app = createApp(AppContainer);

/**
 * 全局注册组件
 * 目录格式 packages/components/index.tsx
*/
const components = require.context('@/packages/', true, /index\.tsx$/);
components.keys().forEach(key => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const module = require(`@/packages/${key.slice(2)}`).default;
  if (module.name) {
    app.component('fa-' + module.name, module.component);
  }
});
app.component('demo-container', DemoContainer);

app.use(router);
router.isReady().then(() => app.mount('#app'));
