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
    }, 2000);
  });

  return miPromesa;
}

//---------------------------FRONTEND------------------------------

console.log("inicia la app");

// trabajamos con la respuesta
getData()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Error en getData:", err);
  });

console.log("fin del codigo");

// async/await
// try/catch
