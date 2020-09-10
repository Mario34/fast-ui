import { defineComponent, toRefs, ref, watch } from 'vue';
import Icon from '@/packages/icon';
import './index.scss';

export interface InputProps extends CustomEleProps {
  value?: string | number;
  placeholder: string | number;
  type?: 'text' | 'password' | 'textarea';
  maxlength?: number;
  clearable?: boolean;
  passwordSwitch?: boolean;
  disabled?: boolean;
  size?: 'large' | 'middle' | 'small';
  /**
   * 头部 icon
  */
  prefixIcon?: string;
  /**
   * 尾部 icon
  */
  suffixIcon?: string;
  isError?: boolean;
  plain?: boolean;
}

const Input = defineComponent({
  name: 'fa-input',
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    maxlength: {
      type: Number,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    passwordSwitch: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium',
    },
    prefixIcon: {
      type: String,
    },
    suffixIcon: {
      type: String,
    },
    isError: {
      type: Boolean,
      default: false,
    },
    plain: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['input', 'update:value', 'change', 'clear'],
  setup(props, ctx) {
    const {
      value,
      placeholder,
      type,
      maxlength,
      clearable,
      disabled,
      passwordSwitch,
      size,
      prefixIcon,
      suffixIcon,
      isError,
      plain,
    } = toRefs(props);
    const currentValue = ref('');
    const inputRef = ref();
    const currentType = ref(type.value);
    const onInput = (e: Event) => {
      const target = e.target as HTMLInputElement;
      currentValue.value = target.value;
      ctx.emit('input', target.value);
      ctx.emit('update:value', target.value);
    };
    const onChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      ctx.emit('change', target.value);
    };
    const onClear = () => {
      inputRef.value.focus();
      currentValue.value = '';
      ctx.emit('clear');
      ctx.emit('update:value', '');
    };
    const isEmpty = (val: string | null | undefined | number) => val === '' || val === undefined || val === null;

    watch(type, (curr) => {
      currentType.value = curr;
    });

    return () => (
      <div
        class={[
          'fa-input',
          `--${type.value}`,
          `--${size.value}`,
          {
            [`--disabled`]: disabled.value,
            [`--prefix-icon`]: prefixIcon?.value,
            [`--suffix-icon`]: suffixIcon?.value,
            [`--clearable`]: clearable.value,
            [`--password`]: passwordSwitch.value,
            [`--is-error`]: isError.value,
            [`--plain`]: plain.value,
          },
        ]}
      >
        {
          prefixIcon?.value && (
            <Icon.component
              class='fa-input__prefix-icon'
              icon={prefixIcon.value}
            />
          )
        }
        <input
          class='fa-input__input'
          disabled={disabled.value}
          maxlength={maxlength?.value}
          placeholder={String(placeholder.value)}
          ref={n => inputRef.value = n}
          type={currentType.value}
          value={value?.value}
          onChange={onChange}
          onInput={onInput}
          {...ctx.attrs}
        />
        {
          clearable.value && !isEmpty(currentValue.value) && (
            <Icon.component
              class='fa-input__clearable-icon'
              icon='x-circle'
              onClick={onClear}
            />
          )
        }
        {
          suffixIcon?.value && !passwordSwitch.value && (
            <Icon.component
              class='fa-input__suffix-icon'
              icon={suffixIcon.value}
            />
          )
        }
        {
          passwordSwitch.value && (
            <Icon.component
              class='fa-input__suffix-icon'
              icon='eye'
              onClick={() => {
                currentType.value = currentType.value === 'password' ? 'text' : 'password';
              }}
            />
          )
        }
      </div>
    );
  },
});

export default {
  name: Input.name,
  component: Input,
};
