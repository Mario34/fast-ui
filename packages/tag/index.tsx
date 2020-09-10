import { defineComponent, toRefs } from 'vue';
import Icon from '@/packages/icon';
import './index.scss';

export interface TagProps extends CustomEleProps {
  color?: 'default' | 'primary' | 'second' | 'success' | 'danger' | 'warning' | 'text';
  round?: boolean;
  closable?: boolean;
  size?: 'small' | 'medium' | 'large';
  icon?: string;
}

const Tag = defineComponent({
  name: 'fa-tag',
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
  emits: ['close'],
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
    const onClose = (e:Event) => {
      e.stopPropagation();
      ctx.emit('close');
    };
    return () => (
      <span
        {...attrs}
        class={[
          'fa-tag',
          `--${size.value}`,
          {
            [`--${color.value}`]: isPreset,
            [`--round`]: round.value,
          },
        ]}
        style={isPreset ? {} : {
          color: '#fff',
          borderColor: color.value,
          backgroundColor: color.value,
        }}
      >
        {icon.value && <Icon.component icon={icon.value} />}
        <span> {_default && _default()} </span>
        {closable.value && (
          <Icon.component
            class='fa-tag__close'
            icon='x'
            onClick={onClose}
          />
        )}
      </span>
    );
  },
});

export default {
  name: Tag.name,
  component: Tag,
};
