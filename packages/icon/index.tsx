import { defineComponent, h } from 'vue';
import sprite from 'feather-icons/dist/feather-sprite.svg';
import './index.scss';

const Icon = defineComponent({
  name: 'fa-icon',
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  render() {
    return h(
      'svg',
      {
        width: '1em',
        height: '1em',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        class: 'fa-icon',
      },
      [
        h(
          'use',
          {
            'xlink:href': `${sprite}#${this.icon}`,
          },
        ),
      ],
    );
  },
});

export default {
  name: Icon.name,
  component: Icon,
};
