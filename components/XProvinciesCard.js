class XProvinciesCard extends HTMLElement {
  constructor() {
    super();
    this.name = this.getAttribute("name") || "Jawa Tengah";
  }
  connectedCallback() {
    this.setAttribute("title", this.name);
    this.innerHTML = `
<style>
.provincies-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  background: var(--color-background-600);
  border: 1px solid var(--color-accent-500);
}
</style>
<div class="provincies-card">
  <img src="../assets/provincies/Property 1=${this.name}.png">
</div>
`;
  }
}
customElements.define("x-provincies-card", XProvinciesCard);
