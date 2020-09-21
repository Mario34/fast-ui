/* eslint-disable */
/**
 * 参考 https://github.com/ElemeFE/element/blob/dev/src/mixins/emitter.js
 * 处理组件组合使用时事件共享机制
*/
export default {
  methods: {
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.name;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    }
  },
};
