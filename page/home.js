class PageHome extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <section class="cta">
        <img class="cta_bg" src="./assets/MapIndonesia.svg" alt="" />
        <h1 class="cta_title">
          PETA INFORMASI <br />
          INDONESIA
        </h1>
        <p class="cta_subtitle">Jelajahi Informasi dengan Peta Interaktif</p>
        <a href="#/peta">        <button
          style="
            padding: 0.3rem 0.3rem 0.3rem 1.5rem;
            border: 1px solid var(--color-accent-400);
          "
        >
          Mulai Jelajah 
          <div
            style="
              margin-left: 1.5rem;
              width: 2.5rem;
              padding: 0.5rem;
              aspect-ratio: 1/1;
              background-color: white;
            "
          >
            <x-icon name="arrow" color="var(--color-accent-500)"></x-icon>
          </div>
        </button>
        </a>
      </section>
      <div class="container">
        <section class="three-section">
          <div class="three-section_title">
            <h1>INFORMASI DALAM PETA</h1>
            <p>Interaktif Akurat, dan dapat dirubah</p>
          </div>
          <div class="three-section_wrapper">
            <x-card>
              <div class="three-section_card_icon">
                <x-icon name="interaktif"></x-icon>
              </div>
              <h4>Interaktif</h4>
              <p>
                cukup klik pulau yang ingin dijelajah, tanpa repot membuka menu
                atau mencari secara manual. informasi langsung muncul dengan
                mudah
              </p>
            </x-card>

            <x-card style="margin-inline: -1px">
              <div class="three-section_card_icon">
                <x-icon name="akurat"></x-icon>
              </div>
              <h4>Informasi Akurat</h4>
              <p>
                Semua data diambil dari sumber resmi seperti Badan Pusat
                Statistik dan kementerian terkait. Informasi diperiksa dan
                diperbarui secara berkala agar tetap relevan serta dapat
                dipercaya.
              </p>
            </x-card>
            <x-card>
              <div class="three-section_card_icon">
                <x-icon name="edit"></x-icon>
              </div>
              <h4>Edit Informasi</h4>
              <p>
                Informasi dapat diperbarui oleh pengguna dan diverifikasi oleh
                admin untuk menjaga keakuratan data.
              </p>
            </x-card>
          </div>
        </section>
        <section class="demonstration">
          <div class="demonstration_two-column">
            <x-card style="margin-right: -1px">
              <div class="demonstration_card_title">
                <h4>Fitur Pencarian</h4>
                <p>
                  Kesulitan memilih pulau? Jangan khawatir, tersedia fitur
                  pencarian yang memudahkan Anda menemukan Informasi dengan
                  cepat dan tepat
                </p>
              </div>
              <video width="100%" height="" autoplay muted loop>
                <source src="./assets/SearchDemonstration.mp4" type="" />
              </video>
            </x-card>
            <x-card>
              <div class="demonstration_card_title">
                <h4>Edit Informasi</h4>
                <p>
                  Menemukan informasi keliru atau usang? Ajukan permintaan edit
                  kepada admin.
                </p>
              </div>
              <video width="100%" height="" autoplay muted loop>
                <source src="./assets/EditInformasiDemonstration.mp4" type="" />
              </video>
            </x-card>
          </div>
          <x-card style="margin-top: -1px">
            <div class="demonstration_card_title">
              <h4>Peta Interaktif</h4>
              <p>
                Temukan informasi dari Sabang sampai Merauke lewat peta yang
                mudah digunakan.
              </p>
            </div>
            <video width="100%" height="" autoplay muted loop>
              <source src="./assets/PetaInteraktifDemonstration.mp4" type="" />
            </video>
          </x-card>
        </section>
        <section class="faq">
          <x-card>
            <p>FAQ</p>
            <h2>Jawaban atas pertanyaan Anda.</h2>
            <br />
            <div class="faq_question">
              <div>
                <ui-faq
                  question="Apakah website ini gratis digunakan?"
                  answer="Ya, website ini sepenuhnya gratis untuk semua pengguna. Kamu bisa langsung menjelajahi peta tanpa harus membuat akun atau membayar."
                ></ui-faq>

                <ui-faq
                  question="Apakah saya bisa ikut menambahkan atau mengubah informasi di peta?"
                  answer="Ya, pengguna bisa mengajukan edit atau tambahan informasi. Setiap perubahan akan direview oleh admin sebelum dipublikasikan."
                ></ui-faq>

                <ui-faq
                  question="Apakah saya perlu membuat akun untuk menggunakan website ini?"
                  answer="Tidak. Kamu bisa langsung menggunakan dan menjelajahi peta tanpa registrasi. Namun, jika ingin berkontribusi dengan menambahkan atau mengedit informasi, kamu perlu membuat akun."
                ></ui-faq>
              </div>

              <div>
                <ui-faq
                  question="Dari mana sumber informasi di dalam peta?"
                  answer="Informasi berasal dari data publik, literatur geografi, serta kontribusi komunitas. Semua data dikurasi agar tetap relevan dan bermanfaat."
                ></ui-faq>

                <ui-faq
                  question="Apakah Peta ini hanya menampilkan informasi geografis?"
                  answer="Untuk saat ini, website ini hanya menampilkan informasi geografis."
                ></ui-faq>

                <ui-faq
                  question="Bagaimana jika saya menemukan informasi yang salah atau kurang lengkap?"
                  answer="Kamu bisa menggunakan fitur request edit untuk melaporkan atau menambahkan informasi. Tim admin akan memverifikasi agar tetap akurat."
                ></ui-faq>
              </div>
            </div>
          </x-card>
        </section>
      </div>
      
      <section class="cta" style="margin: 0;">
        <img class="cta_bg" src="./assets/MapIndonesia.svg" alt="" />
        <h1 class="cta_title">
          MARI JELAJAH<br />
          INDONESIA
        </h1>
        <br />
        <a href="#/peta">
          <button
          style="
            padding: 0.3rem 0.3rem 0.3rem 1.5rem;
            border: 1px solid var(--color-accent-400);
          "
          >
            Mulai Jelajahi
          <div
            style="
              margin-left: 1.5rem;
              width: 2.5rem;
              padding: 0.5rem;
              aspect-ratio: 1/1;
              background-color: white;
            "
          >
            <x-icon name="arrow" color="var(--color-accent-500)"></x-icon>
          </div>
        </button>
      </a>
      </section>
      <footer>
        <div class="two-grid">
          <div>
            <img src="./assets/logo.svg" alt="" />
          </div>
          <div style="display: flex; flex-direction: column; gap: 1.2rem">
            <div
              style="
                display: flex;
                color: var(--color-foreground-dark-500);
                gap: 1rem;
                align-items: center;
              "
            >
              <svg
                width="20"
                height="27"
                viewBox="0 0 20 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.665344 10.0506C0.665344 4.82501 4.89172 0.598633 10.1173 0.598633C15.3429 0.598633 19.5692 4.82501 19.5692 10.0506C19.5692 15.6813 13.601 23.4454 11.157 26.4025C10.6169 27.0506 9.63119 27.0506 9.09108 26.4025C6.63357 23.4454 0.665344 15.6813 0.665344 10.0506ZM6.7416 10.0506C6.7416 11.914 8.25391 13.4263 10.1173 13.4263C11.9807 13.4263 13.493 11.914 13.493 10.0506C13.493 8.18721 11.9807 6.6749 10.1173 6.6749C8.25391 6.6749 6.7416 8.18721 6.7416 10.0506Z"
                  fill="#F9F9F9"
                />
              </svg>
              345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
            </div>
            <div
              style="
                display: flex;
                color: var(--color-foreground-dark-500);
                gap: 1rem;
                align-items: center;
              "
            >
              <svg
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.8799 17.331L18.4502 16.9394C17.6265 16.8449 16.8164 17.1284 16.2357 17.7091L13.7512 20.1936C9.92994 18.2492 6.79729 15.13 4.85289 11.2952L7.3509 8.7972C7.93152 8.21658 8.21508 7.40642 8.12056 6.58274L7.72898 3.18004C7.56695 1.81625 6.41921 0.790039 5.04193 0.790039H2.70594C1.18013 0.790039 -0.089132 2.0593 0.00538747 3.58512C0.721035 15.1165 9.94344 24.3254 21.4613 25.0411C22.9871 25.1356 24.2564 23.8663 24.2564 22.3405V20.0045C24.2699 18.6408 23.2437 17.493 21.8799 17.331Z"
                  fill="#F9F9F9"
                />
              </svg>
              (123) 456-7890
            </div>
            <div style="display: flex">
              <svg
                width="487"
                height="33"
                viewBox="0 0 487 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M211.545 8.64258C211.545 8.64258 216.647 8.64284 220.048 8.89551C220.522 8.95322 221.559 8.95775 222.483 9.95215C223.206 10.7032 223.445 12.4005 223.449 12.4287C223.449 12.4287 223.692 14.4487 223.692 16.4678V18.3623C223.692 20.3822 223.449 22.4014 223.449 22.4014C223.446 22.4265 223.206 24.1262 222.483 24.8779C221.559 25.8723 220.522 25.8771 220.048 25.9355C216.656 26.1875 211.567 26.1962 211.54 26.1963C211.54 26.1963 205.221 26.1372 203.276 25.9453C202.735 25.8416 201.521 25.8723 200.596 24.8779C199.873 24.1264 199.634 22.4278 199.631 22.4014C199.631 22.4014 199.388 20.3822 199.388 18.3623V16.4678C199.388 14.4487 199.631 12.4287 199.631 12.4287C199.635 12.3994 199.874 10.703 200.596 9.95215C201.52 8.95805 202.555 8.95317 203.031 8.89551C206.414 8.64416 211.48 8.64259 211.534 8.64258H211.545ZM209.036 19.8525L215.602 16.3584L209.035 12.8398L209.036 19.8525Z"
                  fill="#F9F9F9"
                />
                <path
                  d="M276.354 4.44824C279.654 4.44824 280.069 4.46234 281.365 4.52148C282.658 4.58049 283.542 4.78551 284.315 5.08594C285.114 5.39643 285.792 5.81186 286.467 6.4873C287.143 7.16295 287.558 7.84149 287.869 8.64062C288.169 9.41348 288.374 10.2967 288.433 11.5898C288.492 12.886 288.506 13.3002 288.506 16.6006C288.506 19.901 288.492 20.3151 288.433 21.6113C288.374 22.9045 288.169 23.7877 287.869 24.5605C287.558 25.3597 287.143 26.0382 286.467 26.7139C285.792 27.3893 285.114 27.8047 284.315 28.1152C283.542 28.4156 282.658 28.6207 281.365 28.6797C280.069 28.7388 279.654 28.7529 276.354 28.7529C273.054 28.7529 272.639 28.7388 271.343 28.6797C270.05 28.6207 269.167 28.4155 268.394 28.1152C267.595 27.8047 266.917 27.3892 266.242 26.7139C265.566 26.0382 265.15 25.3597 264.839 24.5605C264.539 23.7877 264.334 22.9044 264.275 21.6113C264.216 20.3151 264.202 19.901 264.202 16.6006C264.202 13.3002 264.216 12.886 264.275 11.5898C264.334 10.2968 264.539 9.41345 264.839 8.64062C265.15 7.84149 265.566 7.16295 266.242 6.4873C266.917 5.81196 267.595 5.39639 268.394 5.08594C269.167 4.78559 270.05 4.5805 271.343 4.52148C272.639 4.46234 273.054 4.44824 276.354 4.44824ZM276.356 5.75C273.112 5.75 272.727 5.76283 271.446 5.82129C270.261 5.87532 269.617 6.07283 269.189 6.23926C268.622 6.45971 268.217 6.72317 267.791 7.14844C267.366 7.57365 267.103 7.97867 266.882 8.5459C266.716 8.97412 266.518 9.61791 266.464 10.8027C266.406 12.084 266.393 12.4685 266.393 15.7129C266.393 18.9577 266.406 19.3426 266.464 20.624C266.518 21.8088 266.716 22.4526 266.882 22.8809C267.103 23.4478 267.367 23.8523 267.791 24.2773C268.217 24.7025 268.622 24.9661 269.189 25.1865C269.617 25.3529 270.261 25.5514 271.446 25.6055C272.727 25.6639 273.111 25.6758 276.356 25.6758C279.601 25.6758 279.986 25.6639 281.267 25.6055C282.452 25.5514 283.096 25.3529 283.524 25.1865C284.091 24.9661 284.495 24.7025 284.92 24.2773C285.346 23.8522 285.609 23.4479 285.83 22.8809C285.996 22.4526 286.194 21.8088 286.249 20.624C286.307 19.3426 286.319 18.9577 286.319 15.7129C286.319 12.4685 286.307 12.084 286.249 10.8027C286.194 9.61787 285.996 8.97412 285.83 8.5459C285.609 7.97878 285.346 7.5736 284.92 7.14844C284.495 6.72343 284.091 6.45963 283.524 6.23926C283.096 6.07283 282.452 5.87532 281.267 5.82129C279.986 5.76282 279.601 5.75 276.356 5.75ZM276.352 10.0908C279.798 10.0909 282.592 12.8847 282.592 16.3311C282.592 19.7775 279.799 22.5722 276.352 22.5723C272.905 22.5723 270.112 19.7776 270.112 16.3311C270.112 12.8846 272.906 10.0908 276.352 10.0908ZM276.352 11.5381C274.115 11.5381 272.301 13.3516 272.301 15.5889C272.301 17.8261 274.115 19.6396 276.352 19.6396C278.589 19.6396 280.403 17.826 280.403 15.5889C280.403 13.3517 278.589 11.5381 276.352 11.5381ZM282.855 8.64258C283.66 8.64277 284.313 9.29542 284.313 10.1006C284.313 10.9059 283.66 11.5594 282.855 11.5596C282.05 11.5596 281.396 10.906 281.396 10.1006C281.396 9.29531 282.05 8.64258 282.855 8.64258Z"
                  fill="#F9F9F9"
                />
                <path
                  d="M336.736 10.0908C338.737 10.0908 340.56 10.8235 341.931 12.0244C340.316 13.4918 340.369 13.5789 339.734 14.1895C338.941 13.5583 338.075 13.1055 336.736 13.1055C334.204 13.1057 332.227 15.0812 332.227 17.5176C332.227 19.954 334.204 21.9294 336.736 21.9297C339.239 21.9297 340.256 20.8911 340.91 18.9844C339.702 18.9844 336.736 18.9883 336.736 18.9883V16.0469H344.15C344.667 19.6057 343.109 24.9443 336.736 24.9443C332.473 24.9441 329.017 21.6189 329.017 17.5176C329.017 13.4162 332.473 10.0911 336.736 10.0908ZM350.652 12.8398V15.4141H353.328V17.252H350.652V19.8994H348.742V17.252H345.99V15.4141H348.742V12.8398H350.652Z"
                  fill="#F9F9F9"
                />
                <path
                  d="M139.929 27.5166H135.192V12.8398H139.929V27.5166ZM152.878 11.5381C156.244 11.5381 158.889 13.6495 158.889 18.1953V26.3555H153.518V18.7607C153.518 16.7728 152.678 15.416 150.83 15.416C149.417 15.416 148.63 16.3313 148.264 17.2139C148.127 17.5306 148.149 17.9719 148.149 18.4131V26.3555H142.827C142.827 26.3111 142.895 12.8996 142.827 11.6787H148.149V13.9824C148.464 12.9753 150.164 11.5381 152.878 11.5381ZM137.467 5.75C139.214 5.75 140.289 6.84571 140.323 8.29395C140.323 9.71597 139.215 10.8426 137.434 10.8428H137.399C135.685 10.8426 134.573 9.72065 134.573 8.29883C134.573 6.84909 135.718 5.7501 137.467 5.75Z"
                  fill="#F9F9F9"
                />
                <path
                  d="M17.9287 28.7533H6.28804C5.54697 28.7533 4.94659 28.1526 4.94659 27.4118V5.78968C4.94659 5.0487 5.54706 4.44824 6.28804 4.44824H27.9102C28.651 4.44824 29.2516 5.0487 29.2516 5.78968V27.4118C29.2516 28.1526 28.651 28.7533 27.9102 28.7533H21.7167V19.341H24.876L25.349 15.6729H21.7167V13.3311C21.7167 12.269 22.0116 11.5453 23.5345 11.5453L25.4769 11.5445V8.26368C25.141 8.21897 23.9879 8.1191 22.6465 8.1191C19.846 8.1191 17.9287 9.82853 17.9287 12.9678V15.6729H14.7613V19.341H17.9287V28.7533Z"
                  fill="#F9F9F9"
                />
                <path
                  d="M406.003 4.44824C399.292 4.44824 393.85 9.88891 393.85 16.6015C393.85 21.5763 396.842 25.8522 401.125 27.7315C401.091 26.884 401.12 25.8636 401.335 24.9404C401.57 23.9543 402.899 18.3193 402.899 18.3193C402.899 18.3193 402.511 17.5433 402.511 16.3957C402.511 14.595 403.556 13.2502 404.855 13.2502C405.96 13.2502 406.494 14.0805 406.494 15.0752C406.494 16.1856 405.786 17.8477 405.421 19.3868C405.117 20.6773 406.067 21.7277 407.339 21.7277C409.641 21.7277 411.192 18.7709 411.192 15.2667C411.192 12.6042 409.398 10.6106 406.136 10.6106C402.45 10.6106 400.153 13.3588 400.153 16.4286C400.153 17.489 400.465 18.235 400.954 18.8123C401.18 19.0796 401.21 19.1853 401.128 19.4912C401.071 19.7127 400.937 20.2529 400.881 20.4658C400.799 20.7731 400.551 20.8846 400.273 20.7702C398.574 20.0771 397.784 18.2178 397.784 16.127C397.784 12.6757 400.695 8.5341 406.469 8.5341C411.109 8.5341 414.163 11.894 414.163 15.4968C414.163 20.2643 411.513 23.8257 407.605 23.8257C406.294 23.8257 405.06 23.1168 404.637 22.3123C404.637 22.3123 403.931 25.1119 403.782 25.6521C403.525 26.5882 403.02 27.5257 402.559 28.2545C403.652 28.5775 404.807 28.7533 406.003 28.7533C412.714 28.7533 418.155 23.3126 418.155 16.6015C418.155 9.88891 412.714 4.44824 406.003 4.44824Z"
                  fill="#F9F9F9"
                />
                <path
                  d="M458.64 4.44824C472.041 4.44824 482.945 15.3514 482.945 28.7529H478.316C478.315 17.9034 469.489 9.07715 458.64 9.07715V4.44824ZM462.093 21.375C464.01 21.375 465.566 22.9302 465.566 24.8477C465.565 26.765 464.01 28.3193 462.093 28.3193C460.176 28.3192 458.621 26.7649 458.621 24.8477C458.621 22.9302 460.176 21.3751 462.093 21.375ZM458.621 11.5381C467.556 11.5382 474.824 18.8068 474.824 27.7412H470.195C470.195 21.3597 465.003 16.1681 458.621 16.168V11.5381Z"
                  fill="#F9F9F9"
                />
                <path
                  d="M94.0885 9.59305C93.1955 9.99974 92.234 10.2748 91.2253 10.3977C92.2554 9.76567 93.0457 8.76357 93.418 7.56982C92.4536 8.15499 91.388 8.5807 90.2495 8.80892C89.3422 7.81559 88.0455 7.19531 86.6103 7.19531C83.8584 7.19531 81.6257 9.48479 81.6257 12.3082C81.6257 12.7091 81.6685 13.0982 81.7541 13.4727C77.6099 13.2591 73.9364 11.2257 71.4755 8.12866C71.0461 8.88646 70.8007 9.76567 70.8007 10.7019C70.8007 12.475 71.6809 14.0403 73.0191 14.9576C72.203 14.9327 71.4327 14.7001 70.7593 14.3198V14.3827C70.7593 16.8609 72.4784 18.928 74.7609 19.3961C74.3429 19.5161 73.9021 19.5761 73.447 19.5761C73.1261 19.5761 72.8122 19.5453 72.5083 19.4854C73.1432 21.5159 74.9835 22.9949 77.1662 23.0344C75.46 24.4066 73.3087 25.2244 70.9733 25.2244C70.571 25.2244 70.173 25.201 69.7835 25.1542C71.9905 26.6025 74.6126 27.4495 77.4273 27.4495C86.6003 27.4495 91.6148 19.6594 91.6148 12.9022C91.6148 12.6798 91.6105 12.4575 91.602 12.2395C92.5763 11.5183 93.4223 10.6186 94.0885 9.59305Z"
                  fill="#F9F9F9"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="below">Copyright © 2025 • Peta Informasi Indonesia.</div>
      </footer>
`;
  }
}
customElements.define("page-home", PageHome);
