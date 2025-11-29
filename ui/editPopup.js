import { store } from "../global.js";

class editPopup extends HTMLElement {
  constructor() {
    super();
    this.subMap = {
      sumatra: "Sumatra (Island)",
      jawa: "Jawa (Island)",
      papua: "Papua (Island)",
      maluku: "Maluku (Island)",
      nt: "Nusa Tenggara",
      bali: "Bali",
      kalimantan: "Kalimantan (Island)",
      sulawesi: "Sulawesi (Island)",
      "": "default",
    };
  }

  connectedCallback() {
    this.innerHTML = `
<style>
.edit-request-form {
  border: 1px solid var(--color-accent-500);
  background: var(--color-background-500);
  padding: 3rem;
}
.edit-request-form__title {
  margin-bottom: 1.5rem;
}
.edit-request-form__fields {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.edit-request-form__textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-accent-500);
  resize: vertical;
  background:var(--color-primary-50); 
  font-size: var(--text-psm);
}
.edit-request-form__textarea::placeholder{
  color: var(--color-secondary-500);
}
.edit-request-form__textarea:focus {
  outline: none;
  border-color: var(--color-accent-500);
}
.edit-request-form__textarea--error {
  border-color: var(--color-error-500);
}
.edit-request-form__spacer {
  height: 0.5rem;
}
.edit-request-form__actions {
  display: flex;
  gap: 0.5rem;
}
.edit-request-form__button--cancel {
  background: var(--color-error-500);
  color: white;
}
.edit-request-form__error {
  color: var(--color-error-500);
  font-size: var(--text-psm);
  margin-top: 0.5rem;
  display: none;
}
.edit-request-form__error--visible {
  display: block;
}
</style>
<div class="edit-request-form">
  <h3 class="edit-request-form__title">Ajukan Permintaan Edit Konten</h3>
  
  <div class="edit-request-form__fields">
    <x-input id="edit-title" icon="pen" placeholder="Apa yang ingin Anda ubah? (contoh: Perbarui data populasi Jawa)"></x-input>
    <x-input id="edit-email" icon="envelope" placeholder="Alamat email Anda untuk notifikasi pembaruan"></x-input>
    
    <textarea 
      id="edit-newinfo"
      class="edit-request-form__textarea" 
      rows="6" 
      placeholder="Usulan Perubahan
Contoh:
- Saat ini: Populasi ±151 juta jiwa
- Usulan: Populasi ±156 juta jiwa (data 2024)"></textarea>
    
    <textarea 
      id="edit-reason"
      class="edit-request-form__textarea" 
      rows="6" 
      placeholder="Alasan Perubahan
Jelaskan:
- Mengapa perubahan ini diperlukan
- Sumber atau referensi yang mendukung edit Anda
- Bagaimana ini meningkatkan akurasi atau relevansi
Contoh: Data populasi saat ini dari sensus 2020. Statistik terbaru dari BPS (2024) menunjukkan pertumbuhan signifikan yang perlu dicerminkan untuk akurasi."></textarea>
    
    <div class="edit-request-form__error" id="error-message">
      Semua field harus diisi!
    </div>
    
    <div class="edit-request-form__actions">
      <button type="submit" id="submit" class="edit-request-form__button">Kirim Permintaan Edit</button>
      <button id="cancel" class="edit-request-form__button edit-request-form__button--cancel">Batal</button>
    </div>
  </div>
</div>
`;

    const submitButton = this.querySelector("#submit");
    const cancelButton = this.querySelector("#cancel");
    const errorMessage = this.querySelector("#error-message");

    const titleInput = this.querySelector("#edit-title input");
    const emailInput = this.querySelector("#edit-email input");
    const newInfoTextarea = this.querySelector("#edit-newinfo");
    const reasonTextarea = this.querySelector("#edit-reason");

    submitButton.addEventListener("click", () => {
      const titleValue = titleInput.value;
      const emailValue = emailInput.value;
      const newInfoValue = newInfoTextarea.value;
      const reasonValue = reasonTextarea.value;

      errorMessage.classList.remove("edit-request-form__error--visible");
      newInfoTextarea.classList.remove("edit-request-form__textarea--error");
      reasonTextarea.classList.remove("edit-request-form__textarea--error");

      if (!titleValue || !emailValue || !newInfoValue || !reasonValue) {
        errorMessage.classList.add("edit-request-form__error--visible");

        if (!newInfoValue)
          newInfoTextarea.classList.add("edit-request-form__textarea--error");
        if (!reasonValue)
          reasonTextarea.classList.add("edit-request-form__textarea--error");
        return;
      }

      // ---------------------------------
      // 1. Get hash (without "#/peta/")
      // ---------------------------------
      const hash = location.hash.replace("#/peta/", "");

      // ---------------------------------
      // 2. Map hash → island name (Jawa → Jawa (Island))
      // ---------------------------------
      const islandName = this.subMap[hash] || "default";

      // ---------------------------------
      // 3. Get oldInfo from store.data
      // ---------------------------------
      const oldInfo = store.data[islandName]?.infoUmum || "";

      // ---------------------------------
      // 4. Push submission with oldInfo
      // ---------------------------------
      store.pendingSubmission = [
        ...store.pendingSubmission,
        {
          title: titleValue,
          email: emailValue,
          newInfo: newInfoValue,
          reason: reasonValue,
          oldInfo: oldInfo,
        },
      ];

      console.log(store.pendingSubmission);

      // Close popup
      titleInput.value = "";
      emailInput.value = "";
      newInfoTextarea.value = "";
      reasonTextarea.value = "";
      this.classList.remove("active");
    });
    cancelButton.addEventListener("click", () => {
      titleInput.value = "";
      emailInput.value = "";
      newInfoTextarea.value = "";
      reasonTextarea.value = "";
      this.classList.remove("active");
    });
  }
}
customElements.define("edit-popup", editPopup);
