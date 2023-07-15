const productos = [
  {
    title: "Camiseta de fútbol",
    id: 1,
    limit: 5,
    description: "Camiseta de fútbol de alta calidad",
    img: "/assets/remera.bmp",
    price: 300,
    category: "indumentaria",
  },
  {
    title: "Zapatillas de running",
    id: 2,
    stock: 8,
    description: "Zapatillas de running para entrenamiento",
    img: "/assets/zapatilla.bmp",
    price: 200,
    category: "calzado",
  },
  {
    title: "Shorts de baloncesto",
    id: 3,
    stock: 3,
    description: "Shorts transpirables para baloncesto",
    img: "/assets/shorts.bmp",
    price: 150,
    category: "indumentaria",
  },
  {
    title: "Pelota de tenis",
    id: 4,
    stock: 2,
    description: "Pelota de tenis oficial",
    img: "/assets/pelotatennis.bmp",
    price: 150,
    category: "indumentaria",
  },
  {
    title: "Camiseta de fútbol",
    id: 5,
    limit: 5,
    description: "Camiseta de fútbol de alta calidad",
    img: "/assets/remera.bmp",
    price: 50,
    category: "indumentaria",
  },
  {
    title: "Zapatillas de running",
    id: 6,
    stock: 8,
    description: "Zapatillas de running para entrenamiento",
    img: "/assets/zapatilla.bmp",
    price: 700,
    category: "calzado",
  },
  {
    title: "Shorts de baloncesto",
    id: 7,
    stock: 3,
    description: "Shorts transpirables para baloncesto",
    img: "/assets/shorts.bmp",
    price: 250,
    category: "indumentaria",
  },
  {
    title: "Pelota de tenis",
    id: 8,
    stock: 2,
    description: "Pelota de tenis oficial",
    img: "/assets/pelotatennis.bmp",
    price: 350,
    category: "indumentaria",
  },
];

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const date = new Date().toLocaleDateString;
      resolve(productos, date);
    }, 2000);
  });
}

export function getProductData(idURL) {
  return new Promise((resolve, reject) => {
    const productRequested = productos.find(
      (item) => item.id === Number(idURL)
    );

    setTimeout(() => {
      resolve(productRequested);
    }, 2000);
  });
}

export function getCategoryData(categoryURL) {
  return new Promise((resolve, reject) => {
    const categoryRequested = productos.filter((item) => {
      /* .... */
      //return (item.category.toLowerCase() === categoryURL.toLowerCase())
      return item.category.toLowerCase() === categoryURL.toLowerCase();
    });

    setTimeout(() => {
      resolve(categoryRequested);
    }, 2000);
  });
}

export default getData;
