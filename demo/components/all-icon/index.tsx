import { defineComponent } from 'vue';
import icons from './icons.json';
import Icon from '@/packages/icon';
import copy from '@/demo/utils/clipboard';
import { message } from '@/packages/message';
import './index.scss';
const AllIcon = defineComponent({
  setup() {
    const onClick = (item: string) => {
      copy(`<fa-icon icon="${item}"/>`).then(() => {
        message({
          type: 'success',
          content: `<fa-icon icon="${item}"/> has been copied`,
        });
      });
    };
    return () => (
      <div
        class='all-icon'
      >
        {
          icons.map(item => (
            <div
              class='all-icon__item'
              data-item={item}
              key={item}
              onClick={() => onClick(item)}
            >
              <Icon.component icon={item} />
              <span>{item}</span>
            </div>
          ))
        }
      </div>
    );
  },
});

export default AllIcon;
