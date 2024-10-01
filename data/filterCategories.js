const filterCategories = [
  {
    categoria: "computadores",
    filtros: [
      { "name": "Marca", "options": ["ASUS", "HP", "Acer", "Lenovo"] },
      { "name": "Procesador", "options": ["Intel Core i7", "AMD Ryzen 5"] },
      { "name": "Gráfica", "options": ["NVIDIA RTX 3060", "NVIDIA GTX 1660"] }
    ]
  },
  {
    categoria: "televisores",
    filtros: [
      { "name": "Resolución", "options": ["4K", "1080p"] },
      { "name": "Tipo de Pantalla", "options": ["OLED", "LED", "QLED"] },
      { "name": "Marca", "options": ["LG", "Samsung", "Sony"] }
    ]
  },
  {
    categoria: "audio",
    filtros: [
      { "name": "Tipo", "options": ["Auriculares", "Parlantes", "Soundbars"] },
      { "name": "Marca", "options": ["Bose", "JBL", "Sony"] },
      { "name": "Conectividad", "options": ["Bluetooth", "Inalámbrico", "Con cable"] }
    ]
  },
  {
    categoria: "video",
    filtros: [
      { "name": "Tipo de Videojuego", "options": ["Consolas", "PC"] },
      { "name": "Marca", "options": ["Xbox", "PlayStation", "Nintendo"] },
      { "name": "Género", "options": ["Aventura", "Acción", "Deportes"] }
    ]
  },
  {
    categoria: "impresion",
    filtros: [
      { "name": "Tipo de Impresora", "options": ["Inyección de tinta", "Láser"] },
      { "name": "Marca", "options": ["HP", "Canon", "Brother"] },
      { "name": "Conectividad", "options": ["USB", "Wi-Fi", "Bluetooth"] }
    ]
  },
  {
    categoria: "camaras",
    filtros: [
      { "name": "Tipo de Cámara", "options": ["Reflex", "Compacta", "Sin Espejo"] },
      { "name": "Marca", "options": ["Canon", "Nikon", "Sony"] },
      { "name": "Resolución", "options": ["12 MP", "24 MP", "36 MP"] }
    ]
  },
  {
    categoria: "climatizacion",
    filtros: [
      { "name": "Tipo", "options": ["Aire Acondicionado", "Calefactor"] },
      { "name": "Marca", "options": ["Samsung", "LG", "Whirlpool"] },
      { "name": "Eficiencia Energética", "options": ["A", "B", "C"] }
    ]
  },
  {
    categoria: "refrigeracion",
    filtros: [
      { "name": "Tipo de Refrigerador", "options": ["Dos puertas", "Side by Side"] },
      { "name": "Marca", "options": ["Whirlpool", "LG", "Samsung"] },
      { "name": "Capacidad", "options": ["200L", "300L", "400L"] }
    ]
  },
  {
    categoria: "lavadoras",
    filtros: [
      { "name": "Tipo", "options": ["Lavadora", "Secadora", "Lavadora/secadora"] },
      { "name": "Marca", "options": ["LG", "Samsung", "Whirlpool"] },
      { "name": "Capacidad", "options": ["7 kg", "10 kg", "12 kg"] }
    ]
  },
  {
    categoria: "smartwatch",
    filtros: [
      { "name": "Marca", "options": ["Apple", "Samsung", "Garmin"] },
      { "name": "Sistema Operativo", "options": ["WatchOS", "Tizen", "WearOS"] },
      { "name": "Características", "options": ["GPS", "Monitoreo de ritmo cardíaco", "Notificaciones"] }
    ]
  },
  {
    categoria: "tabletas",
    filtros: [
      { "name": "Marca", "options": ["Apple", "Samsung", "Lenovo"] },
      { "name": "Sistema Operativo", "options": ["iOS", "Android", "Windows"] },
      { "name": "Tamaño", "options": ["7 pulgadas", "10 pulgadas", "12 pulgadas"] }
    ]
  },
  {
    categoria: "celulares",
    filtros: [
      { "name": "Marca", "options": ["Apple", "Samsung", "Xiaomi"] },
      { "name": "Sistema Operativo", "options": ["iOS", "Android"] },
      { "name": "Capacidad de Almacenamiento", "options": ["64 GB", "128 GB", "256 GB"] }
    ]
  },
  {
    categoria: "salas",
    filtros: [
      { "name": "Tipo de Mueble", "options": ["Sofá", "Sillón", "Mesa de centro"] },
      { "name": "Material", "options": ["Cuero", "Tela", "Madera"] },
      { "name": "Estilo", "options": ["Moderno", "Clásico", "Rústico"] }
    ]
  },
  {
    categoria: "comedor",
    filtros: [
      { "name": "Tipo de Mueble", "options": ["Mesa", "Sillas", "Conjuntos"] },
      { "name": "Material", "options": ["Madera", "Metal", "Vidrio"] },
      { "name": "Estilo", "options": ["Moderno", "Clásico", "Minimalista"] }
    ]
  },
  {
    categoria: "cocina",
    filtros: [
      { "name": "Tipo de Electrodoméstico", "options": ["Cocina", "Horno", "Microondas"] },
      { "name": "Marca", "options": ["Samsung", "LG", "Whirlpool"] },
      { "name": "Capacidad", "options": ["20L", "30L", "40L"] }
    ]
  },
  {
    categoria: "baño",
    filtros: [
      { "name": "Tipo de Mueble", "options": ["Lavabo", "Espejo", "Armario"] },
      { "name": "Material", "options": ["Madera", "Plástico", "Vidrio"] },
      { "name": "Estilo", "options": ["Moderno", "Rústico", "Minimalista"] }
    ]
  }
];

module.exports = filterCategories;