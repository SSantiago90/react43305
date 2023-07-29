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
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxrNA6yYJdIYj_gVmBrr1XIpTNESeFt28",
  authDomain: "react-app-ecommerce-e961a.firebaseapp.com",
  projectId: "react-app-ecommerce-e961a",
  storageBucket: "react-app-ecommerce-e961a.appspot.com",
  messagingSenderId: "681427159862",
  appId: "1:681427159862:web:29e17ab3d1a4fa8b268197",
};

//1. Inicializar Firebase & inicializar Firestore -> getFirestore
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

export { getData, getProductData, getCategoryData };
