import { defineComponent, ref, onMounted, nextTick, computed } from 'vue';
import hljs from 'highlight.js';
import './atom-one-light.css';
import './index.scss';

const DemoContainer = defineComponent({
  props: [],
  setup(_props, ctx) {
    const {
      slots: {
        default: _default,
        source,
        highlight,
      },
    } = ctx;
    const descriptionRef = ref();
    const highlightRef = ref();
    const isExpanded = ref(false);
    const highlightHeight = computed(() => {
      if (isExpanded.value) {
        return highlightRef.value ? highlightRef.value.offsetHeight : 0;
      }
      return 0;
    });
    const controlText = computed(() => isExpanded.value ? '隐藏代码' : '显示代码');

    const switchExpand = () => {
      isExpanded.value = !isExpanded.value;
    };

    onMounted(() => {
      nextTick(() => {
        const blocks = document.querySelectorAll('pre code:not(.hljs)');
        Array.prototype.forEach.call(blocks, hljs.highlightBlock);
      });
    });

    return () => (
      <div class='demo-container'>
        {source && (
          <div class='demo-container__source'>
            {source()}
          </div>
        )}
        <div class='demo-container__meta'>
          {_default && (
            <div
              class='demo-container__description'
              ref={descriptionRef}
            >
              {_default()}
            </div>
          )}
          {highlight && (
            <div
              class='demo-container__highlight-box'
              style={{
                height: `${highlightHeight.value}px`,
              }}
            >
              <div
                class='demo-container__highlight'
                ref={highlightRef}
              >
                {highlight()}
              </div>
            </div>
          )}
        </div>
        <div class='demo-container__control'>
          <span
            class='demo-container__control-button'
            onClick={switchExpand}
          >
            {controlText.value}
          </span>
        </div >
      </div >
    );
  },
});

export default DemoContainer;
