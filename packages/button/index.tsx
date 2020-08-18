import { defineComponent } from 'vue';
import './index.scss';

export interface ButtonProps extends CustomEleProps {
  disabled?: boolean,
  loading?: boolean,
  type?: 'default' | 'primary' | 'second' | 'success' | 'danger' | 'warning' | 'text',
  plain?: boolean,
  round?: boolean,
  circle?: boolean,
  size?: 'small' | 'medium' | 'large',
  icon?: string
}

const Button = defineComponent({
  inheritAttrs: false,
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'default',
    },
    className: {
      type: String,
      default: '',
    },
    style: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'medium',
    },
    icon: {
      type: String,
      default: '',
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    const {
      slots: {
        default: _default,
      },
      attrs,
    } = ctx;
    const {
      loading,
      disabled,
      style,
      type,
      size,
      plain,
      round,
      icon,
      circle,
    } = props as ButtonProps;

    return () => (
      <button
        {...attrs}
        class={{
          'fa-button': true,
          [`--${type}`]: true,
          [`--${size}`]: true,
          [`--plain`]: plain,
          [`--round`]: round,
          [`--circle`]: circle,
          [`--disabled`]: disabled,
          [`--loading`]: loading,
        }}
        disabled={disabled}
        style={style}
      >
        {loading && <i class='fa-button__loading' />}
        {icon && <i class={icon} />}
        <span> {_default && _default()} </span>
      </button>
    );
  },
});

export default {
  name: 'button',
  component: Button,
};
