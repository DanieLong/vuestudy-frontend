<template>
  <div class="layer" id="__layer__">
    <div class="spin">
      <i />
      <i />
      <i />
      <i />
      <i />
      <i />
      <i />
      <i />
    </div>
  </div>
</template>

<style >
@keyframes spin-animation {
  50% {
    transform: scale(0.4);
    opacity: 0.4;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.layer {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11111;
  background: #000;
  opacity: 0.4;
  top: 0;
  left: 0;

  .spin {
    // z-index: 10000;
    position: absolute;
    i {
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #fff;
      position: absolute;

      &:nth-child(1) {
        top: 25px;
        left: 0;
        animation: spin-animation 1s ease 0s infinite;
      }

      &:nth-child(2) {
        top: 17px;
        left: 17px;
        animation: spin-animation 1s ease -0.12s infinite;
      }

      &:nth-child(3) {
        top: 0px;
        left: 25px;
        animation: spin-animation 1s ease -0.24s infinite;
      }

      &:nth-child(4) {
        top: -17px;
        left: 17px;
        animation: spin-animation 1s ease -0.36s infinite;
      }

      &:nth-child(5) {
        top: -25px;
        left: 0;
        animation: spin-animation 1s ease -0.48s infinite;
      }

      &:nth-child(6) {
        top: -17px;
        left: -17px;
        animation: spin-animation 1s ease -0.6s infinite;
      }

      &:nth-child(7) {
        top: 0px;
        left: -25px;
        animation: spin-animation 1s ease -0.72s infinite;
      }

      &:nth-child(8) {
        top: 17px;
        left: -17px;
        animation: spin-animation 1s ease -0.84s infinite;
      }
    }
  }
}
</style>

<script>
export default {
  name: 'spin'
}
</script>
