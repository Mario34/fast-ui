[toc]

## Button 按钮

常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式

```html
<fa-button style="color: red" type="ss" class="demo" @click="onSubmit">普通按钮</fa-button>

<script>
  export default {
    name: "DemoDoc",
    data() {
      return {
        message: "onSubmit",
      };
    },
    methods: {
      onSubmit(e) {
        console.log(e)
      },
    },
  };
</script>
```

:::
