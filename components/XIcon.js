class XIcon extends HTMLElement {
  static get observedAttributes() {
    return ["name", "color"];
  }

  async attributeChangedCallback(name, oldVal, newVal) {
    if (name === "name" && newVal) {
      const res = await fetch(`assets/icons/${newVal}.svg`);
      const svgText = await res.text();
      this.innerHTML = svgText;
      this.style.display = "flex";
      this.style.justifyContent = "center";
      this.style.alignItems = "center";

      // apply color if it exists after loading svg
      const color = this.getAttribute("color");
      if (color) this._applyStyle(color);
    }

    if (name === "color" && newVal) {
      this._applyStyle(newVal);
    }
  }

  _applyStyle(color) {
    const svg = this.querySelector("svg");

    if (svg) {
      svg.style.height = "100%";
      svg.style.width = "100%";
      svg.style.fill = color;
    }
  }
}

customElements.define("x-icon", XIcon);
