import { defineComponent } from 'vue';
import icons from './icons.json';
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
              <i class={`ti-${item}`}></i>
              <span>{`ti-${item}`}</span>
            </div>
          ))}
      </div>
    );
  },
});

export default AllIcon;
