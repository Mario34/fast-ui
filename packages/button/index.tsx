import { defineComponent } from 'vue';
import './index.scss';

export interface ButtonProps extends CustomEleProps {
  disabled?: boolean,
  loading?: boolean,
  type?: 'default' | 'primary' | 'second' | 'success' | 'danger' | 'warning',
}

const Button = defineComponent({
  inheritAttrs: false,
  props: [
    'disabled',
    'loading',
    'type',
    'className',
    'style',
  ],
  setup(props, ctx) {
    const {
      slots: {
        default: _default,
      },
    } = ctx;
    const {
      loading,
      disabled,
      className,
      style,
      type = 'default',
    } = props as ButtonProps;

    const onClick = (e: Event) => {
      ctx.emit('click', e);
    };

    return () => (
      <button
        class={{
          'fa-button': true,
          [`fa-button--${type}`]: true,
          [className]: true,
        }}
        style={style}
        onClick={onClick}
      >
        {_default && _default()}
      </button>
    );
  },
});

export default {
  name: 'button',
  component: Button,
};
