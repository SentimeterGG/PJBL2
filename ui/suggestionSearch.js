class suggestionSearch extends HTMLElement {
  constructor() {
    super();
    this.name = this.getAttribute("name") || "";
    this.url = this.getAttribute("url") || "";
  }
  connectedCallback() {
    this.innerHTML = `
<style>
.search-suggestion-item{
  width: 100%;
  border: 1px solid var(--color-accent-500);
  background: white;
  padding: 0.8rem 1rem;
  margin-top: -1px;
}

.search-suggestion-link{
  text-decoration: none;
}
</style>
<a class="search-suggestion-link" href="${this.url}">
  <div class="search-suggestion-item">${this.name}</div>
</a>
`;
  }
}
customElements.define("search-suggestion", suggestionSearch);
