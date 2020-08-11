import { defineComponent } from 'vue';
import './index.scss';

const Row = defineComponent({
  setup(props, ctx) {
    const { default: default_ } = ctx.slots;
    return () => (
      <div class='fa-row'>
        {default_ && default_()}
      </div>
    );
  },
});

export default {
  name: 'row',
  component: Row,
};
