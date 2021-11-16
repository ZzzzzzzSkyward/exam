<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Milkdown from "./components/Milkdown.vue";
import Monaco from "./components/Monaco.vue";
import "./assets/global.css";
</script>

<template>
  <div class="main">
    <Milkdown style="padding:3%"></Milkdown>
    <Monaco language="markdown" size="20px"></Monaco>
  </div>
</template>

<style>
.main {
  --code-font: "Monaco", "Fira Code", "Consolas", "Andale Mono", "Ubuntu Mono",
    "monospace";
  position: relative;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: top;
  align-items:flex-start;
}
.milkdown{
padding:0;
}
.main > * {
  flex: auto;
  width: 40%;
  padding: 0;
  margin: 0;
}
.monaco-editor {
  font-family: var(--code-font);
  font-size:1em;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.monaco-container {
  position: relative;
  min-height: 500px;
  min-width: 100px;
}
</style>
