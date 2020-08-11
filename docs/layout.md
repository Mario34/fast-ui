<!-- [toc] -->

## Layout 布局

### 栅格布局

:::demo 将一行分为24份，根据`col`配置所占比率不同

```html
<fa-row class="demo-layout":space="10">
  <fa-col :col="24">
    <div class="content">24</div>
  </fa-col>
</fa-row>
<fa-row class="demo-layout":space="10">
  <fa-col :col="4">
    <div class="content">4</div>
  </fa-col>
  <fa-col :col="12">
    <div class="content">12</div>
  </fa-col>
</fa-row>
<fa-row class="demo-layout":space="10">
  <fa-col :col="6">
    <div class="content">6</div>
  </fa-col>
  <fa-col :col="7">
    <div class="content">7</div>
  </fa-col>
  <fa-col :col="5">
    <div class="content">5</div>
  </fa-col>
  <fa-col :col="6">
    <div class="content">6</div>
  </fa-col>
</fa-row>

```

:::

### 偏移

:::demo 可以通过col的`offset`属性控制块元素的向右偏移量

```html
<fa-row class="demo-layout":space="10">
  <fa-col :col="12" :offset="6">
    <div class="content">12</div>
  </fa-col>
</fa-row>
<fa-row class="demo-layout":space="10">
  <fa-col :col="4" :offset="4">
    <div class="content">4</div>
  </fa-col>
  <fa-col :col="12" :offset="2">
    <div class="content">12</div>
  </fa-col>
</fa-row>
<fa-row class="demo-layout":space="10">
  <fa-col :col="6" :offset="2">
    <div class="content">6</div>
  </fa-col>
  <fa-col :col="7">
    <div class="content">7</div>
  </fa-col>
  <fa-col :col="6" :offset="2">
    <div class="content">6</div>
  </fa-col>
</fa-row>
```

:::

### 行间距

:::demo 通过row的`space`属性控制行后间距

```html
<fa-row class="demo-layout" :space="10">
  <fa-col :col="12" :offset="6">
    <div class="content">12</div>
  </fa-col>
</fa-row>
<fa-row class="demo-layout" :space="20">
  <fa-col :col="4" :offset="4">
    <div class="content">4</div>
  </fa-col>
  <fa-col :col="12" :offset="2">
    <div class="content">12</div>
  </fa-col>
</fa-row>
<fa-row class="demo-layout" :space="0">
  <fa-col :col="6" :offset="2">
    <div class="content">6</div>
  </fa-col>
  <fa-col :col="7">
    <div class="content">7</div>
  </fa-col>
  <fa-col :col="6" :offset="2">
    <div class="content">6</div>
  </fa-col>
</fa-row>
```

:::

### Row Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| space | 栅格行间隔 | number | — | 0 |


### Col Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| col | 栅格占据的列数 | number | — | 24 |
| offset | 栅格左侧的间隔格数 | number | — | 0 |

