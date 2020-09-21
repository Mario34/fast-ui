import { defineComponent, ref, toRefs } from 'vue';
import Emitter from '@/packages/utils/emitter';
import EventBus from '@/packages/utils/event-bus';
import { v4 as uuidv4 } from 'uuid';
import './index.scss';

export interface ButtonProps extends CustomEleProps {
  disabled?: boolean;
  inline?: boolean;
  value?: [];
}

const CheckBoxGroup = defineComponent({
  name: 'fa-checkbox-group',
  mixins: [Emitter],
  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'change'],
  setup(props, ctx) {
    const id = uuidv4();
    const test = ref('');
    const { modelValue } = toRefs(props);
    const currentValue = ref(modelValue?.value || []);
    EventBus.on(id + 'checkbox_change', (e) => {
      const values = [...currentValue.value];
      const index = values.indexOf(e.label);
      if (index > -1) {
        if (!e.checked) {
          values.splice(index, 1);
        }
      } else {
        if (e.checked) {
          values.push(e.label);
        }
      }
      ctx.emit('update:modelValue', values);
      ctx.emit('change', e, values);
    });
    const notice = () => {
      EventBus.emit(id + 'checkbox-group_modelValue', modelValue.value);
      currentValue.value = modelValue.value;
    };

    return {
      id,
      test,
      currentValue,
      notice,
    };
  },
  watch: {
    modelValue(value) {
      EventBus.emit(this.id + 'checkbox-group_modelValue', this.modelValue);
      this.currentValue = value;
    },
  },
  mounted() {
    this.notice();
  },
  render() {
    const { default: default_ } = this.$slots;
    return (
      <div
        class={['fa-check-box-group']}
      >
        {this.test}{default_ && default_()}
      </div>
    );
  },
});

export default {
  name: CheckBoxGroup.name,
  component: CheckBoxGroup,
};
