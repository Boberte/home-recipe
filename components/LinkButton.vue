<template>
  <nuxt-link
    :to="to"
    class="btn link-btn hover-bounce"
  >
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.link-btn {
  background: white;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  text-align: center;
  font-size: 30px;
  border-bottom-color: #b0d9fc;
  border-right-color: #98d0ff;
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 0;
}
</style>