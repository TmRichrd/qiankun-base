<template>
  <div>
    <div id="nav">
      <router-link to="/">vue主应用</router-link> |
      <router-link to="/app-vue/">vue 微应用</router-link> |
      <router-link to="/app-react/">react 微应用</router-link> | 
      <router-link to="/app-vanilla/">原生js 微应用</router-link>
    </div>
    <router-view />
    <div id="container"></div>
    <div id="container-react"></div>
    <div id="container-vanilla"></div>
  </div>
</template>