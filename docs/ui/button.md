### Button

### 组件注册

```js
import {Button} from 'ant-design-vue';

Vue.use(Button);
```

### 代码演示

::: demo

```html
<!--vue-ssr-outlet-->
<template>
  <div>
    <a-button type="primary">
      Primary
    </a-button>
    <a-button>Default</a-button>
    <a-button type="dashed">
      Dashed
    </a-button>
    <a-button type="danger">
      Danger
    </a-button>
    <a-config-provider :auto-insert-space-in-button="false">
      <a-button type="primary">
        按钮
      </a-button>
    </a-config-provider>
    <a-button type="primary">
      按钮
    </a-button>
    <a-button type="link">
      Link
    </a-button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        message: ''
      }
    }
  }
</script>
<style>
  .red-center-text {
    color: #ff7875;
    text-align: center;
  }
</style>
```

:::
