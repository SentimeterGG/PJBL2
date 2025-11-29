import { applyUpdate, store } from "../global.js";

class RequestEditItem extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["old-info", "new-info", "title", "email", "reason"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const oldValue = this.getAttribute("old-info") || "old lorem Ipsum";
    const newValue = this.getAttribute("new-info") || "new Lorem Ipsum";
    const title = this.getAttribute("title") || "Title";
    const email = this.getAttribute("email") || "email@email.com";
    const reason = this.getAttribute("reason") || "Lorem Ipsum";

    this.innerHTML = `
<style>
.request-edit-item {
  border: 1px solid var(--color-accent-500);
  border-bottom: 0px !important;
  background: var(--color-background-500);
  margin-bottom: 1rem;
}

.request-edit-item__header {
  padding: 1.5rem;
  border-bottom: 1px solid var(--color-accent-500);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.request-edit-item__toggle {
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  border: 1px solid var(--color-background-600);
  padding: 1rem;
}

.request-edit-item__toggle x-icon{
  transition: transform 0.3s ease-out;
}
.request-edit-item__toggle--expanded {
  transform: rotate(45deg);
}

.request-edit-item__content {
  overflow: hidden;
  height: 0;
  padding: 0 1.5rem;
  transition: height 0.35s ease, padding 0.35s ease;
}

.request-edit-item__content--visible {
  border-bottom: 1px solid var(--color-accent-500);
  padding: 1.5rem;
}

.request-edit-item__change {
  margin-bottom: 1.5rem;
}

.request-edit-item__old {
  margin-bottom: 0.5rem;
}

.request-edit-item__arrow {
  margin: 0.5rem 0;
  font-size: 1.5rem;
}

.request-edit-item__new {
  margin-bottom: 1.5rem;
}

.request-edit-item__label {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.request-edit-item__value {
  margin: 0;
}

.request-edit-item__actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.request-edit-item__button {
  padding: 0.75rem 1.5rem;
  border: none;
  cursor: pointer;
  font-size: var(--text-psm);
  font-weight: 500;
  transition: opacity 0.2s ease;
}

.request-edit-item__button:hover {
  opacity: 0.9;
}

.request-edit-item__button--accept {
  background: var(--color-accent-500);
  color: white;
}

.request-edit-item__button--reject {
  background: var(--color-error-500);
  color: white;
}
</style>

<div class="request-edit-item">
  <div class="request-edit-item__header">
    <h6>${title}</h6>
    <span class="request-edit-item__toggle"><x-icon name="plus" color="black"></x-icon></span>
  </div>
  
  <div class="request-edit-item__content">
    <div class="request-edit-item__change">
      <div class="request-edit-item__old">${oldValue}</div>
      <div class="request-edit-item__arrow">↓</div>
      <div class="request-edit-item__new">${newValue}</div>
    </div>
    
    <div class="request-edit-item__email">
      <div class="request-edit-item__label">Email:</div>
      <p class="request-edit-item__value">${email}</p>
    </div>
    
    <div class="request-edit-item__reason">
      <div class="request-edit-item__label">Reason :</div>
      <p class="request-edit-item__value">${reason}</p>
    </div>
    
    <div class="request-edit-item__actions">
      <button class="request-edit-item__button request-edit-item__button--accept">Terima</button>
      <button class="request-edit-item__button request-edit-item__button--reject">Tolak</button>
    </div>
  </div>
</div>
`;

    this.setupEventListeners();
  }

  setupEventListeners() {
    const header = this.querySelector(".request-edit-item__header");
    const content = this.querySelector(".request-edit-item__content");
    const toggle = this.querySelector(".request-edit-item__toggle");
    const toggleIcon = this.querySelector(".request-edit-item__toggle x-icon");

    header.addEventListener("click", () => {
      const isOpen = content.classList.contains(
        "request-edit-item__content--visible",
      );

      if (isOpen) {
        // Collapse
        content.style.height = content.scrollHeight + "px";
        requestAnimationFrame(() => {
          content.style.height = "0px";
        });
        content.classList.remove("request-edit-item__content--visible");
      } else {
        // Expand
        content.style.height = content.scrollHeight + "px";
        content.classList.add("request-edit-item__content--visible");

        content.addEventListener(
          "transitionend",
          () => {
            content.style.height = "auto";
          },
          { once: true },
        );
      }

      toggleIcon.classList.toggle("request-edit-item__toggle--expanded");
    });

    const acceptButton = this.querySelector(
      ".request-edit-item__button--accept",
    );
    const rejectButton = this.querySelector(
      ".request-edit-item__button--reject",
    );

    acceptButton.addEventListener("click", () => {
      const oldValue = this.getAttribute("old-info");
      const newValue = this.getAttribute("new-info");

      applyUpdate(oldValue, newValue);
      console.log(store.data);
      store.accepted = store.accepted + 1;
      const title = this.getAttribute("title");

      // clone the array so Proxy can detect the change
      const updated = store.pendingSubmission.filter(
        (item) => item.title !== title,
      );

      // reassign -> Proxy fires correctly
      store.pendingSubmission = updated;
      this.remove();
    });

    rejectButton.addEventListener("click", (e) => {
      store.rejected = store.rejected + 1;
      const title = this.getAttribute("title");

      // clone the array so Proxy can detect the change
      const updated = store.pendingSubmission.filter(
        (item) => item.title !== title,
      );

      // reassign -> Proxy fires correctly
      store.pendingSubmission = updated;
      this.remove();
    });
  }
}

customElements.define("request-edit-item", RequestEditItem);
