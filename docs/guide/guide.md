[toc]
## Button 按钮

常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式

```html
<input v-model="message" type="text" style="margin-right: 10px" />
<button
  class="button"
  type="button"
  style="margin-right: 10px"
  @click.prevent="onSubmit"
>
  click
</button>
<button @click="onSubmit_">click</button>
<fa-button style="margin-right: 10px" />

<script>
  export default {
    name: "DemoDoc",
    data() {
      return {
        message: "",
      };
    },
    methods: {
      onSubmit() {
        confirm(this.message);
      },
      onSubmit_() {
        confirm(`123`);
      },
    },
  };
</script>
```

:::

### 圆角按钮

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式

```html
<input v-model="message" type="text" style="margin-right: 10px" />
<button
  class="button"
  type="button"
  style="margin-right: 10px"
  @click.prevent="onSubmit"
>
  click
</button>
<fa-button style="margin-right: 10px" />

<script>
  export default {
    name: "DemoDoc",
    data() {
      return {
        message: "",
      };
    },
    methods: {
      onSubmit() {
        confirm(this.message);
      },
    },
  };
</script>
```

:::
