import { defineComponent } from 'vue';
import './index.scss';

const Row = defineComponent({
  name: 'fa-row',
  props: {
    space: {
      type: Number,
      default: 0,
    },
  },
  setup(props, ctx) {
    const { default: default_ } = ctx.slots;
    const { space } = props;
    return () => (
      <div
        class='fa-row'
        style={{
          marginBottom: space ? `${space}px` : '',
        }}
      >
        {default_ && default_()}
      </div>
    );
  },
});

export default {
  name: Row.name,
  component: Row,
};
