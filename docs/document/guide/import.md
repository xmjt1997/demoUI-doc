# 快速上手

本节将介绍如何在项目中使用 Demo-ui。

### 完整引入

```javascript
import Vue from 'vue';
import DemoUI from 'Demo-ui';
import 'Demo-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(DemoUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### 按需引入
```javascript
import Vue from 'vue';
import { Button, Select } from 'demo-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */
new Vue({
  el: '#app',
  render: h => h(App)
});
```
::: warning 提示
样式文件需要单独引入
:::