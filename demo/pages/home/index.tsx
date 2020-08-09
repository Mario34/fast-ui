import { defineComponent } from 'vue';
import Footer from '@/demo/components/footer';
import Header from '@/demo/components/header';
import './index.scss';

export default defineComponent({
  setup() {
    return () => (
      <>
        <Header />
        <div class='home__main'>
          🛠 The home page is under construction.
        </div>
        <Footer />
      </>
    );
  },
});
