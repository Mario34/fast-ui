import { createApp } from 'vue';
import AppContainer from './app';
import router from './router';
import DemoContainer from './components/demo-container';
import AllIcon from './components/all-icon';
import '@/demo/styles/index.scss';
import '@/packages/styles/index.scss';
import 'normalize.css';

const app = createApp(AppContainer);

const demoStyles = require.context('@/demo/styles/demo/', true, /\.scss$/);
demoStyles.keys().forEach(key => {
  require(`@/demo/styles/demo/${key.slice(2)}`);
});

/**
 * 全局注册组件
 * 目录格式 packages/components/index.tsx
*/
const components = require.context('@/packages/', true, /index\.tsx$/);
components.keys().forEach(key => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { name, component, plugin } = require(`@/packages/${key.slice(2)}`).default;
  if (component) {
    app.component(name, component);
  }
  if (plugin) {
    app.use(plugin);
  }
});
app.component('demo-container', DemoContainer);
app.component('all-icon', AllIcon);

app.use(router);
router.isReady().then(() => app.mount('#app'));
