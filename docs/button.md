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
  <fa-button round>次要按钮</fa-button>
  <fa-button round icon="ti-thumb-up">次要按钮</fa-button>
  <fa-button circle icon="ti-thumb-down" type="warning"></fa-button>
  <fa-button circle icon="ti-tool" type="default"></fa-button>
  <fa-button circle icon="ti-alarm"></fa-button>
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
<fa-row :space="14">
  <fa-button size="small">小按钮</fa-button>
  <fa-button size="medium">默认按钮</fa-button>
  <fa-button size="large">大按钮</fa-button>
</fa-row>
```

:::
