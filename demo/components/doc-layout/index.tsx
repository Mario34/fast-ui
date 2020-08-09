import { ref, toRefs } from 'vue';
import { RouterView } from 'vue-router';
import Header from '@/demo/components/header';
import Sidebar, { SidebarConfigItem } from '@/demo/components/sidebar';
import './index.scss';

const DocLayout = ({
  props: {
    navConfig: {
      type: Array,
    },
  },
  setup(props: Readonly<{ navConfig: SidebarConfigItem[] }>) {
    const catalogue = ref();
    const scrollBox = ref();
    const { navConfig } = toRefs(props);

    return () => (
      <div class='doc-page'>
        <Header />
        <div class='doc-page__container'>
          <Sidebar config={navConfig} />
          <div
            class='doc-page__router-view'
            ref={scrollBox}
          >
            <div class='doc-page__router-view-doc markdown-body'>
              <RouterView />
            </div>
            <div class='doc-page__catalogue' ref={catalogue} />
          </div>
        </div>
      </div>
    );
  },
});

export default DocLayout;
