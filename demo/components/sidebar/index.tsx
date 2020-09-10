import { defineComponent, Ref } from 'vue';
import Footer from '@/demo/components/footer';
import { useRouter, RouterLink, useRoute } from 'vue-router';
import './index.scss';

export interface SubItem {
  title: string;
  name: string;
}

export interface SidebarConfigItem {
  title: string;
  items: SubItem[];
}

export interface SidebarProps {
  /**
   * Sidebar 配置
  */
  config: Ref<SidebarConfigItem[]>;
}

const Sidebar = defineComponent({
  props: [
    'config',
  ],
  setup(props) {
    const { config } = props as SidebarProps;
    const router = useRouter();
    const route = useRoute();

    return () => (
      <div class='sidebar __scroll-box'>
        <div class='sidebar__group'>
          {
            config.value.map((group) => (
              <>
                {group.title && (
                  <div class='sidebar__group-title'>
                    {group.title}
                  </div>
                )}
                {
                  group.items.map((item) => (
                    <div
                      class={[
                        'sidebar__group-item',
                        { 'sidebar__group-item--active': item.name === route.name },
                      ]}
                      key={item.title}
                      onClick={() => {
                        router.push({ name: item.name });
                      }}
                    >
                      {item.title}
                    </div>
                  ))
                }
              </>
            ))
          }
        </div>
        <Footer class='sidebar__footer' />
      </div>
    );
  },
});

export default Sidebar;
