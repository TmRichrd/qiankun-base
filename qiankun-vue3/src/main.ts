import { createApp } from "vue";
import App from "./App.vue";
import { CreateRouter } from "./router";
import store from "./store";
import action from "./qiankun/action"
// let app: VueApp<Element> | null = null;

let router = null;
let instance = null as any;

function render(props = {} as any) {
  const { container } = props;
  router = CreateRouter()
  instance = createApp(App);
  instance.use(store)
  instance.use(router)
  instance.mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  // console.log('[vue] vue app bootstraped');
}
export async function mount(props: any) {
  // console.log('[vue] props from main framework', props);
  action.setActions(props)
  render(props);
}
export async function unmount() {
  // instance?.$destroy();
  // instance.$el.innerHTML = '';
  // instance = null;
  // router = null;
  instance.unmount();
  instance = null;
  router = null;
}