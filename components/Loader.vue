<template>
  <div class="loader"></div>
</template>
<script>
export default {
  name: "Loader",
};
</script>
<style>
.loader {
  border: 0.6rem solid #ffffff;
  border-radius: 50%;
  border-top: 0.6rem solid #7c7c7c;
  width: 5rem;
  height: 5rem;
  animation: spin 2s linear infinite;
  margin: auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
