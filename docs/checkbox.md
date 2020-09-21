[toc]

## CheckBox 多选框

### 基础用法

:::demo 单个多选框绑定值为`Boolean`，一般用来控制开关

```html
<fa-row>
  <fa-checkbox @change="onChange" v-model="checked">选项A</fa-checkbox>
</fa-row>

<script>
  export default {
    data() {
      return {
        checked: true,
      };
    },
    methods: {
      onChange(e) {
        console.log(e);
      },
    },
  };
</script>
```

:::

### 多选框组

:::demo 多选框组绑定值为一个数组，由选中状态 checkbox 的`label`组成

```html
<fa-row>
  <fa-checkbox-group v-model="values" @change="onChange">
    <fa-checkbox v-for="item in array" :label="item"
      >{{'选项' + item}}</fa-checkbox
    >
  </fa-checkbox-group>
</fa-row>

<script>
  export default {
    data() {
      return {
        values: [1, 2],
        array: [1, 2, 3, 4],
      };
    },
    methods: {
      onChange(e, values) {
        console.log(e, values);
      },
    },
  };
</script>
```

:::

### 禁用状态

:::demo `disabled`控制是否禁用，`checkbox-group`禁用选项开启时，子组件中的`checkbox`也会被禁用

```html
<fa-row :space="14">
  <fa-checkbox v-model="isDisabled">是否禁用</fa-checkbox>
</fa-row>
<fa-row :space="14">
  <fa-checkbox :disabled="isDisabled" v-model="checked1">选项1</fa-checkbox>
  <fa-checkbox :disabled="isDisabled" v-model="checked2">选项2</fa-checkbox>
</fa-row>
<fa-row>
  <fa-checkbox-group v-model="values" @change="onChange" :disabled="isDisabled">
    <fa-checkbox label="选项1" />
    <fa-checkbox label="选项2" />
  </fa-checkbox-group>
</fa-row>

<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: true,
        values: ["选项A"],
        isDisabled: true,
      };
    },
    methods: {
      onChange(e) {
        console.log(e);
      },
    },
  };
</script>
```

:::

### indeterminate 状态

参考 MDM 文档 [https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/checkbox](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/checkbox)

:::demo `indeterminate`指定 checkbox 处于不定状态

```html
<fa-row :space="10">
  <fa-checkbox
    :indeterminate="isIndeterminate"
    v-model="checkAll"
    @change="onSelectAllChange"
    >全选</fa-checkbox
  >
</fa-row>
<fa-row>
  <fa-checkbox-group v-model="groupValue" @change="onGroupChange">
    <fa-checkbox v-for="option in options" :label="option" :key="option" />
  </fa-checkbox-group>
</fa-row>

<script>
  const options = ["选项1", "选项2", "选项3", "选项4"];
  export default {
    data() {
      return {
        checkAll: false,
        groupValue: ["选项1", "选项2"],
        options,
        isIndeterminate: true,
      };
    },
    methods: {
      onSelectAllChange(val) {
        this.groupValue = val ? [...options] : [];
        this.isIndeterminate = false;
      },
      onGroupChange(value, values) {
        let checkedCount = values.length;
        this.checkAll = checkedCount === this.options.length;
        this.isIndeterminate =
          checkedCount > 0 && checkedCount < this.options.length;
      },
    },
  };
</script>
```

:::

### Checkbox Props

| 参数               | 说明             | required | 类型                  | 默认值  |
| ------------------ | ---------------- | -------- | --------------------- | ------- |
| modelValue/v-model | 绑定值           | 否       | boolean               | `false` |
| label              | 配合选项组时使用 | 时       | boolean/number/string | -       |
| disabled           | 禁用状态         | 否       | boolean               | `false` |
| indeterminate      | 不定状态         | 否       | boolean               | `false` |

### Checkbox Event

| 参数              | 说明                        | 参数    |
| ----------------- | --------------------------- | ------- |
| update:modelValue | 触发默认 v-model 绑定值更新 | boolean |
| change            | 选项发生改变                | boolean |
| ...               | 其他原生事件                | `Event` |

### CheckboxGroup Props

| 参数               | 说明     | required | 类型    | 默认值  |
| ------------------ | -------- | -------- | ------- | ------- |
| modelValue/v-model | 绑定值   | 否       | array   | []      |
| disabled           | 禁用状态 | 否       | boolean | `false` |

### CheckboxGroup Event

| 参数              | 说明                        | 参数                      |
| ----------------- | --------------------------- | ------------------------- |
| update:modelValue | 触发默认 v-model 绑定值更新 | label                   |
| change            | 选项发生改变                | [{label,checked},[...labels]] |
| ...               | 其他原生事件                | `Event`                   |
