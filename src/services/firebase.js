// Firebase
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  where,
  query,
  addDoc,
  setDoc,
  writeBatch
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCHmBUcC4YP1uoSw95LIHo9CAx7kRPwn9g",
  authDomain: "react43305.firebaseapp.com",
  projectId: "react43305",
  storageBucket: "react43305.appspot.com",
  messagingSenderId: "384859310967",
  appId: "1:384859310967:web:3bad2593d267b8ecc02f72"
};


const appFirebase = initializeApp(firebaseConfig);

const db = getFirestore(appFirebase);

// 2 Implementar async function getData()

async function getData() {
  const productsRef = collection(db, "products");
  const documentsSnapshot = await getDocs(productsRef);
  const documents = documentsSnapshot.docs;
  const docsData = documents.map(
    (item) => {
      return { ...item.data(), id: item.id };
    }
    /* {let productFullData = item.data();
    productFullData.id = item.id;
    return productFullData; }*/
  );
  return docsData;
}

//  3.Implementar getProductData
async function getProductData(id) {
  const docRef = doc(db, "products", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } else {
    throw new Error("No encontramos ese producto.");
  }
}

// * 4 Implementar getCategoryData
async function getCategoryData() {
  const productsRef = collection(db, "products");
  // cambiamos esto
  const q = query(productsRef, where("price", ">=", 200));
  const documentsSnapshot = await getDocs(q);

  const documents = documentsSnapshot.docs;

  return documents.map((item) => ({ ...item.data(), id: item.id }));
}

async function createOrder(orderData){
  const collectionRef = collection(db, "orders")
  const docCreated = await addDoc(collectionRef, orderData)

  return(docCreated.id)
}


async function getOrder(id){
  const docRef = doc(db, "orders", id);
  const docSnapshot = await getDoc(docRef);

  return { ...docSnapshot.data(), id: docSnapshot.id };
 

}


async function _exportProducts(){
  const productos = [
    {
      title: "Camiseta de fútbol",
      id: 1,
      stock: 0,
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

  // for ... of
  // productos.forEach( item => {})
 /*  for(let item of productos){
    console.log(item)
    const docRef = doc(db, "products", String(item.id))
    const docCreated = await setDoc(docRef, item);
    console.log("Doc created with id:", docCreated.id)
  } */

  for(let item of productos){   
    const collectionRef = collection(db, "products")
    const docCreated = await addDoc(collectionRef, item);
    console.log("Doc created with id:", docCreated.id)
  }
}


async function _exportProductsWithBatch(){
  const productos = [
    {
      title: "Camiseta de fútbol",
      id: 1,
      stock: 0,
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

  const batch = writeBatch(db); 

  productos.forEach( producto => {
    const newId = producto.id
    delete producto.id;
    const newDoc = doc(db, "products", `1${newId}`)
    batch.set(newDoc, producto);    
  })
 
  const data = await batch.commit()  
  console.log("Listo!", data)
}

export { getData, getOrder, getProductData, getCategoryData, createOrder, _exportProducts, _exportProductsWithBatch};
