<style>
  header > ul {
    padding: 0
  }
  header > ul > li {
    display: inline;
    padding: 5px;
  }
</style>
<template>
  <header>
    <ul>
      <li><a v-link="{ path: '/' }">Home</a></li>
      <li><a v-link="{ path: 'chat' }">Chat</a></li>
    </ul>
  </header>
</template>

