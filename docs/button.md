[toc]

## Button 按钮

### 基础用法

:::demo 使用`type`来控制按钮的类型，使用`plain`来控制是否为朴素按钮，使用`round`来控制是否为圆角按钮，使用`circle`来控制是否为圆形按钮

```html
<fa-row :space="14">
  <fa-button type="primary">主要按钮</fa-button>
  <fa-button type="second">次要按钮</fa-button>
  <fa-button type="success">安全按钮</fa-button>
  <fa-button type="danger">危险按钮</fa-button>
  <fa-button type="warning">警告按钮</fa-button>
  <fa-button>默认按钮</fa-button>
</fa-row>
<fa-row :space="14">
  <fa-button plain type="primary">主要按钮</fa-button>
  <fa-button plain type="second">次要按钮</fa-button>
  <fa-button plain type="success">安全按钮</fa-button>
  <fa-button plain type="danger">危险按钮</fa-button>
  <fa-button plain type="warning">警告按钮</fa-button>
  <fa-button plain>默认按钮</fa-button>
</fa-row>
<fa-row :space="0">
  <fa-button round>默认按钮</fa-button>
  <fa-button round icon="thumbs-up">默认按钮</fa-button>
  <fa-button circle icon="star" type="success"></fa-button>
  <fa-button circle icon="shopping-cart" type="second"></fa-button>
  <fa-button circle icon="heart" type="danger"></fa-button>
</fa-row>
```

:::

### 禁用状态

:::demo 使用`disabled`来控制按钮的禁用状态

```html
<fa-row :space="14">
  <fa-button disabled type="primary">主要按钮</fa-button>
  <fa-button disabled type="second">次要按钮</fa-button>
  <fa-button disabled type="success">安全按钮</fa-button>
  <fa-button disabled type="danger">危险按钮</fa-button>
  <fa-button disabled type="warning">警告按钮</fa-button>
  <fa-button disabled>默认按钮</fa-button>
</fa-row>
<fa-row>
  <fa-button plain disabled type="primary">主要按钮</fa-button>
  <fa-button plain disabled type="second">次要按钮</fa-button>
  <fa-button plain disabled type="success">安全按钮</fa-button>
  <fa-button plain disabled type="danger">危险按钮</fa-button>
  <fa-button plain disabled type="warning">警告按钮</fa-button>
  <fa-button plain disabled>默认按钮</fa-button>
</fa-row>
```

:::

### 加载状态

:::demo 使用`loading`来控制按钮的禁用状态

```html
<fa-row :space="14">
  <fa-button loading type="primary">主要按钮</fa-button>
  <fa-button loading type="second">次要按钮</fa-button>
  <fa-button loading type="success">安全按钮</fa-button>
  <fa-button loading type="danger">危险按钮</fa-button>
  <fa-button loading type="warning">警告按钮</fa-button>
  <fa-button loading>默认按钮</fa-button>
</fa-row>
<fa-row>
  <fa-button plain loading type="primary">主要按钮</fa-button>
  <fa-button plain loading type="second">次要按钮</fa-button>
  <fa-button plain loading type="success">安全按钮</fa-button>
  <fa-button plain loading type="danger">危险按钮</fa-button>
  <fa-button plain loading type="warning">警告按钮</fa-button>
  <fa-button plain loading>默认按钮</fa-button>
</fa-row>
```

:::

### 按钮尺寸

:::demo 使用`size`来控制按钮的类型 `'small'|'medium'|'large'`，默认值为`medium`

```html
<fa-button size="small">小按钮</fa-button>
<fa-button size="medium">默认按钮</fa-button>
<fa-button size="large">大按钮</fa-button>
```

:::

### 带图标按钮

:::demo 使用`icon`给按钮添加图标，同时也可以直接在 button 内部添加`<i class="icon-class"></i>`实现

```html
<fa-button round icon="thumbs-up">赞</fa-button>
<fa-button circle icon="thumbs-up" type="success"></fa-button>
<fa-button round type="danger"><fa-icon icon="user" />23</fa-button>
<fa-button round type="warning">24 <fa-icon icon="user" /></fa-button>
<fa-button round icon="star" type="primary">收藏</fa-button>
```

:::

### 文字按钮

:::demo 文字按钮一般适用于非重要性操作

```html
<fa-button type="text">取消</fa-button>
<fa-button type="text">下一页</fa-button>
<fa-button type="text">查看详情</fa-button>
```

:::

### 按钮组

:::demo 使用`button-group`包裹多个`button`实现按钮组

```html
<fa-row :space="14">
  <fa-button-group>
    <fa-button type="second">按钮1</fa-button>
    <fa-button type="second">按钮2</fa-button>
    <fa-button type="second">按钮3</fa-button>
    <fa-button type="second">按钮4</fa-button>
    <fa-button type="second">按钮5</fa-button>
  </fa-button-group>
</fa-row>
<fa-row :space="14">
  <fa-button-group>
    <fa-button type="second">按钮1</fa-button>
    <fa-button type="success">按钮2</fa-button>
    <fa-button type="primary">按钮3</fa-button>
    <fa-button type="warning">按钮4</fa-button>
    <fa-button type="danger">按钮5</fa-button>
  </fa-button-group>
</fa-row>
```

:::

### Props

| 参数     | 说明     | required | 类型                                                             | 默认值    |
| -------- | -------- | -------- | ---------------------------------------------------------------- | --------- |
| type     | 颜色类型 | 否       | `default` `primary` `second` `success` `danger` `warning` `text` | `default` |
| plain    | 朴素风格 | 否       | boolean                                                          | `false`   |
| round    | 圆角按钮 | 否       | boolean                                                          | `false`   |
| circle   | 圆形按钮 | 否       | boolean                                                          | `false`   |
| icon     | 按钮图标 | 否       | string                                                           | -         |
| disabled | 禁用状态 | 否       | boolean                                                          | `false`   |
| loading  | 加载状态 | 否       | boolean                                                          | `false`   |
| size     | 尺寸     | 否       | `large` `middle` `small`                                         | `middle`  |

### Event

| 参数  | 说明         | 参数    |
| ----- | ------------ | ------- |
| click | 点击事件     | `Event` |
| ...   | 其他原生事件 | `Event` |
