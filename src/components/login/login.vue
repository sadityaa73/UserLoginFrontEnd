<template>
  <div class="mainContainer">
    <div class="innerContainer">
      <div class="inputContainer">
        <input type="text" placeholder="username" class="userInput" />
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
        <button class="login">login</button>
      </div>
      <div class="resetbuttonContainer">
        <span class="signup">signup</span
        ><span class="forget">forget password</span>
      </div>
    </div>
    <div class="MobileInnerContainer">
      <div class="inputContainer">
        <input type="text" placeholder="username" class="userInput" />
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
        <button class="login">login</button>
      </div>
      <div class="resetbuttonContainer">
        <span class="signup">signup</span
        ><span class="forget">forget password</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  components: {},
  data() {
    return {};
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
.innerContainer {
  display: flex;
  border: 1px solid black;
  border-radius: 14px;
  width: 50%;
  height: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.MobileInnerContainer {
  display: none;
  border: 1px solid black;
  border-radius: 14px;
  width: 40%;
  height: 50%;
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
  height: 36%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 16px;
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
  transform: width 0.2s;
  border: none;
  box-shadow: 0px 0px 64px 17px #418058;
}
.login:active {
  width: 45%;
  transform: width 0.2s;
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
    height: 50%;
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
