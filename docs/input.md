[toc]

## Input 输入框

### 基础用法

:::demo

```html
<fa-row>
  <fa-col :col="6">
    <fa-input placeholder="请输入内容" v-model:value="inputValue1" />
  </fa-col>
  <fa-col :col="6">
    <fa-input disabled placeholder="禁用状态输入框" />
  </fa-col>
</fa-row>

<script>
  export default {
    data() {
      return {
        inputValue1: "",
      };
    },
  };
</script>
```

:::

### 限制长度

:::demo 使用`maxlength`属性控制输入框内容的最大长度

```html
<fa-row>
  <fa-col :col="6">
    <fa-input
      :maxlength="6"
      type="primary"
      placeholder="输入长度不超过12"
      v-model:value="inputValue1"
    />
  </fa-col>
  <fa-col :col="6">
    <fa-input
      :maxlength="12"
      type="primary"
      placeholder="输入长度不超过12"
      v-model:value="inputValue2"
    />
  </fa-col>
</fa-row>

<script>
  export default {
    data() {
      return {
        inputValue1: "",
        inputValue2: "",
      };
    },
  };
</script>
```

:::

### 带图标

:::demo 使用`prefixIcon`属性配置输入框头部的 icon，使用`suffixIcon`属性配置输入框尾部的 icon

```html
<fa-row>
  <fa-col :col="6">
    <fa-input prefixIcon="github" placeholder="请输入内容" />
  </fa-col>
  <fa-col :col="6">
    <fa-input suffixIcon="gitlab" placeholder="请输入内容" />
  </fa-col>
</fa-row>
```

:::

### 可清除内容

:::demo 使用`clearable`属性控制输入框显示清除按钮

```html
<fa-row>
  <fa-col :col="6">
    <fa-input placeholder="请输入内容" v-model:value="inputValue1" clearable />
  </fa-col>
  <fa-col :col="6">
    <fa-input
      placeholder="请输入内容"
      v-model:value="inputValue2"
      clearable
      suffixIcon="gitlab"
    />
  </fa-col>
</fa-row>

<script>
  export default {
    data() {
      return {
        inputValue1: "",
        inputValue2: "",
      };
    },
  };
</script>
```

:::

### 密码输入框

:::demo 使用`type`属性置为`password`，开启密码框功能；使用`passwordSwitch`属性开启密码隐藏/显示开关

```html
<fa-row>
  <fa-col :col="6">
    <fa-input
      type="password"
      placeholder="请输入密码"
      v-model:value="inputValue1"
      passwordSwitch
    />
  </fa-col>
  <fa-col :col="6">
    <fa-input
      type="password"
      placeholder="请输入密码"
      v-model:value="inputValue2"
      clearable
      passwordSwitch
    />
  </fa-col>
</fa-row>
 
<script>
  export default {
    data() {
      return {
        inputValue1: "",
        inputValue2: "",
      };
    },
  };
</script>
```

:::

### 错误状态

:::demo 使用`isError`属性控制输入框是否为错误状态

```html
<fa-row>
  <fa-col :col="6">
    <fa-input
      prefixIcon="github"
      placeholder="请输入内容"
      v-model:value="inputValue1"
      clearable
      isError
    />
  </fa-col>
  <fa-col :col="6">
    <fa-input
      prefixIcon="at-sign"
      placeholder="请输入内容"
      v-model:value="inputValue2"
      clearable
      isError
    />
  </fa-col>
</fa-row>

<script>
  export default {
    data() {
      return {
        inputValue1: "",
        inputValue2: "",
      };
    },
  };
</script>
```

:::

### 不同尺寸

:::demo 使用`size`属性配置输入框的尺寸，默认为`meduim`

```html
<fa-row>
  <fa-col :col="6">
    <fa-input size="small" prefixIcon="github" placeholder="请输入内容" />
  </fa-col>
  <fa-col :col="6">
    <fa-input prefixIcon="github" placeholder="请输入内容" />
  </fa-col>
  <fa-col :col="6">
    <fa-input size="large" prefixIcon="github" placeholder="请输入内容" />
  </fa-col>
</fa-row>
```

:::

### 无边框输入框

:::demo 使用`plain`属性控制输入框是否无标框

```html
<fa-row>
  <fa-col :col="6">
    <fa-input
      prefixIcon="github"
      placeholder="请输入内容"
      v-model:value="inputValue1"
      clearable
      plain
    />
  </fa-col>
  <fa-col :col="6">
    <fa-input
      prefixIcon="at-sign"
      placeholder="请输入内容"
      v-model:value="inputValue2"
      clearable
      plain
    />
  </fa-col>
</fa-row>
 
<script>
  export default {
    data() {
      return {
        inputValue1: "",
        inputValue2: "",
      };
    },
  };
</script>
```

:::

### Props

| 参数           | 说明                     | required | 类型                         | 默认值  |
| -------------- | ------------------------ | -------- | ---------------------------- | ------- |
| value          | 绑定值                   | 是       | string/number                | -       |
| placeholder    | 占位字符                 | 否       | string                       | -       |
| type           | 输入框类型               | 否       | `text` `textarea` `password` | `text`  |
| maxlength      | 原生属性                 | 否       | number                       | -       |
| clearable      | 可清除的（显示清除按钮） | 否       | boolean                      | `false` |
| size           | 尺寸                     | 否       | `large` `middle` `small`     | -       |
| passwordSwitch | 是否显示切换密码显示     | 否       | boolean                      | `false` |
| disabled       | 禁用                     | 否       | boolean                      | `false` |
| prefixIcon     | 头部 icon                | 否       | string                       | -       |
| prefixIcon     | 尾部 icon                | 否       | string                       | -       |
| isError        | 错误状态                 | 否       | boolean                      | `false` |
| border         | 待边框                   | 否       | boolean                      | `true`  |
