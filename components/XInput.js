class XSearch extends HTMLElement {
  constructor() {
    super();
    this.icon = this.getAttribute("icon") || "search";
    this.placeholder = this.getAttribute("placeholder") || "Search...";
    this.type = this.getAttribute("type") || "text";
  }
  connectedCallback() {
    this.style.width = "100%";
    this.style.height = "100%";
    this.innerHTML = `
<style>
.input_wrapper {
  width: 100%;
  position: relative;
}
.input_wrapper_icon{
  position: absolute;
  aspect-ratio: 1/1;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  height: 1rem;
}
.input_wrapper_input {
  width: 100%;
  padding-block: 0.8rem;
  padding-left: 3rem;
  background: var(--color-primary-50);
  font-size: var(--text-psm);
  border: 1px solid var(--color-accent-500);
}
.input_wrapper_input::placeholder {
  color: var(--color-secondary-500);
  font-size: var(--text-psm);
}
</style>
<div class="input_wrapper">
  <x-icon class="input_wrapper_icon" name="${this.icon}" color="var(--color-accent-500)"></x-icon>
  <input class="input_wrapper_input" placeholder="${this.placeholder}" type="${this.type}" name="" value="" />
</div>
`;
  }
}
customElements.define("x-input", XSearch);
