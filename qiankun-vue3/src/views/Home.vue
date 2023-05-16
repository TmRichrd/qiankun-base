<template>
  <div class="home">
    <span>
      这是qiankun-vue微应用页面
    </span>
    <div>
      <span>来自主应用的数据：{{obj.abc}}</span>
    </div>
    <button @click="handleChange">修改值</button>

  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import action from "../qiankun/action";
let obj = ref({
  baiduinit: null,
  abc: "",
});
onMounted(() => {
  action.onGlobalStateChange((state) => {
    obj.value = state;
  }, true);
});
const handleChange = () => {
  action.setGlobalState({
    abc: (obj.value.abc += 1),
  });
};
</script>
