<template>
  <div class="home">
    <span>
      这是qiankun-vue主应用页面
    </span>
    <div>
      这是主应用的state: {{abc}}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const abc = computed(() => store.state.abc);
</script>
