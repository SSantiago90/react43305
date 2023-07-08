// ----------------------BACKEND------------------------------------
function getData() {
  // nuevo obj Promise
  const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const products = [10, 10];

      if (products.length === 0) {
        reject("Error: No encontramos lo que buscas");
      } else {
        resolve(products);
      }
    }, 3000);
  });

  return miPromesa;
}

//---------------------------FRONTEND------------------------------

console.log("inicia la app");

// trabajamos con la respuesta
async function requestData() {
  const respuesta = await getData();
  console.log(respuesta);
  console.log("termina la app");
}

requestData();

console.log("fin del codigo");

// async/await

// try/catch -> manejo de errores
