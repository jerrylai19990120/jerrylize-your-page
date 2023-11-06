<script setup lang="ts">

defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <n-popover trigger="hover">
      <template #trigger>
        <img
          alt="currencyPro logo"
          class="logo"
          src="../assets/img.jpeg"
          style="width: 125px; height: 125px;"
        />
      </template>
      <span>Hi, my name is Jerry, your virtual assistant.</span>
    </n-popover>
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
