import { defineComponent, createApp, App, PropType, onMounted, onBeforeMount, ref } from 'vue';
import Icon from '@/packages/icon';
import './index.scss';

const Message = defineComponent({
  name: 'fa-message',
  props: {
    rootEl: {
      type: Element as PropType<Element>,
      required: true,
    },
    containerEl: {
      type: Element as PropType<Element>,
      required: true,
    },
    type: {
      type: String,
      default: 'default',
    },
    content: {
      type: String as PropType<string>,
      required: true,
    },
    duration: {
      type: Number,
      default: 3000,
    },
    resolve: {
      type: Function,
      required: false,
    },
    onClose: {
      type: Function,
      required: false,
    },
  },
  setup(props) {
    const { rootEl, containerEl, content, type, duration, resolve, onClose } = props;
    const iconMap: { [key: string]: string } = {
      default: 'info',
      success: 'check',
      warning: 'alert-circle',
      danger: 'x-circle',
      primary: 'info',
      second: 'info',
    };
    const mounted = ref<boolean>(false);
    const timeout = ref();
    const delayClose = () => {
      timeout.value = setTimeout(() => {
        mounted.value = false;
        resolve && resolve();
        onClose && onClose();
        setTimeout(() => {
          containerEl.removeChild(rootEl);
        }, 300);
      }, duration);
    };
    const onMouseenter = () => {
      timeout.value && clearTimeout(timeout.value);
    };
    const onMouseleave = () => {
      delayClose();
    };
    onBeforeMount(() => {
      containerEl.appendChild(rootEl);
    });
    onMounted(() => {
      setTimeout(() => {
        mounted.value = true;
        delayClose();
      }, 0);
    });

    return () => {
      return (
        <span
          class={[
            'fa-message',
            `--${type}`,
            {
              '--before-active': !mounted.value,
            },
          ]}
          onMouseenter={onMouseenter}
          onMouseleave={onMouseleave}
        >
          <Icon.component
            class='fa-message__icon'
            icon={iconMap[type]}
          />
          <span class='fa-message__content'>
            {content}
          </span>
        </span>
      );
    };
  },
});

/**
 * 获取挂载节点
*/
function getMountElm(): HTMLDivElement {
  const tarElm = document.createElement('div');
  tarElm.setAttribute('data-prop', '__fa-message-root__');
  return tarElm;
}

export interface MessageConfig {
  type?: 'primary' | 'second' | 'success' | 'warning' | 'danger';
  content: string;
  /**
   * 持续时间
  */
  duration?: number;
  onClose?: () => void;
}

/**
 * 用于唤起消息的方法
*/
function messageMethod(config: MessageConfig) {
  return new Promise((resolve) => {
    const rootEl = getMountElm();
    createApp(Message, {
      ...config,
      resolve,
      rootEl,
      containerEl: getContainerElm(),
    }).mount(rootEl);
  });
}

/**
 * 以插件方式注入全局方法
*/
function install(app: App) {
  getContainerElm();
  app.config.globalProperties.$message = messageMethod;
}

function getContainerElm(): Element {
  let container = document.getElementById('__fa-message-container__');
  if (!container) {
    const elm = document.createElement('div');
    elm.setAttribute('id', '__fa-message-container__');
    container = elm;
    document.querySelector('body')?.appendChild(elm);
  }
  return container;
}

export const message = messageMethod;

export default {
  name: Message.name,
  plugin: { install },
};
