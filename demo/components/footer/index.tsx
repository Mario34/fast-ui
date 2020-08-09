import { defineComponent } from 'vue';
import './index.scss';

const Footer = defineComponent({
  setup() {
    return () => (
      <footer class='footer'>
        <div class='footer__container'>
          <div class='footer__tips'>
            Made with 🌈 by Mario34
          </div>
        </div>
      </footer>
    );
  },
});

export default Footer;
