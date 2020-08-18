import { defineComponent } from 'vue';
import './index.scss';

const ButtonGroup = defineComponent({
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
  name: 'button-group',
  component: ButtonGroup,
};
