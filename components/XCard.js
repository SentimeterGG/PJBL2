class XCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.xstyles = this.getAttribute("x-style") || "";
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
<style>
.card {
  border: 1px solid var(--color-background-600);
  width: 100%;
  height: 100%;
  padding: 4rem;
  box-sizing: border-box;
}
</style>
<div class="card" style="${this.xstyles}">
  <slot />
</div>
`;
  }
}

customElements.define("x-card", XCard);
