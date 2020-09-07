import { defineComponent } from 'vue';
import './index.scss';

const ButtonGroup = defineComponent({
  name: 'fa-button-group',
  props: {
    space: {
      type: Number,
      default: 0,
    },
  },
  setup(props, ctx) {
    const { default: default_ } = ctx.slots;
    return () => (
      <div class='fa-button-group'>
        {default_ && default_()}
      </div>
    );
  },
});

export default {
  name: ButtonGroup.name,
  component: ButtonGroup,
};
