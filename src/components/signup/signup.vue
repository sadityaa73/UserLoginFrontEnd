<template>
  <div class="mainContainer">
    <div class="innerContainer">
      <div class="loading" v-if="loading">
        <b-spinner variant="success"></b-spinner>
      </div>
      <div class="success" v-if="yes">
        <div class="successLogo">
          <img src="../../assets/success.png" alt="success" class="logo" />
          <p class="successText">signup successfully!!</p>
        </div>
      </div>
      <div class="inputContainer">
        <input type="text" placeholder="firstname" class="userInput" />
        <input type="text" placeholder="lastname" class="userInput" />
        <input type="text" placeholder="mobile" class="userInput" />
        <input type="text" placeholder="email" class="userInput" />
        <input type="text" placeholder="password" class="userInput" />
        <input
          type="password"
          placeholder="re-enter password"
          id="password"
          class="userInput"
        />
        <span class="checkbox"
          ><input type="checkbox" @click="show" />show Password</span
        >
      </div>
      <div class="buttonContainer">
        <button class="login" @click="login">signup</button>
      </div>
    </div>
    <div class="MobileInnerContainer">
      <div class="loading" v-if="loading">
        <b-spinner variant="success"></b-spinner>
      </div>
      <div class="success" v-if="yes">
        <div class="successLogo">
          <img src="../../assets/success.png" alt="success" class="logo" />
          <p class="successText">signup successfull!!</p>
        </div>
      </div>
      <div class="inputContainer">
        <input type="text" placeholder="firstname" class="userInput" />
        <input type="text" placeholder="lastname" class="userInput" />
        <input type="text" placeholder="mobile" class="userInput" />
        <input type="text" placeholder="email" class="userInput" />
        <input type="text" placeholder="password" class="userInput" />
        <input
          type="password"
          placeholder="password"
          id="password"
          class="userInput"
        />
        <span class="checkbox"
          ><input type="checkbox" @click="show" />show Password</span
        >
      </div>
      <div class="buttonContainer">
        <button class="login" @click="login">signup</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "signup",
  components: {},
  data() {
    return {
      yes: false,
      loading: false,
    };
  },
  methods: {
    show() {
      var password = document.getElementById("password");
      if (password.type === "password") {
        password.type = "text";
      } else {
        password.type = "password";
      }
    },
    login() {
      this.loading = true;
      setTimeout(() => {
        this.loading = !true;
        this.yes = true;
        setTimeout(() => {
          this.yes = !true;
        }, 1500);
      }, 2000);
    },
  },
};
</script>
<style scoped>
.mainContainer {
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url("../../assets/backgroundImage.jpg");
}
.loading {
  position: absolute;
  background-color: #332f2fc4;
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
}

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
.innerContainer {
  display: flex;
  border: 1px solid black;
  border-radius: 14px;
  width: 40%;
  height: 70%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.MobileInnerContainer {
  display: none;
  border: 1px solid black;
  border-radius: 14px;
  width: 40%;
  height: 70%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.innerContainer:hover {
  border: none;
  box-shadow: 0px 0px 64px 17px #418058;
}
.inputContainer {
  width: 60%;
  height: 64%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 16px;
  overflow-x: auto;
}
.userInput {
  height: 42px;
  border-radius: 5px;
  border: 1px outset black;
  text-align: center;
  background-color: transparent;
}
.userInput:hover {
  border: none;
  box-shadow: 0px 0px 64px 17px #418058;
}

.buttonContainer {
  width: 50%;
  height: 10%;
  display: flex;
  justify-content: center;
}
.resetbuttonContainer {
  margin-top: 16px;
  width: 50%;
  height: 10%;
  display: flex;
  justify-content: space-between;
}
.login {
  width: 40%;
  border-radius: 7px;
  border: 1px inset black;
  font-family: helvetica;
  font-size: 15px;
}
.login:hover {
  width: 45%;
  transition: width 0.4s;
  border: none;
  box-shadow: 0px 0px 64px 17px #418058;
}
.login:active {
  width: 48%;
  transition: width 0.2s;
  border: none;
  color: white;
  background-color: green;
  box-shadow: 0px 0px 64px 17px #418058;
}
.signup {
  font-size: 17px;
}
.signup:active {
  color: blue;
  text-shadow: 0px 0px 17px;
}
.forget:active {
  color: blue;
  text-shadow: 0px 0px 17px;
}
@media (max-width: 848px) {
  .innerContainer {
    display: none;
    border: 1px solid black;
    border-radius: 14px;
    width: 40%;
    height: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .MobileInnerContainer {
    display: flex;
    border: 1px solid black;
    border-radius: 14px;
    width: 60%;
    height: 70%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .MobileInnerContainer:hover {
    border: none;
    box-shadow: 0px 0px 64px 17px #418058;
  }
}
@media (max-width: 571px) {
  .resetbuttonContainer {
    margin-top: 16px;
    width: 50%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
}
@media (max-width: 400px) {
  .MobileInnerContainer[data-v-dd7a443a] {
    display: flex;
    border: 1px solid black;
    border-radius: 14px;
    width: 85%;
    height: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
