<script setup lang="ts">

defineProps<{
  msg: string
}>()


function onclick() {
  let images = document.getElementsByTagName('img');
  for(let i = 0; i < images.length; i++){
    
  }
}
</script>

<template>
  <div class="greetings">
    <n-popover trigger="hover">
      <template #trigger>
        <img
          alt="currencyPro logo"
          class="logo"
          src="../assets/img.jpeg"
          width="125"
          height="125"
        />
      </template>
      <span>Hi, my name is Jerry, your virtual assistant.</span>
    </n-popover>
    <button v-on:click="onclick" id="jerrlize">Test</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
