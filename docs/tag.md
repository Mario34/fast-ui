[toc]

## Tag 标签

### 基础用法

:::demo 使用`icon`来控制按钮的颜色，使用`round`来控制是否为圆角按钮，使用`icon`给按钮添加图标

```html
<fa-row :space="14">
  <fa-tag color="default">标签一</fa-tag>
  <fa-tag color="primary">标签二</fa-tag>
  <fa-tag color="second">标签三</fa-tag>
  <fa-tag color="success">标签四</fa-tag>
  <fa-tag color="warning">标签五</fa-tag>
  <fa-tag color="danger">标签六</fa-tag>
</fa-row>
<fa-row :space="14">
  <fa-tag color="default" round>标签一</fa-tag>
  <fa-tag color="primary" round>标签二</fa-tag>
  <fa-tag color="second" round>标签三</fa-tag>
  <fa-tag color="success" round>标签四</fa-tag>
  <fa-tag color="warning" round>标签五</fa-tag>
  <fa-tag color="danger" round>标签六</fa-tag>
</fa-row>
<fa-row>
  <fa-tag icon="at-sign" color="default">标签一</fa-tag>
  <fa-tag icon="star" color="primary">标签二</fa-tag>
  <fa-tag icon="rotate-cw" color="second" round>标签三</fa-tag>
  <fa-tag icon="check" color="success" round>标签四</fa-tag>
  <fa-tag icon="alert-circle" color="warning" round>标签五</fa-tag>
  <fa-tag icon="delete" color="danger" round>标签六</fa-tag>
</fa-row>
```

:::

### 自定义颜色

:::demo `icon`可以为预设值，也可以自定义

```html
<fa-row :space="14">
  <fa-tag color="#67ac5b">标签一</fa-tag>
  <fa-tag color="#ec9134">标签二</fa-tag>
  <fa-tag color="#ec5e58">标签三</fa-tag>
  <fa-tag color="#2f67ba">标签四</fa-tag>
  <fa-tag color="#74bbf1">标签五</fa-tag>
</fa-row>
<fa-row>
  <fa-tag color="#67ac5b" round>标签一</fa-tag>
  <fa-tag color="#ec9134" round>标签二</fa-tag>
  <fa-tag color="#ec5e58" round>标签三</fa-tag>
  <fa-tag color="#2f67ba" round>标签四</fa-tag>
  <fa-tag color="#74bbf1" round>标签五</fa-tag>
</fa-row>
```

:::

### 不同尺寸

:::demo `size`指定标签尺寸

```html
<fa-row :space="14">
  <fa-tag size="small">标签一</fa-tag>
  <fa-tag size="medium">标签一</fa-tag>
  <fa-tag size="large">标签一</fa-tag>
</fa-row>
<fa-row>
  <fa-tag round size="small">标签二</fa-tag>
  <fa-tag round size="medium">标签二</fa-tag>
  <fa-tag round size="large">标签二</fa-tag>
</fa-row>
```

:::

### 显示关闭按钮

:::demo `closable`控制是否显示关闭按钮

```html
<fa-row>
  <fa-tag closable :color="color" @close="onClose">标签一</fa-tag>
  <fa-tag closable color="primary" @close="onClose">标签二</fa-tag>
  <fa-tag closable color="second" round @close="onClose">标签三</fa-tag>
  <fa-tag closable color="success" round @close="onClose">标签四</fa-tag>
  <fa-tag closable color="warning" round @close="onClose">标签五</fa-tag>
  <fa-tag closable color="danger" round @close="onClose">标签六</fa-tag>
</fa-row>

<script>
  export default {
    methods: {
      onClose() {
        this.$message({
          type: "success",
          content: "点击关闭按钮",
        });
      },
    },
  };
</script>
```

:::

### Props

| 参数     | 说明         | required | 类型                                                      | 默认值     |
| -------- | ------------ | -------- | --------------------------------------------------------- | ---------- |
| color    | 颜色类型     | 否       | `default` `primary` `second` `success` `danger` `warning` | `default`  |
| closable | 显示关闭按钮 | 否       | boolean                                                   | `false`    |
| size     | 尺寸         | 否       | `small` `medium` `large`                                  | `medium`｜ |

### Events

| 参数  | 说明         | 参数    |
| ----- | ------------ | ------- |
| close | 点击关闭按钮 | `Event` |
| ...   | 其他原生事件 | `Event` |
