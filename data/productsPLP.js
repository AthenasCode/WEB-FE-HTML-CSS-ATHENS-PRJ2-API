
const productsPLP = [
  {
    categorie: "computadores",
    products: [
      {
        id: 1,
        title: "Laptop Gaming ASUS",
        procesador: "Intel Core i7",
        grafica: "NVIDIA RTX 3060",
        marca: "ASUS",
        originalPrice: 3500000,
        discountedPrice: 3000000,
        discountPercentage: 14,
        image: "images/laptop_asus.png", // Cambiamos esto a una ruta relativa
      },
      {
        id: 2,
        title: "MacBook Air M2",
        procesador: "Apple M2",
        grafica: "Integrada",
        marca: "Apple",
        originalPrice: 5000000,
        discountedPrice: 4500000,
        discountPercentage: 10,
        image: "images/macbook_air.png",
      },
      {
        id: 3,
        title: "HP Pavilion 15",
        procesador: "AMD Ryzen 7",
        grafica: "AMD Radeon",
        marca: "HP",
        originalPrice: 2800000,
        discountedPrice: 2500000,
        discountPercentage: 11,
        image: "images/hp_pavilion.png",
      },
      {
        id: 4,
        title: "Dell XPS 13",
        procesador: "Intel Core i5",
        grafica: "Integrada",
        marca: "Dell",
        originalPrice: 3200000,
        discountedPrice: 2900000,
        discountPercentage: 9,
        image: "images/dell_xps.png",
      },
      {
        id: 5,
        title: "Lenovo Legion 5",
        procesador: "AMD Ryzen 5",
        grafica: "NVIDIA GTX 1660 Ti",
        marca: "Lenovo",
        originalPrice: 4200000,
        discountedPrice: 3800000,
        discountPercentage: 10,
        image: "images/lenovo_legion.png",
      },
    ],
  },
  {
    categorie: "televisores",
    products: [
      {
        id: 6,
        title: "Samsung QLED 65\"",
        resolucion: "4K",
        tipoPantalla: "QLED",
        marca: "Samsung",
        originalPrice: 4000000,
        discountedPrice: 3700000,
        discountPercentage: 8,
        image: "images/samsung_qled.png",
      },
      {
        id: 7,
        title: "Sony Bravia 55\"",
        resolucion: "4K",
        tipoPantalla: "OLED",
        marca: "Sony",
        originalPrice: 3800000,
        discountedPrice: 3400000,
        discountPercentage: 10,
        image: "images/sony_bravia.png",
      },
      {
        id: 8,
        title: "LG NanoCell 65\"",
        resolucion: "4K",
        tipoPantalla: "NanoCell",
        marca: "LG",
        originalPrice: 3500000,
        discountedPrice: 3200000,
        discountPercentage: 9,
        image: "images/lg_nanocell.png",
      },
      {
        id: 9,
        title: "Panasonic Viera 50\"",
        resolucion: "4K",
        tipoPantalla: "LED",
        marca: "Panasonic",
        originalPrice: 2500000,
        discountedPrice: 2300000,
        discountPercentage: 8,
        image: "images/panasonic_viera.png",
      },
      {
        id: 10,
        title: "Hisense ULED 55\"",
        resolucion: "4K",
        tipoPantalla: "ULED",
        marca: "Hisense",
        originalPrice: 3000000,
        discountedPrice: 2700000,
        discountPercentage: 10,
        image: "images/hisense_uled.png",
      },
    ],
  },
  {
    categorie: "audio",
    products: [
      {
        id: 11,
        title: "Bose SoundLink",
        tipo: "Parlante portátil",
        conectividad: "Bluetooth",
        cancelacionRuido: false,
        originalPrice: 700000,
        discountedPrice: 600000,
        discountPercentage: 14,
        image: "images/bose_soundlink.png",
      },
      {
        id: 12,
        title: "Sony WH-1000XM5",
        tipo: "Auriculares",
        conectividad: "Bluetooth",
        cancelacionRuido: true,
        originalPrice: 400000,
        discountedPrice: 320000,
        discountPercentage: 20,
        image: "images/sony_wh1000xm5.png",
      },
      {
        id: 13,
        title: "JBL PartyBox 300",
        tipo: "Parlante",
        conectividad: "Bluetooth",
        cancelacionRuido: false,
        originalPrice: 1200000,
        discountedPrice: 1000000,
        discountPercentage: 16,
        image: "images/jbl_partybox.png",
      },
      {
        id: 14,
        title: "Sennheiser HD 450BT",
        tipo: "Auriculares",
        conectividad: "Bluetooth",
        cancelacionRuido: true,
        originalPrice: 300000,
        discountedPrice: 250000,
        discountPercentage: 17,
        image: "images/sennheiser_hd450.png",
      },
      {
        id: 15,
        title: "Marshall Stanmore II",
        tipo: "Parlante",
        conectividad: "Bluetooth",
        cancelacionRuido: false,
        originalPrice: 800000,
        discountedPrice: 700000,
        discountPercentage: 12,
        image: "images/marshall_stanmore.png",
      },
    ],
  },
  {
    categorie: "video",
    products: [
      {
        id: 16,
        title: "Proyector Epson",
        resolucion: "1080p",
        lumens: 3000,
        conectividad: "HDMI",
        originalPrice: 1500000,
        discountedPrice: 1300000,
        discountPercentage: 13,
        image: "images/epson_projector.png",
      },
      {
        id: 17,
        title: "GoPro HERO10",
        resolucion: "5K",
        tipo: "Cámara de acción",
        conectividad: "WiFi",
        originalPrice: 2500000,
        discountedPrice: 2200000,
        discountPercentage: 12,
        image: "images/gopro_hero10.png",
      },
      {
        id: 18,
        title: "Proyector BenQ",
        resolucion: "4K",
        lumens: 3200,
        conectividad: "HDMI",
        originalPrice: 1800000,
        discountedPrice: 1600000,
        discountPercentage: 11,
        image: "images/benq_projector.png",
      },
      {
        id: 19,
        title: "Cámara Sony Alpha 7C",
        resolucion: "24.2 MP",
        tipoSensor: "Full Frame",
        conectividad: "WiFi/Bluetooth",
        originalPrice: 4500000,
        discountedPrice: 4200000,
        discountPercentage: 7,
        image: "images/sony_alpha7c.png",
      },
      {
        id: 20,
        title: "DJI Osmo Pocket",
        resolucion: "4K",
        tipo: "Cámara gimbal",
        conectividad: "WiFi",
        originalPrice: 1400000,
        discountedPrice: 1200000,
        discountPercentage: 14,
        image: "images/dji_osmo.png",
      },
    ],
  },
  {
    categorie: "impresion",
    products: [
      {
        id: 21,
        title: "Impresora HP LaserJet",
        tipo: "Láser",
        velocidadImpresion: "30 ppm",
        conectividad: "WiFi",
        originalPrice: 500000,
        discountedPrice: 450000,
        discountPercentage: 10,
        image: "images/hp_laserjet.png",
      },
      {
        id: 22,
        title: "Impresora Canon PIXMA",
        tipo: "Inyección de tinta",
        velocidadImpresion: "15 ppm",
        conectividad: "USB",
        originalPrice: 350000,
        discountedPrice: 300000,
        discountPercentage: 14,
        image: "images/canon_pixma.png",
      },
      {
        id: 23,
        title: "Impresora Epson EcoTank",
        tipo: "Inyección de tinta",
        velocidadImpresion: "20 ppm",
        conectividad: "WiFi",
        originalPrice: 600000,
        discountedPrice: 550000,
        discountPercentage: 8,
        image: "images/epson_ecotank.png",
      },
      {
        id: 24,
        title: "Brother DCP-L2550DW",
        tipo: "Multifuncional",
        velocidadImpresion: "36 ppm",
        conectividad: "WiFi",
        originalPrice: 700000,
        discountedPrice: 650000,
        discountPercentage: 7,
        image: "images/brother_dcp.png",
      },
      {
        id: 25,
        title: "Xerox B215",
        tipo: "Multifuncional",
        velocidadImpresion: "31 ppm",
        conectividad: "WiFi",
        originalPrice: 650000,
        discountedPrice: 600000,
        discountPercentage: 8,
        image: "images/xerox_b215.png",
      },
    ],
  },
  {
    categorie: "camaras",
    products: [
      {
        id: 26,
        title: "Canon EOS R5",
        resolucion: "45 MP",
        tipoSensor: "Full Frame",
        conectividad: "WiFi/Bluetooth",
        originalPrice: 6000000,
        discountedPrice: 5500000,
        discountPercentage: 8,
        image: "images/canon_r5.png",
      },
      {
        id: 27,
        title: "Nikon Z6 II",
        resolucion: "24.5 MP",
        tipoSensor: "Full Frame",
        conectividad: "WiFi/Bluetooth",
        originalPrice: 5200000,
        discountedPrice: 4700000,
        discountPercentage: 10,
        image: "images/nikon_z6ii.png",
      },
      {
        id: 28,
        title: "Sony Alpha 7 III",
        resolucion: "24.2 MP",
        tipoSensor: "Full Frame",
        conectividad: "WiFi/Bluetooth",
        originalPrice: 5000000,
        discountedPrice: 4600000,
        discountPercentage: 8,
        image: "images/sony_alpha7iii.png",
      },
      {
        id: 29,
        title: "Fujifilm X-T4",
        resolucion: "26.1 MP",
        tipoSensor: "APS-C",
        conectividad: "WiFi/Bluetooth",
        originalPrice: 3500000,
        discountedPrice: 3200000,
        discountPercentage: 9,
        image: "images/fuji_xt4.png",
      },
      {
        id: 30,
        title: "Olympus OM-D E-M10 Mark IV",
        resolucion: "20.3 MP",
        tipoSensor: "Micro Four Thirds",
        conectividad: "WiFi/Bluetooth",
        originalPrice: 2000000,
        discountedPrice: 1800000,
        discountPercentage: 10,
        image: "images/olympus_omd.png",
      },
    ],
  },
  {
    categorie: "climatizacion",
    products: [
      {
        id: 31,
        title: "Aire Acondicionado Samsung",
        tipo: "Split",
        capacidad: "12000 BTU",
        eficienciaEnergetica: "A+",
        originalPrice: 1800000,
        discountedPrice: 1600000,
        discountPercentage: 11,
        image: "images/samsung_ac.png",
      },
      {
        id: 32,
        title: "Aire Acondicionado LG Dual Inverter",
        tipo: "Split",
        capacidad: "18000 BTU",
        eficienciaEnergetica: "A++",
        originalPrice: 2200000,
        discountedPrice: 2000000,
        discountPercentage: 9,
        image: "images/lg_inverter_ac.png",
      },
      {
        id: 33,
        title: "Aire Acondicionado Panasonic",
        tipo: "Split",
        capacidad: "24000 BTU",
        eficienciaEnergetica: "A+++",
        originalPrice: 2500000,
        discountedPrice: 2300000,
        discountPercentage: 8,
        image: "images/panasonic_ac.png",
      },
      {
        id: 34,
        title: "Aire Acondicionado Midea",
        tipo: "Split",
        capacidad: "12000 BTU",
        eficienciaEnergetica: "A+",
        originalPrice: 1700000,
        discountedPrice: 1500000,
        discountPercentage: 12,
        image: "images/midea_ac.png",
      },
      {
        id: 35,
        title: "Aire Acondicionado Daikin",
        tipo: "Split",
        capacidad: "18000 BTU",
        eficienciaEnergetica: "A++",
        originalPrice: 2400000,
        discountedPrice: 2200000,
        discountPercentage: 8,
        image: "images/daikin_ac.png",
      },
    ],
  },
  {
    categorie: "refrigeracion",
    products: [
      {
        id: 36,
        title: "Nevera LG Inverter",
        capacidad: "400L",
        eficienciaEnergetica: "A++",
        marca: "LG",
        originalPrice: 2500000,
        discountedPrice: 2200000,
        discountPercentage: 12,
        image: "images/lg_fridge.png",
      },
      {
        id: 37,
        title: "Refrigerador Samsung Twin Cooling",
        capacidad: "500L",
        eficienciaEnergetica: "A+",
        marca: "Samsung",
        originalPrice: 3000000,
        discountedPrice: 2700000,
        discountPercentage: 10,
        image: "images/samsung_twin_cooling.png",
      },
      {
        id: 38,
        title: "Refrigerador Whirlpool",
        capacidad: "450L",
        eficienciaEnergetica: "A++",
        marca: "Whirlpool",
        originalPrice: 2800000,
        discountedPrice: 2500000,
        discountPercentage: 11,
        image: "images/whirlpool_fridge.png",
      },
      {
        id: 39,
        title: "Refrigerador Electrolux Frost Free",
        capacidad: "420L",
        eficienciaEnergetica: "A+",
        marca: "Electrolux",
        originalPrice: 2600000,
        discountedPrice: 2300000,
        discountPercentage: 12,
        image: "images/electrolux_frostfree.png",
      },
      {
        id: 40,
        title: "Refrigerador Bosch VitaFresh",
        capacidad: "500L",
        eficienciaEnergetica: "A++",
        marca: "Bosch",
        originalPrice: 3200000,
        discountedPrice: 2900000,
        discountPercentage: 9,
        image: "images/bosch_vitafresh.png",
      },
    ],
  },
  {
    categorie: "lavadoras",
    products: [
      {
        id: 41,
        title: "Lavadora Samsung",
        tipoCarga: "Frontal",
        capacidad: "18 kg",
        eficienciaEnergetica: "A+++",
        originalPrice: 2200000,
        discountedPrice: 1900000,
        discountPercentage: 13,
        image: "images/samsung_washer.png",
      },
      {
        id: 42,
        title: "Lavadora LG Inverter",
        tipoCarga: "Frontal",
        capacidad: "17 kg",
        eficienciaEnergetica: "A++",
        originalPrice: 2100000,
        discountedPrice: 1800000,
        discountPercentage: 14,
        image: "images/lg_inverter_washer.png",
      },
      {
        id: 43,
        title: "Lavadora Whirlpool Supreme Care",
        tipoCarga: "Frontal",
        capacidad: "16 kg",
        eficienciaEnergetica: "A+++",
        originalPrice: 2300000,
        discountedPrice: 2000000,
        discountPercentage: 13,
        image: "images/whirlpool_supreme.png",
      },
      {
        id: 44,
        title: "Lavadora Electrolux UltraCare",
        tipoCarga: "Frontal",
        capacidad: "15 kg",
        eficienciaEnergetica: "A+",
        originalPrice: 2400000,
        discountedPrice: 2100000,
        discountPercentage: 12,
        image: "images/electrolux_ultracare.png",
      },
      {
        id: 45,
        title: "Lavadora Bosch HomeProfessional",
        tipoCarga: "Frontal",
        capacidad: "14 kg",
        eficienciaEnergetica: "A+++",
        originalPrice: 2500000,
        discountedPrice: 2200000,
        discountPercentage: 10,
        image: "images/bosch_homeprofessional.png",
      },
    ],
  },
  {
    categorie: "smartwatch",
    products: [
      {
        id: 46,
        title: "Apple Watch Series 8",
        tamañoPantalla: "44mm",
        conectividad: "WiFi/GPS",
        resistenciaAgua: "50m",
        originalPrice: 2000000,
        discountedPrice: 1800000,
        discountPercentage: 10,
        image: "images/apple_watch8.png",
      },
      {
        id: 47,
        title: "Samsung Galaxy Watch 5",
        tamañoPantalla: "46mm",
        conectividad: "LTE",
        resistenciaAgua: "50m",
        originalPrice: 1500000,
        discountedPrice: 1350000,
        discountPercentage: 10,
        image: "images/samsung_watch5.png",
      },
      {
        id: 48,
        title: "Garmin Fenix 7",
        tamañoPantalla: "47mm",
        conectividad: "GPS",
        resistenciaAgua: "100m",
        originalPrice: 3000000,
        discountedPrice: 2700000,
        discountPercentage: 10,
        image: "images/garmin_fenix7.png",
      },
      {
        id: 49,
        title: "Fitbit Versa 3",
        tamañoPantalla: "40mm",
        conectividad: "Bluetooth",
        resistenciaAgua: "50m",
        originalPrice: 1200000,
        discountedPrice: 1100000,
        discountPercentage: 8,
        image: "images/fitbit_versa3.png",
      },
      {
        id: 50,
        title: "Huawei Watch GT 3",
        tamañoPantalla: "46mm",
        conectividad: "Bluetooth",
        resistenciaAgua: "50m",
        originalPrice: 1400000,
        discountedPrice: 1300000,
        discountPercentage: 7,
        image: "images/huawei_watchgt3.png",
      },
    ],
  },
  {
    categorie: "tabletas",
    products: [
      {
        id: 51,
        title: "iPad Pro 11\"",
        almacenamiento: "128GB",
        procesador: "Apple M1",
        marca: "Apple",
        originalPrice: 3000000,
        discountedPrice: 2800000,
        discountPercentage: 7,
        image: "images/ipad_pro.png",
      },
      {
        id: 52,
        title: "Samsung Galaxy Tab S7",
        almacenamiento: "128GB",
        procesador: "Snapdragon 865",
        marca: "Samsung",
        originalPrice: 2000000,
        discountedPrice: 1800000,
        discountPercentage: 10,
        image: "images/samsung_tab_s7.png",
      },
      {
        id: 53,
        title: "Microsoft Surface Pro 7",
        almacenamiento: "256GB",
        procesador: "Intel Core i5",
        marca: "Microsoft",
        originalPrice: 2500000,
        discountedPrice: 2300000,
        discountPercentage: 8,
        image: "images/surface_pro7.png",
      },
      {
        id: 54,
        title: "Lenovo Tab P11",
        almacenamiento: "128GB",
        procesador: "Qualcomm Snapdragon 662",
        marca: "Lenovo",
        originalPrice: 1200000,
        discountedPrice: 1100000,
        discountPercentage: 8,
        image: "images/lenovo_tab_p11.png",
      },
      {
        id: 55,
        title: "Huawei MatePad Pro",
        almacenamiento: "256GB",
        procesador: "Kirin 990",
        marca: "Huawei",
        originalPrice: 2200000,
        discountedPrice: 2000000,
        discountPercentage: 9,
        image: "images/huawei_matepad.png",
      },
    ],
  },
  {
    categorie: "celulares",
    products: [
      {
        id: 56,
        title: "iPhone 13",
        almacenamiento: "128GB",
        procesador: "A15 Bionic",
        marca: "Apple",
        originalPrice: 3500000,
        discountedPrice: 3200000,
        discountPercentage: 8,
        image: "images/iphone_13.png",
      },
      {
        id: 57,
        title: "Samsung Galaxy S21",
        almacenamiento: "128GB",
        procesador: "Exynos 2100",
        marca: "Samsung",
        originalPrice: 3000000,
        discountedPrice: 2800000,
        discountPercentage: 7,
        image: "images/samsung_s21.png",
      },
      {
        id: 58,
        title: "Google Pixel 6",
        almacenamiento: "128GB",
        procesador: "Google Tensor",
        marca: "Google",
        originalPrice: 2500000,
        discountedPrice: 2300000,
        discountPercentage: 8,
        image: "images/google_pixel6.png",
      },
      {
        id: 59,
        title: "OnePlus 9",
        almacenamiento: "128GB",
        procesador: "Snapdragon 888",
        marca: "OnePlus",
        originalPrice: 2400000,
        discountedPrice: 2200000,
        discountPercentage: 8,
        image: "images/oneplus_9.png",
      },
      {
        id: 60,
        title: "Xiaomi Mi 11",
        almacenamiento: "256GB",
        procesador: "Snapdragon 888",
        marca: "Xiaomi",
        originalPrice: 2000000,
        discountedPrice: 1900000,
        discountPercentage: 5,
        image: "images/xiaomi_mi11.png",
      },
    ],
  },
  {
    categorie: "salas",
    products: [
      {
        id: 61,
        title: "Sofa Cama Doble",
        material: "Tela",
        dimensiones: "200x100 cm",
        color: "Gris",
        originalPrice: 1500000,
        discountedPrice: 1300000,
        discountPercentage: 13,
        image: "images/sofa_cama.png",
      },
      {
        id: 62,
        title: "Mesa de Centro Moderna",
        material: "Madera",
        dimensiones: "100x60 cm",
        color: "Negro",
        originalPrice: 800000,
        discountedPrice: 700000,
        discountPercentage: 12,
        image: "images/mesa_centro.png",
      },
      {
        id: 63,
        title: "Silla de Comedor",
        material: "Madera",
        dimensiones: "40x40 cm",
        color: "Madera Natural",
        originalPrice: 400000,
        discountedPrice: 350000,
        discountPercentage: 12,
        image: "images/silla_comedor.png",
      },
      {
        id: 64,
        title: "Estante para Libros",
        material: "Madera",
        dimensiones: "80x30 cm",
        color: "Blanco",
        originalPrice: 600000,
        discountedPrice: 550000,
        discountPercentage: 8,
        image: "images/estante_libro.png",
      },
      {
        id: 65,
        title: "Mueble TV Minimalista",
        material: "Madera",
        dimensiones: "120x40 cm",
        color: "Negro",
        originalPrice: 1200000,
        discountedPrice: 1100000,
        discountPercentage: 8,
        image: "images/mueble_tv.png",
      },
    ],
  },
  {
    categorie: "comedor",
    products: [
      {
        id: 66,
        title: "Mesa de Comedor Rectangular",
        material: "Madera",
        dimensiones: "160x90 cm",
        color: "Café",
        originalPrice: 2500000,
        discountedPrice: 2300000,
        discountPercentage: 8,
        image: "images/mesa_comedor.png",
      },
      {
        id: 67,
        title: "Sillas de Comedor (Juego de 6)",
        material: "Madera",
        dimensiones: "40x40 cm",
        color: "Blanco",
        originalPrice: 1200000,
        discountedPrice: 1100000,
        discountPercentage: 8,
        image: "images/sillas_comedor.png",
      },
      {
        id: 68,
        title: "Mueble Bar",
        material: "Madera",
        dimensiones: "80x40 cm",
        color: "Negro",
        originalPrice: 1500000,
        discountedPrice: 1400000,
        discountPercentage: 7,
        image: "images/mueble_bar.png",
      },
      {
        id: 69,
        title: "Vitrina de Comedor",
        material: "Madera",
        dimensiones: "120x40 cm",
        color: "Café",
        originalPrice: 2000000,
        discountedPrice: 1900000,
        discountPercentage: 5,
        image: "images/vitrina_comedor.png",
      },
      {
        id: 70,
        title: "Carro de Comedor",
        material: "Madera",
        dimensiones: "90x40 cm",
        color: "Café",
        originalPrice: 1000000,
        discountedPrice: 950000,
        discountPercentage: 5,
        image: "images/carro_comedor.png",
      },
    ],
  },
  {
    categorie: "cocina",
    products: [
      {
        id: 71,
        title: "Horno Eléctrico",
        capacidad: "60L",
        potencia: "2000W",
        marca: "Whirlpool",
        originalPrice: 800000,
        discountedPrice: 700000,
        discountPercentage: 12,
        image: "images/horno_electrico.png",
      },
      {
        id: 72,
        title: "Microondas Samsung",
        capacidad: "30L",
        potencia: "1100W",
        marca: "Samsung",
        originalPrice: 600000,
        discountedPrice: 550000,
        discountPercentage: 8,
        image: "images/microondas_samsung.png",
      },
      {
        id: 73,
        title: "Licuadora Oster",
        capacidad: "1.5L",
        potencia: "600W",
        marca: "Oster",
        originalPrice: 250000,
        discountedPrice: 220000,
        discountPercentage: 12,
        image: "images/licuadora_oster.png",
      },
      {
        id: 74,
        title: "Batidora de Mano Philips",
        potencia: "700W",
        marca: "Philips",
        originalPrice: 300000,
        discountedPrice: 280000,
        discountPercentage: 7,
        image: "images/batidora_mano.png",
      },
      {
        id: 75,
        title: "Cafetera Eléctrica",
        capacidad: "1.2L",
        potencia: "1000W",
        marca: "Bialetti",
        originalPrice: 150000,
        discountedPrice: 140000,
        discountPercentage: 7,
        image: "images/cafetera_electrica.png",
      },
    ],
  },
  {
    categorie: "baño",
    products: [
      {
        id: 76,
        title: "Espejo de Baño",
        dimensiones: "60x80 cm",
        material: "Vidrio",
        originalPrice: 300000,
        discountedPrice: 280000,
        discountPercentage: 7,
        image: "images/espejo_bano.png",
      },
      {
        id: 77,
        title: "Juego de Toallas",
        material: "Algodón",
        cantidad: "6 Toallas",
        originalPrice: 150000,
        discountedPrice: 140000,
        discountPercentage: 7,
        image: "images/juego_toallas.png",
      },
      {
        id: 78,
        title: "Mueble de Baño",
        dimensiones: "80x45 cm",
        material: "Madera",
        originalPrice: 800000,
        discountedPrice: 750000,
        discountPercentage: 6,
        image: "images/mueble_bano.png",
      },
      {
        id: 79,
        title: "Ducha de Mano",
        material: "Plástico",
        originalPrice: 150000,
        discountedPrice: 140000,
        discountPercentage: 7,
        image: "images/ducha_mano.png",
      },
      {
        id: 80,
        title: "Organizador de Baño",
        dimensiones: "30x20 cm",
        material: "Plástico",
        originalPrice: 100000,
        discountedPrice: 90000,
        discountPercentage: 10,
        image: "images/organizador_bano.png",
      },
    ],
  },
];
// Exportamos una función que devuelve los productos con las URLs completas
module.exports = productsPLP;