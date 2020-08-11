[toc]

## Layout 布局

### 基础用法

:::demo 将一行分为24份，根据`col`配置所占比率不同

```html
<fa-row class="demo-layout">
  <fa-col :col="24">
    <div class="content">24</div>
  </fa-col>
</fa-row>
<fa-row class="demo-layout">
  <fa-col :col="4">
    <div class="content">4</div>
  </fa-col>
  <fa-col :col="8">
   </fa-col>
  <fa-col :col="12">
    <div class="content">12</div>
  </fa-col>
</fa-row>
<fa-row class="demo-layout">
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

