import { defineComponent } from 'vue';
import Emitter from '@/packages/utils/emitter';
import EventBus from '@/packages/utils/event-bus';
import Icons from './icons';
import './index.scss';

export interface ButtonProps extends CustomEleProps {
  modelValue?: boolean;
  label?: string | number | boolean;
  disabled?: boolean;
  indeterminate?: boolean;
}

const CheckBox = defineComponent({
  name: 'fa-checkbox',
  mixins: [Emitter],
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    label: {
      type: [Boolean, String, Number],
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    indeterminate: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'change'],
  data() {
    return {
      checkboxGroup: null,
      currentValue: this.modelValue,
    };
  },
  computed: {
    group() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name !== 'fa-checkbox-group') {
          parent = parent.$parent;
        } else {
          return parent;
        }
      }
      return null;
    },
    groupId() {
      if (this.group) {
        return this.group.id;
      }
      return null;
    },
    isDisabled() {
      return this.disabled || this.group?.disabled;
    },
  },
  watch: {
    modelValue(value) {
      this.currentValue = value;
    },
  },
  mounted() {
    EventBus.on(this.groupId + 'checkbox-group_modelValue', value => {
      this.currentValue = value.includes(this.label);
    });
  },
  methods: {
    onInput(e: Event) {
      const { checked } = e.target as { checked: boolean } & EventTarget;
      this.currentValue = checked;
      this.$emit('change', checked);
      this.$emit('update:modelValue', checked);
      this.groupId && EventBus.emit(this.groupId + 'checkbox_change', {
        checked,
        label: this.label,
      });
    },
  },
  render() {
    const { default: default_ } = this.$slots;
    const { label, indeterminate } = this.$props;
    const showIcon = () => {
      if (indeterminate) {
        return <Icons.indeterminate class='fa-check-box__icon-indeterminate' />;
      }
      if (this.currentValue) {
        return <Icons.checked class='fa-check-box__icon-checked' />;
      }
    };
    return (
      <label
        class={[
          'fa-check-box',
          {
            '--is-checked': this.currentValue,
            '--is-disabled': this.isDisabled,
            '--is-indeterminate': this.indeterminate,
          },
        ]}
      >
        <span class='fa-check-box__icon'>
          {showIcon()}
        </span>
        <span class='fa-check-box__label'>{default_ ? default_() : label}</span>
        <input
          checked={this.currentValue}
          class='fa-check-box__original-input'
          disabled={this.isDisabled}
          type='checkbox'
          onInput={this.onInput}
        />
      </label>
    );
  },
});

export default {
  name: CheckBox.name,
  component: CheckBox,
};
