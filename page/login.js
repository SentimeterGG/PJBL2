import { store } from "../global.js";

class PageLogin extends HTMLElement {
  constructor() {
    super();
    this.handleLogin = this.handleLogin.bind(this);
  }
  connectedCallback() {
    this.innerHTML = `
<style>
.message{
  display: none;
  border: 1px solid;
  padding: 0.8rem 1.2rem;
}
.message.error{
  border-color: var(--color-error-500);
  background: var(--color-error-50);
}
.message.error small{
  color: var(--color-error-500) !important;
} 
.message.success{
  border-color: var(--color-accent-500);
  background: var(--color-accent-50);
}
.message.success small{
  color: var(--color-accent-500) !important;
} 
</style>
<div class="login">
  <div class="login_wrapper">
    <h2>Login</h2>
    <br />
    <div class="message"><small>Incorrect username or password.</small></div>
    <x-input placeholder="Username" icon="user" id="username"></x-input>
    <x-input placeholder="Password" icon="lock" id="password" type="password"></x-input>
    <button id="login" style="width: 100%; justify-content: center">
      Login
    </button>
    <a href="">Want become and admin?</a>
  </div>
</div>

Login

Want become and admin?
`;
    const buttonLogin = this.querySelector("#login");
    buttonLogin.addEventListener("click", this.handleLogin);
    password.addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.handleLogin();
    });
    username.addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.handleLogin();
    });
  }

  handleLogin() {
    let username = this.querySelector("#username input");
    let password = this.querySelector("#password input");
    const message = this.querySelector(".message");
    const messageText = this.querySelector(".message small");
    if (username.value == "Annete Black" && password.value == "helloworld123") {
      messageText.textContent = "Login successfully";
      message.classList.remove("error");
      message.classList.add("success");
      store.loggedIn = true;
      location.hash = "#/dashboard";
    } else {
      messageText.textContent = "Incorrect username or password";
      message.classList.remove("success");
      message.classList.add("error");
    }
    message.style.display = "block";
  }

  // Trigger login on Enter
}
customElements.define("page-login", PageLogin);
