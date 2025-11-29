import { listen } from "../global.js";

class UINavigation extends HTMLElement {
  constructor() {
    super();
    listen((key, value) => {
      if (key === "loggedIn") this.updateNavbar(value);
    });
  }

  connectedCallback() {
    this.innerHTML = `
    <nav class="nav">
      <div class="nav_left">
        <a href="/#" class="nav_left_logo"><img class="nav_left_logo" src="./assets/logo.svg" alt="" /></a>
      </div>
      <div class="nav_center">
        <x-input class="search-input"></x-input>
        <div class="suggestion-search"></div>
      </div>
      <div class="nav_right">
        <a href="#/login"><button id="btn_login">Login</button></a>
        <a href="#/dashboard" style="height: 100%;"><img style="border-radius: 100%;height: 100%; border: 1px solid var(--color-accent-500)" src="../assets/photo-profile.png"></a>
      </div>
    </nav>
    `;

    this.updateNavbar(false);
    this.initSearchSuggestions();
  }

  initSearchSuggestions() {
    const searchInput = this.querySelector(".search-input input");
    const suggestionSearch = this.querySelector(".suggestion-search");

    // Default suggestions when input is empty
    const defaultSuggestions = [
      { name: "Kalimantan", url: "#/peta/kalimantan" },
      { name: "Jawa", url: "#/peta/jawa" },
      { name: "Sumatra", url: "#/peta/sumatra" },
      { name: "Papua", url: "#/peta/papua" },
    ];

    const sampleData = [
      // Sumatra Island
      { name: "Sumatra", url: "#/peta/sumatra" },
      { name: "Sumatra - Aceh", url: "#/peta/sumatra" },
      { name: "Sumatra - Sumatera Utara", url: "#/peta/sumatra" },
      { name: "Sumatra - Sumatera Barat", url: "#/peta/sumatra" },
      { name: "Sumatra - Riau", url: "#/peta/sumatra" },
      { name: "Sumatra - Kepulauan Riau", url: "#/peta/sumatra" },
      { name: "Sumatra - Jambi", url: "#/peta/sumatra" },
      { name: "Sumatra - Sumatera Selatan", url: "#/peta/sumatra" },
      { name: "Sumatra - Bengkulu", url: "#/peta/sumatra" },
      { name: "Sumatra - Lampung", url: "#/peta/sumatra" },
      { name: "Sumatra - Bangka Belitung", url: "#/peta/sumatra" },

      // Java Island
      { name: "Jawa", url: "#/peta/jawa" },
      { name: "Jawa - DKI Jakarta", url: "#/peta/jawa" },
      { name: "Jawa - Jawa Barat", url: "#/peta/jawa" },
      { name: "Jawa - Jawa Tengah", url: "#/peta/jawa" },
      { name: "Jawa - DI Yogyakarta", url: "#/peta/jawa" },
      { name: "Jawa - Jawa Timur", url: "#/peta/jawa" },
      { name: "Jawa - Banten", url: "#/peta/jawa" },

      // Bali
      { name: "Bali", url: "#/peta/bali" },

      // Kalimantan Island
      { name: "Kalimantan", url: "#/peta/kalimantan" },
      { name: "Kalimantan - Kalimantan Barat", url: "#/peta/kalimantan" },
      { name: "Kalimantan - Kalimantan Tengah", url: "#/peta/kalimantan" },
      { name: "Kalimantan - Kalimantan Selatan", url: "#/peta/kalimantan" },
      { name: "Kalimantan - Kalimantan Timur", url: "#/peta/kalimantan" },
      { name: "Kalimantan - Kalimantan Utara", url: "#/peta/kalimantan" },

      // Sulawesi Island
      { name: "Sulawesi", url: "#/peta/sulawesi" },
      { name: "Sulawesi - Sulawesi Utara", url: "#/peta/sulawesi" },
      { name: "Sulawesi - Sulawesi Tengah", url: "#/peta/sulawesi" },
      { name: "Sulawesi - Sulawesi Selatan", url: "#/peta/sulawesi" },
      { name: "Sulawesi - Sulawesi Tenggara", url: "#/peta/sulawesi" },
      { name: "Sulawesi - Gorontalo", url: "#/peta/sulawesi" },
      { name: "Sulawesi - Sulawesi Barat", url: "#/peta/sulawesi" },

      // Nusa Tenggara
      { name: "Nusa Tenggara", url: "#/peta/nt" },
      { name: "Nusa Tenggara - Nusa Tenggara Barat", url: "#/peta/nt" },
      { name: "Nusa Tenggara - Nusa Tenggara Timur", url: "#/peta/nt" },

      // Maluku
      { name: "Maluku", url: "#/peta/maluku" },
      { name: "Maluku - Maluku", url: "#/peta/maluku" },
      { name: "Maluku - Maluku Utara", url: "#/peta/maluku" },

      // Papua
      { name: "Papua", url: "#/peta/papua" },
      { name: "Papua - Papua", url: "#/peta/papua" },
      { name: "Papua - Papua Barat", url: "#/peta/papua" },
      { name: "Papua - Papua Tengah", url: "#/peta/papua" },
      { name: "Papua - Papua Pegunungan", url: "#/peta/papua" },
      { name: "Papua - Papua Selatan", url: "#/peta/papua" },
      { name: "Papua - Papua Barat Daya", url: "#/peta/papua" },
    ];

    const filterSuggestions = (query) => {
      if (!query.trim()) return defaultSuggestions;
      const lowerQuery = query.toLowerCase();
      return sampleData.filter((item) =>
        item.name.toLowerCase().includes(lowerQuery),
      );
    };

    const highlightMatch = (text, query) => {
      if (!query.trim()) return text;
      const regex = new RegExp(`(${query})`, "gi");
      return text.replace(regex, '<span class="highlight">$1</span>');
    };

    const displaySuggestions = (suggestions, query) => {
      if (suggestions.length === 0) {
        suggestionSearch.innerHTML = `
        <search-suggestion name="Island not found." url="#">
        </search-suggestion>
`;
        suggestionSearch.classList.add("active");
        return;
      }

      const html = suggestions
        .map(
          (suggestion) => `
        <search-suggestion name="${suggestion.name}" url="${suggestion.url}">
          ${highlightMatch(suggestion.name, query)}
        </search-suggestion>
      `,
        )
        .join("");

      suggestionSearch.innerHTML = html;
      suggestionSearch.classList.add("active");

      // Add click handlers to suggestion items
      // Add click handlers to suggestion items
      const items = suggestionSearch.querySelectorAll("search-suggestion");
      items.forEach((item) => {
        item.addEventListener("click", (e) => {
          e.preventDefault(); // Prevent the default link behavior
          const url = item.getAttribute("url");
          // Clear input and hide suggestions
          searchInput.value = "";
          suggestionSearch.classList.remove("active");
          // Navigate to the URL
          window.location.hash = url;
        });
      });
    };

    // Show default suggestions on focus
    searchInput.addEventListener("focus", function () {
      const query = this.value;
      const suggestions = filterSuggestions(query);
      displaySuggestions(suggestions, query);
    });

    // Input event listener
    searchInput.addEventListener("input", function () {
      const query = this.value;
      const suggestions = filterSuggestions(query);
      displaySuggestions(suggestions, query);
    });

    // Hide suggestions on blur (unfocus)
    searchInput.addEventListener("blur", () => {
      // Delay to allow click event on suggestions to fire first
      setTimeout(() => {
        suggestionSearch.classList.remove("active");
      }, 200);
    });

    // Handle Enter key
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const query = searchInput.value.trim();
        const suggestions = filterSuggestions(query);
        if (suggestions.length > 0) {
          searchInput.value = "";
          suggestionSearch.classList.remove("active");
          window.location.hash = suggestions[0].url;
        }
      }
    });
  }

  updateNavbar(logged) {
    const loginBtn = this.querySelector(".nav_right a");
    const photoProfile = this.querySelector(".nav_right img");
    if (logged) {
      photoProfile.style.display = "block";
      loginBtn.style.display = "none";
    } else {
      photoProfile.style.display = "none";
      loginBtn.style.display = "block";
    }
  }
}

customElements.define("ui-nav", UINavigation);
