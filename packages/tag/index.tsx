import { defineComponent, toRefs } from 'vue';
import Icon from '@/packages/icon';
import './index.scss';

export interface TagProps extends CustomEleProps {
  color?: 'default' | 'primary' | 'second' | 'success' | 'danger' | 'warning' | 'text',
  round?: boolean,
  closable?: boolean,
  size?: 'small' | 'medium' | 'large',
  icon?: string
}

const Tag = defineComponent({
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'medium',
    },
    icon: {
      type: String,
      default: '',
    },
    round: {
      type: Boolean,
      default: false,
    },
    closable: {
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
      color,
      size,
      round,
      icon,
      closable,
    } = toRefs(props);
    const preset = ['default', 'primary', 'second', 'success', 'danger', 'warning', 'text'];
    const isPreset = preset.includes(color.value);

    return () => (
      <span
        {...attrs}
        class={{
          'fa-tag': true,
          [`--${size.value}`]: true,
          [`--${color.value}`]: isPreset,
          [`--round`]: round,
        }}
        style={isPreset ? {} : {
          color: '#fff',
          borderColor: color.value,
          backgroundColor: color.value,
        }}
      >
        {icon.value && <Icon.component icon={icon.value} />}
        <span> {_default && _default()} </span>
        {closable && (
          <Icon.component
            class='fa-tag__close'
            icon='x'
            {...{
              onClick: (e: Event) => ctx.emit('close', e),
            }}
          />
        )}
      </span>
    );
  },
});

export default {
  name: 'tag',
  component: Tag,
};
