import { defineComponent } from 'vue';
import icons from './icons.json';
import Icon from '@/packages/icon';
import './index.scss';

const AllIcon = defineComponent({
  setup() {
    return () => (
      <div class='all-icon'>
        {
          icons.map(item => (
            <div
              class='all-icon__item'
              key={item}
            >
              <Icon.component icon={item} />
              <span>{item}</span>
            </div>
          ))}
      </div>
    );
  },
});

export default AllIcon;
