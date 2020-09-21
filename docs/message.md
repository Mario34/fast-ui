[toc]

## Message 消息

### 基础用法

:::demo 通过调用方法唤起消息，通过`type`属性指定消息的类型，提供以下预设

```html
<fa-row>
  <fa-button
    v-for="item in buttonList"
    @click="onClick(item.type)"
    :type="item.type"
    plain
  >{{item.text}}</fa-button>
</fa-row>

<script>
  export default {
    data() {
      return {
        buttonList: [
          {
            type: "default",
            text: "默认",
          },
          {
            type: "success",
            text: "成功",
          },
          {
            type: "primary",
            text: "通用",
          },
          {
            type: "second",
            text: "次要",
          },
          {
            type: "warning",
            text: "警告",
          },
          {
            type: "danger",
            text: "危险",
          },
        ],
      };
    },
    methods: {
      onClick(type) {
        this.$message({
          type,
          content: `This is a ${type} message.`,
        });
      },
    },
  };
</script>
```

:::

### 自定义持续时间

:::demo 通过`duration`属性控制消息提示的延迟关闭时间

```html
<fa-row>
  <fa-button
    v-for="item in buttonList"
    @click="onClick(item.duration)"
    :duration="item.duration"
    plain
  >{{item.text}}</fa-button>
</fa-row>

<script>
  export default {
    data() {
      return {
        buttonList: [
          {
            duration: 3000,
            text: "默认3s关闭",
          },
          {
            duration: 5000,
            text: "5s关闭",
          },
          {
            duration: 10000,
            text: "10s关闭",
          },
        ],
      };
    },
    methods: {
      onClick(duration) {
        this.$message({
          duration,
          type: "success",
          content: `This is a message with a delay of ${duration / 1000}s.`,
        });
      },
    },
  };
</script>
```

:::

### 消息关闭时的回调

:::demo `onClose`属性方法将会在消息关闭时调用

```html
<fa-row>
  <fa-button @click="onClickCallback">关闭后的回调</fa-button>
  <fa-button @click="onClickPromise">Promise化调用</fa-button>
</fa-row>

<script>
  export default {
    methods: {
      onClickCallback(content) {
        this.$message({
          duration: 1000,
          content: "callback",
          onClose: () => {
            this.$message({
              type: "success",
              content: "callback closed",
            });
          },
        });
      },
      onClickPromise() {
        this.$message({
          duration: 1000,
          content: "promise",
        }).then(() => {
          this.$message({
            type: "success",
            content: "promise closed",
          });
        });
      },
    },
  };
</script>
```

:::

### message 方法参数

| 参数     | 说明         | required | 类型                                                      | 默认值    |
| -------- | ------------ | -------- | --------------------------------------------------------- | --------- |
| content  | 消息内容     | 是       | string                                                    | -         |
| type     | 类型         | 否       | `default` `primary` `second` `success` `danger` `warning` | `default` |
| duration | 持续时间/ms  | 否       | boolean                                                   | `3000`    |
| onClose  | 关闭时的回调 | 否       | function                                                  | -         |
