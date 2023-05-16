import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerMicroApps, start, initGlobalState, MicroAppStateActions } from 'qiankun';

createApp(App).use(store).use(router).mount("#app");

// 初始化通信池
const actions: MicroAppStateActions = initGlobalState(store.state);
// 监听通讯池的变化
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
  store.commit('setState', state);
});

registerMicroApps([
  {
    name: 'vue3app',
    entry: '//localhost:9091',
    container: '#container',
    activeRule: '/app-vue/',
    props: {
      message: "Hello from parent app"
    }
  },
  {
    name: 'react app',
    entry: '//localhost:7478',
    container: '#container-react',
    activeRule: '/app-react/',
  },
  {
    name: 'vanilla app',
    entry: '//localhost:5173',
    container: '#container-vanilla',
    activeRule: '/app-vanilla/',
  },
]);
// 启动 qiankun
start();