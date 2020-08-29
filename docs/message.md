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
    size="mini"
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
