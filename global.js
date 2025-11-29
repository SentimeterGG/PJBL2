// src/store.js
export const store = new Proxy(
  {
    loggedIn: false,
    data: {
      "Jawa (Island)": {
        name: "Jawa",
        provinces: [
          "DKI",
          "Banten",
          "Jawa Barat",
          "Jawa Tengah",
          "DIY",
          "Jawa Timur",
        ],
        infoUmum:
          "Pulau Jawa adalah pulau terpadat penduduknya di Indonesia dan dunia. Pulau ini menjadi pusat pemerintahan, ekonomi, dan budaya Indonesia.",
        koord: "6° LS – 8° LS dan 105° BT – 114° BT",
        prelatif:
          "Sebelah selatan Pulau Kalimantan, sebelah barat Pulau Bali, sebelah timur Pulau Sumatra",
        blautselat: `Utara: Laut Jawa
Selatan: Samudra Hindia
Barat: Selat Sunda
Timur: Selat Bali`,
        lpulau: "±128.297 km²",
        jpenduduk: "±151 juta jiwa (perkiraan 2020)",
        butara: "Laut Jawa",
        bselatan: "Samudra Hindia",
        btimur: "Selat Bali",
        bbarat: "Selat Sunda",

        cirigeografis: `
Gunung: Gunung Semeru, Gunung Merapi, Gunung Bromo ;
Hutan: Hutan hujan, hutan pegunungan, mangrove pesisir utara ;
Dataran: Dataran rendah subur di pantai utara, dataran tinggi Dieng–Bandung–Malang ;
Laut: Berbatasan dengan Laut Jawa dan Samudra Hindia ;
Keunikan alam: Banyak gunung api aktif, tanah vulkanis subur, pantai selatan berombak besar ;
`,

        sda: `
Pertanian tanah vulkanis (padi, sayur, buah) ;
Perkebunan teh, kopi, tebu, tembakau ;
Pertambangan minyak, gas, batu kapur, belerang ;
Perikanan laut dan budidaya pesisir ;
Energi panas bumi (geothermal) ;
`,
      },

      "Sumatra (Island)": {
        name: "Sumatra",
        provinces: [
          "Aceh",
          "Sumatera Utara",
          "Sumatera Barat",
          "Riau",
          "Kepulauan Riau",
          "Jambi",
          "Sumatera Selatan",
          "Bangka Belitung",
          "Bengkulu",
          "Lampung",
        ],
        infoUmum:
          "Pulau Sumatra adalah pulau terbesar keenam di dunia, terkenal dengan Bukit Barisan dan Danau Toba.",
        koord: "6° LU – 6° LS dan 95° BT – 106° BT",
        prelatif:
          "Sebelah barat Semenanjung Malaka, sebelah timur Samudra Hindia",
        blautselat: `Utara: Selat Malaka
Selatan: Selat Sunda
Barat: Samudra Hindia
Timur: Selat Berhala`,
        lpulau: "±473.481 km²",
        jpenduduk: "±58 juta jiwa",
        butara: "Selat Malaka",
        bselatan: "Selat Sunda",
        btimur: "Selat Berhala",
        bbarat: "Samudra Hindia",

        cirigeografis: `
Gunung: Pegunungan Bukit Barisan, Gunung Kerinci (tertinggi) ;
Hutan: Hutan tropis lebat (Leuser, Kerinci Seblat) ;
Dataran: Dataran rendah luas di bagian timur ;
Laut: Samudra Hindia, Selat Malaka, Selat Sunda ;
Keunikan alam: Danau Toba, kawah supervolcano purba ;
`,

        sda: `
Kelapa sawit, karet, teh ;
Minyak bumi dan gas alam ;
Tambang batu bara dan emas ;
Kayu keras hutan tropis (meranti, ramin) ;
Perikanan pesisir barat dan timur ;
`,
      },

      "Kalimantan (Island)": {
        name: "Kalimantan",
        provinces: [
          "Kalimantan Barat",
          "Kalimantan Tengah",
          "Kalimantan Selatan",
          "Kalimantan Timur",
          "Kalimantan Utara",
        ],
        infoUmum:
          "Pulau Kalimantan adalah pulau terbesar ketiga di dunia, terkenal dengan hutan hujan tropis dan sungai besar seperti Kapuas dan Mahakam.",
        koord: "4° LU – 4° LS dan 108° BT – 119° BT",
        prelatif: "Sebelah utara Malaysia, sebelah selatan Laut Jawa",
        blautselat: `Utara: Sabah & Sarawak
Selatan: Laut Jawa
Barat: Laut Natuna
Timur: Selat Makassar`,
        lpulau: "±748.168 km²",
        jpenduduk: "±16 juta jiwa",
        butara: "Malaysia",
        bselatan: "Laut Jawa",
        btimur: "Selat Makassar",
        bbarat: "Laut Natuna",

        cirigeografis: `
Gunung: Gunung Kinabalu (Malaysia), Gunung Liangpran (Indonesia) ;
Hutan: Hutan hujan tropis sangat luas (Borneo Rainforest) ;
Dataran: Dataran rendah, rawa gambut, dan dataran banjir ;
Laut: Laut Jawa, Laut Sulawesi, Laut Natuna, Selat Makassar ;
Keunikan alam: Habitat orangutan, bekantan, bunga Rafflesia, dan satwa endemik lainnya ;
`,

        sda: `
Hutan tropis (kayu ulin, meranti, rotan) ;
Tambang batubara ;
Minyak bumi dan gas alam ;
Emas, bauksit, bijih besi ;
Perkebunan kelapa sawit dan karet ;
`,
      },

      "Sulawesi (Island)": {
        name: "Sulawesi",
        provinces: [
          "Sulawesi Utara",
          "Gorontalo",
          "Sulawesi Tengah",
          "Sulawesi Barat",
          "Sulawesi Selatan",
          "Sulawesi Tenggara",
        ],
        infoUmum:
          "Pulau Sulawesi memiliki bentuk unik menyerupai huruf K dengan banyak semenanjung.",
        koord: "3° LU – 6° LS dan 118° BT – 126° BT",
        prelatif: "Sebelah barat Kalimantan, sebelah utara Filipina",
        blautselat: `Utara: Laut Sulawesi
Selatan: Laut Flores
Barat: Selat Makassar
Timur: Laut Maluku`,
        lpulau: "±180.681 km²",
        jpenduduk: "±20 juta jiwa",
        butara: "Laut Sulawesi",
        bselatan: "Laut Flores",
        btimur: "Laut Maluku",
        bbarat: "Selat Makassar",

        cirigeografis: `
Gunung: Pegunungan sepanjang semenanjung, Gunung Rantemario (tertinggi) ;
Hutan: Hutan tropis dan hutan pegunungan ;
Dataran: Banyak teluk besar dan dataran pesisir ;
Laut: Laut Sulawesi, Laut Maluku, Laut Flores ;
Keunikan alam: Garis pantai sangat panjang, keanekaragaman hayati tinggi ;
`,

        sda: `
Nikel (cadangan terbesar Indonesia) ;
Perikanan laut ;
Pertanian dan perkebunan (kakao, kelapa, cengkih) ;
Emas dan mineral logam lainnya ;
Rumput laut dan budi daya pesisir ;
`,
      },

      "Papua (Island)": {
        name: "Papua",
        provinces: [
          "Papua",
          "Papua Tengah",
          "Papua Pegunungan",
          "Papua Selatan",
          "Papua Barat",
          "Papua Barat Daya",
        ],
        infoUmum:
          "Pulau Papua adalah pulau terbesar kedua di dunia dan dikenal dengan keanekaragaman hayatinya.",
        koord: "0° – 10° LS dan 131° – 141° BT",
        prelatif: "Sebelah utara Australia, sebelah timur Maluku",
        blautselat: `Utara: Samudra Pasifik
Selatan: Laut Arafura
Barat: Laut Seram
Timur: Papua Nugini`,
        lpulau: "±785.753 km²",
        jpenduduk: "±5 juta jiwa",
        butara: "Samudra Pasifik",
        bselatan: "Laut Arafura",
        btimur: "Papua Nugini",
        bbarat: "Laut Seram",

        cirigeografis: `
Gunung: Pegunungan Jayawijaya, Puncak Carstensz (tertinggi di Indonesia) ;
Hutan: Hutan hujan tropis sangat luas dan lebat ;
Dataran: Rawa-rawa besar (Lembah Mamberamo) ;
Laut: Samudra Pasifik dan Laut Arafura ;
Keunikan alam: Satwa endemik (burung cenderawasih, kasuari), gletser tropis ;
`,

        sda: `
Emas dan tembaga (Tambang Grasberg) ;
Kayu hutan (merbau, matoa) ;
Ikan dan hasil laut ;
Minyak dan gas (beberapa wilayah pesisir) ;
Potensi energi air (sungai besar) ;
`,
      },

      "Maluku (Island)": {
        name: "Maluku",
        provinces: ["Maluku", "Maluku Utara"],
        infoUmum:
          "Kepulauan Maluku dikenal sebagai wilayah penghasil rempah-rempah bersejarah.",
        koord: "3° LU – 8° LS dan 124° – 135° BT",
        prelatif: "Sebelah barat Papua, sebelah timur Sulawesi",
        blautselat: `Utara: Laut Seram
Selatan: Laut Banda
Barat: Laut Maluku
Timur: Samudra Pasifik`,
        lpulau: "Kepulauan",
        jpenduduk: "±2,1 juta jiwa",
        butara: "Laut Seram",
        bselatan: "Laut Banda",
        btimur: "Samudra Pasifik",
        bbarat: "Laut Maluku",

        cirigeografis: `
Gunung: Banyak gunung api di pulau-pulau kecil ;
Hutan: Hutan tropis dan hutan hujan lembap ;
Dataran: Pulau kecil dengan dataran sempit ;
Laut: Laut Banda, Laut Seram, Laut Maluku ;
Keunikan alam: Gugusan pulau tropis dan terumbu karang ;
`,

        sda: `
Pala dan cengkih (komoditas khas) ;
Perikanan laut ;
Rumput laut ;
Kayu tropis ;
Potensi pariwisata bahari ;
`,
      },

      "Nusa Tenggara": {
        name: "Nusa Tenggara",
        provinces: ["NTB", "NTT"],
        infoUmum:
          "Nusa Tenggara terdiri dari gugusan pulau kering dengan savana dan gunung berapi.",
        koord: "8° – 11° LS dan 115° – 125° BT",
        prelatif: "Sebelah timur Bali, sebelah barat Timor Leste",
        blautselat: `Utara: Laut Flores
Selatan: Samudra Hindia`,
        lpulau: "Kepulauan",
        jpenduduk: "±10 juta jiwa",
        butara: "Laut Flores",
        bselatan: "Samudra Hindia",
        btimur: "Timor Leste",
        bbarat: "Bali",

        cirigeografis: `
Gunung: Gunung Rinjani (NTB), Gunung Egon dan Ile Lewotolok (NTT) ;
Hutan: Hutan kering, sabana, dan hutan semi-arid ;
Dataran: Bukit berbatu dan dataran savana ;
Laut: Laut Flores dan Samudra Hindia ;
Keunikan alam: Savana luas, pulau-pulau berbukit, pantai indah ;
`,

        sda: `
Jagung dan sorgum ;
Ternak (sapi, kambing) ;
Rumput laut ;
Perikanan laut ;
Pertanian lahan kering ;
`,
      },

      Bali: {
        name: "Bali",
        provinces: ["Bali"],
        infoUmum:
          "Pulau Bali terkenal dengan budaya Hindu, pariwisata internasional, dan keindahan alamnya.",
        koord: "8° LS dan 115° BT",
        prelatif: "Sebelah timur Jawa, sebelah barat Nusa Tenggara",
        blautselat: `Utara: Laut Bali
Selatan: Samudra Hindia
Barat: Selat Bali
Timur: Selat Lombok`,
        lpulau: "±5.780 km²",
        jpenduduk: "±4,3 juta jiwa",
        butara: "Laut Bali",
        bselatan: "Samudra Hindia",
        btimur: "Selat Lombok",
        bbarat: "Selat Bali",

        cirigeografis: `
Gunung: Gunung Agung, Gunung Batur ;
Hutan: Hutan tropis dan hutan pegunungan ;
Dataran: Dataran subur dan terasering (subak) ;
Laut: Laut Bali dan Samudra Hindia ;
Keunikan alam: Pantai pasir putih, danau kawah, budaya unik ;
`,

        sda: `
Pariwisata ;
Pertanian (padi, sayur, buah) ;
Perikanan ;
Kerajinan tangan (perak, ukir, tenun) ;
Kopi dan hasil perkebunan pegunungan ;
`,
      },
    },
    pendingSubmission: [],
    accepted: 0,
    rejected: 0,
    listeners: [],
  },
  {
    set(obj, key, value) {
      obj[key] = value;
      obj.listeners.forEach((fn) => fn(key, value));
      return true;
    },
  },
);

export function listen(fn) {
  store.listeners.push(fn);
}

export function applyUpdate(oldValue, newValue) {
  for (const islandName in store.data) {
    const island = store.data[islandName];

    for (const key in island) {
      if (Array.isArray(island[key])) continue;

      if (
        typeof island[key] === "string" &&
        island[key].trim() === oldValue.trim()
      ) {
        island[key] = newValue;
        return;
      }
    }
  }
}
