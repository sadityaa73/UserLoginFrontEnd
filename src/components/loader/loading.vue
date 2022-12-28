<template>
  <div>
    <div class="loading">
      <b-spinner variant="success"></b-spinner>
    </div>
    <div class="success">
      <div class="successLogo">
        <img src="../../assets/success.png" alt="success" class="logo" />
        <p class="successText">login</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "loading",
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
.spinner-border {
  --bs-spinner-width: 4rem;
  --bs-spinner-height: 4rem;
  --bs-spinner-vertical-align: 39.875em;
  --bs-spinner-border-width: 0.25em;
  --bs-spinner-animation-speed: 0.75s;
  --bs-spinner-animation-name: spinner-border;
  border: var(--bs-spinner-border-width) solid currentcolor;
  border-right-color: rebeccapurple;
  border-left-color: red;
  border-top-color: green;
  border-bottom-color: yellow;
}
.success {
  display: flex;
  border: 1px solid black;
  width: 32%;
  height: 39%;
  position: absolute;
  border-radius: 27px;
  z-index: 1;
  background-color: #030303c9;
  animation-name: successLogo;
  animation-duration: 2s;
}
.successLogo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo {
  width: 25%;
}
.successText {
  color: white;
  font-size: 32px;
  font-family: helevetica;
}
@keyframes successLogo {
  0% {
    left: 34%;
    bottom: 0%;
  }
  50% {
    left: 34%;
    bottom: 29.2%;
  }
  55% {
    left: 34%;
    bottom: 29.2%;
  }
  60% {
    left: 34%;
    bottom: 29.2%;
  }
  100% {
    left: 34%;
    bottom: 0%;
  }
}
</style>
