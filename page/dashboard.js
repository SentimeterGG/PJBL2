import { listen, store } from "../global.js";

class PageDashboard extends HTMLElement {
  constructor() {
    super();

    // store latest pending data here if it arrives early
    this._pendingData = null;

    // listen to store changes
    listen((key, value) => {
      if (key === "pendingSubmission") {
        // keep the latest data and render if the component is connected
        this._pendingData = value;
        if (this.isConnected) this.createList(value);
      }
      if (key == "logged") {
        if (value == false) {
          location.hash = "/";
        }
      }
      if (key == "accepted" || key == "rejected") {
        this.updateStats();
      }
    });
  }

  connectedCallback() {
    // render template (make sure #request-parent-list exists here)
    this.innerHTML = `
<style> .dashboard-wrapper, .dashboard-statistic{ display: flex; width: 100%; } .dashboard-content{ padding-top: calc(var(--navbar-height) + 4rem); padding-inline: 4rem; width: 100%; } .dashboard-statistic{ width: 100%; gap: 4rem; justify-content: space-between; align-items: center; } .dashboard-statistic x-card{ width: 100%; aspect-ratio: 1/1; } .dashboard-sidebar{ display: flex; flex-direction: column; align-items: center; height: 100vh; padding-inline: 4rem; min-width: 32rem; padding-top: var(--navbar-height); border: 1px solid var(--color-background-600); } .photo-profile{ margin-top: 5rem; border-radius: 100%; border: 2px solid var(--color-accent-500); } .profile-info{ width: 100%; padding: 0.4rem 1rem; margin-bottom: 1rem; border: 1px solid var(--color-background-600); } </style>
<div class="dashboard-wrapper">
  <div class="dashboard-sidebar">
    <img class="photo-profile" src="../assets/photo-profile.png" alt="profile">
    <h3 style="margin-block:2rem;">Annete Black</h3>
    <div class="profile-info">
      <span>Email</span>
      <p>annete.black@email.com</p>
    </div>
    <div class="profile-info">
      <span>Gender</span>
      <p>Female</p>
    </div>
  </div>

  <div class="dashboard-content">
    <div class="dashboard-statistic">
      <x-card id="stat-pending" x-style="display:flex; flex-direction:column; align-items:center; justify-content:center;">
        <h1>0</h1>
        <p style="text-align:center">Diproses</p>
      </x-card>

      <x-card id="stat-accepted" x-style="display:flex; flex-direction:column; align-items:center; justify-content:center;">
        <h1>0</h1>
        <p style="text-align:center">Diterima</p>
      </x-card>

      <x-card id="stat-rejected" x-style="display:flex; flex-direction:column; align-items:center; justify-content:center;">
        <h1>0</h1>
        <p style="text-align:center">Ditolak</p>
      </x-card>
    </div>

    <br />
    <h1>Pengajuan Perubahan</h1>
    <br />

    <!-- This is the container we append items into -->
    <div id="request-parent-list"></div>
  </div>
</div>
`;
    this.updateStats();
    // if user is not logged redirect to home screen
    if (!store.loggedIn) {
      location.hash = "/";
    }
    // If we already have data (listener may have fired before connection),
    // render it now.
    const initial = this._pendingData ?? store.pendingSubmission;
    if (Array.isArray(initial) && initial.length > 0) {
      this.createList(initial);
    }
  }

  updateStats() {
    setTimeout(() => {
      const pending = this.querySelectorAll("request-edit-item").length;
      this.querySelector("#stat-pending h1").textContent = pending;
      this.querySelector("#stat-accepted h1").textContent = store.accepted;
      this.querySelector("#stat-rejected h1").textContent = store.rejected;
    }, 150);
  }
  createList(value) {
    // defensive: if value undefined try to use the store
    const data = Array.isArray(value) ? value : store.pendingSubmission;
    console.log("createList called with:", data);

    const container = this.querySelector("#request-parent-list");
    if (!container) {
      console.error("Container #request-parent-list not found!");
      return;
    }

    // clear
    container.innerHTML = "";

    if (!Array.isArray(data) || data.length === 0) {
      // nothing to render
      return;
    }

    data.forEach((item) => {
      try {
        this.renderPendingItem(item);
      } catch (err) {
        console.error("renderPendingItem error:", err, item);
      }
    });
    this.updateStats();
  }

  renderPendingItem(item) {
    const container = this.querySelector("#request-parent-list");
    if (!container) {
      console.error(
        "Container #request-parent-list not found in renderPendingItem!",
      );
      return;
    }

    const el = document.createElement("request-edit-item");
    el.setAttribute("title", item.title || "");
    el.setAttribute("email", item.email || "");
    el.setAttribute("new-info", item.newInfo || "");
    el.setAttribute("old-info", item.oldInfo || "");
    el.setAttribute("reason", item.reason || "");

    // append once configured
    container.appendChild(el);

    // debug logs (keep or remove)
    console.log("Appended element:", el);
  }
}

customElements.define("page-dashboard", PageDashboard);
