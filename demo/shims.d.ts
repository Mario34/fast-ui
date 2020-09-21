declare module '*.vue' {
  import { defineComponent } from 'vue';
  const component: ReturnType<typeof defineComponent>;
  export default component;
}

declare module 'slash2';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.md';
declare module '*.json';
declare module '*.woff';
declare module '*.ttf';

declare interface CustomEleProps {
  style: {
    [key: string]: string;
  } | string;
  className: string;
}

declare interface W {
  style: {
    [key: string]: string;
  } | string;
  className: string;
}

interface Window {
  hljs: {
    highlightBlock: () => void;
  };
}
