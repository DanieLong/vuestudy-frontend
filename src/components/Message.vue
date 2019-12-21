<template>
  <div class="layer" id="__message__">
    <div class="message">{{message}}</div>
  </div>
</template>

<style lang="scss" scoped>
.layer {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11111;
  background: #000;
  opacity: 0;
  top: 0;
  left: 0;

  .message {
    z-index: 22222;
    text-align: center;
    background: #000;
    opacity: 0.6;
    height: 100px;
    widows: 200px;
    color: #ffffff;
  }
}
</style>

<script>
export default {
  name: 'spin',
  props: 'message'
};
</script>
