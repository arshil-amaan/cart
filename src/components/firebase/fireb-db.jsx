import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBFnLdam_tgkcovAPHwFLNopCdMch7peEI",
    authDomain: "food-cart-4a38a.firebaseapp.com",
    databaseURL: "https://food-cart-4a38a-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "food-cart-4a38a",
    storageBucket: "food-cart-4a38a.appspot.com",
    messagingSenderId: "1092451329693",
    appId: "1:1092451329693:web:619b0f6bfda13eecae9674",
    measurementId: "G-E9JJVKVDEY"
};

initializeApp(firebaseConfig);
const db = getDatabase();
const starCountRef = ref(db, 'cart/');
let dataArray;

export const fetchData = () => {
    let val;
    const setData = (data) => {
        val = data;
        return val
    }
    onValue(starCountRef, async (snapshot) => {
        val = await snapshot.val();
        setData(val);
    })
    return setData
}

export const addItem = (name, qty, price) => {
    set(ref(db, `cart/${name}/`), {
        name,
        qty,
        price
    });
}


export const updateCart = (ob) => {
    set(ref(db, `cart/`), ob);
}