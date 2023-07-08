function getData() {
  // 1. Generamos la promise
  // 2. simulamos los retardos con setTimeout
  // 3. Resolvemos los productos con "resolve"
  // 4. Retornamos la Promise
  return new Promise((resolve, reject) => {
    const productos = [
      {
        title: "Camiseta de fútbol",
        id: 1,
        limit: 5,
        description: "Camiseta de fútbol de alta calidad",
        img: "/assets/remera.bmp",
        price: 300,
      },
      {
        title: "Zapatillas de running",
        id: 2,
        stock: 8,
        description: "Zapatillas de running para entrenamiento",
        img: "/assets/remera.bmp",
        price: 200,
      },
      {
        title: "Shorts de baloncesto",
        id: 3,
        stock: 3,
        description: "Shorts transpirables para baloncesto",
        img: "/assets/remera.bmp",
        price: 150,
      },
      {
        title: "Pelota de tenis",
        id: 10,
        stock: 2,
        description: "Pelota de tenis oficial",
        img: "/assets/remera.bmp",
        price: 150,
      },
    ];

    setTimeout(() => {
      const date = new Date().toLocaleDateString;
      resolve(productos, date);
    }, 2000);
  });
}

export default getData;
