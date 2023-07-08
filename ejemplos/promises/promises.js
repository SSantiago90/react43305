// ----------------------BACKEND------------------------------------
function getData(handleResponse) {
  setTimeout(() => {
    /* ..... */
    handleResponse("Productos");
  }, 2500);
}

// nuevo obj Promise
const miPromesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Productos");
  }, 3000);
});
//---------------------------FRONTEND------------------------------

console.log("inicia la app");

// trabajamos con la respuesta
miPromesa.then((res) => {
  console.log(res);
});

console.log("fin del codigo");

// async/await
