const menu = [
    {
        img:"./img/1.jpg",
        title:"Buttermilk Pancakes",
        text:"Buttermilk pancakes, or pancakes, are the perfect breakfast. Buttermilk is whey. It is an ingredient that is widely used, especially in the United States, to make many types of desserts.",
        price: 15.99,
        tipo: "breakfast",
    },
    {
        img:"./img/2.jpg",
        title:"Smoothies",
        text:"Smoothies are some of the best breakfast recipes, as they pack a big serving of fruits and veggies into your first meal of the day",
        price: 25.99,
        tipo: "breakfast",
    },
    {
        img:"./img/3.jpg",
        title:"Muffins",
        text:"When I was growing up, chocolate chip muffins were a breakfast staple in our house. Muffins are still one of my favorite ways to start the day.",
        price: 15.00,
        tipo: "breakfast",
    },
    {
        img:"./img/4.jpg",
        title:"pizza",
        text:"Buttermilk pancakes, or pancakes, are the perfect breakfast. Buttermilk is whey. It is an ingredient that is widely used, especially in the United States, to make many types of desserts.",
        price: 41.50,
        tipo: "lunch",
    },
    {
        img:"./img/5.jpg",
        title:"Hamburger",
        text:"Buttermilk pancakes, or pancakes, are the perfect breakfast. Buttermilk is whey. It is an ingredient that is widely used, especially in the United States, to make many types of desserts.",
        price: 20.99,
        tipo: "lunch",
    },
    {
        img:"./img/6.jpg",
        title:"Buttermilk Pancakes",
        text:"Buttermilk pancakes, or pancakes, are the perfect breakfast. Buttermilk is whey. It is an ingredient that is widely used.",
        price: 93.50,
        tipo: "shakes",
    },
]

/* class Comidas{
    constructor(img,title,text,price,tipo){
        this.img = img;
        this.title = title;
        this.text = text;
        this.price = price;
        this.tipo = tipo;
    }
} */
// - firebase - //
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
    import { collection, getFirestore, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js"
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyDGR6DcGg7c-RK4n0xMRj9pXnN9jGvKsRE",
        authDomain: "restaurante-bd-8684d.firebaseapp.com",
        projectId: "restaurante-bd-8684d",
        storageBucket: "restaurante-bd-8684d.appspot.com",
        messagingSenderId: "363830553329",
        appId: "1:363830553329:web:81ab193366d1125e039750",
        measurementId: "G-YV755GQN70"
    };
      
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getFirestore(app);
// ---- firebase ---- //
// ---- GUARDAR DATOS EN FIREBASE ---- //
function saveEat(title,arc,text,price,tipo){
    /* console.log(title,arc,text,price,tipo); */
    addDoc(collection(db,"comidas"),{title,arc,text,price,tipo});
}

// ---- PEDIR LISTADO DE DATOS A FIREBASE ---- //
function setDatos(){
    return getDocs(collection(db,"comidas"));
}

window.addEventListener("load", async ()=>{
    const queryEat = await setDatos();
    /* const listEats = []; */
    queryEat.forEach(doc => {
        /* console.log(doc.data()); */
        menu.push(doc.data());
        /* createMenu(doc.data()); */
    })
    creatMenu(menu);
    /* listEats.forEach(list =>{
        console.log(list);
    }) */
})

const contSec1 = document.querySelector(".sec1__content");
const listLink = document.querySelectorAll(".list__art__li__a");
const agregar = document.querySelector(".bton__ag");
const modal = document.querySelector(".modal");
const form = document.querySelector(".modal__form");
const close = document.querySelector(".close");

agregar.addEventListener("click",()=>{
    modal.classList.toggle("mostrar");
})

function creatMenu(menus){
    contSec1.innerHTML = "";
    for (const m of menus){
        const div = document.createElement("div");
        div.className = "sec1__content__mod";
        div.innerHTML = `
        <div class="sec1__content__mod__img">
            <img class="sec1__content__mod__img__i" src="${m.img}" alt="${m.title}">
        </div>
        <div class="sec1__content__mod__text">
            <h1 class="sec1__content__mod__text__title">${m.title}<span class="sec1__content__mod__text__title__price">$${m.price}</span></h1>
            <p class="sec1__content__mod__text__p">${m.text}</p>
        </div>`
        /* console.log(div); */
        contSec1.append(div);
        
    }
}

creatMenu(menu);

listLink.forEach(el => {
    /* console.log(el); */
    el.addEventListener("click",(e)=>{
        /* console.log(e); */
        for(const link of listLink){
            link.classList.remove("selec");
        }
        e.currentTarget.className = "list__art__li__a selec";
        /* console.log(e.currentTarget.id); */
        if(e.currentTarget.id != "all"){
            const menutip = menu.filter(m => m.tipo === e.currentTarget.id);
            creatMenu(menutip);
        }else{
            creatMenu(menu);
        }
        /* console.log(e.currentTarget); */
    })
});


/* function captura(){
    const title = document.getElementById("titulo").value;
    const arch = document.getElementById("arch").value;
    const texto = document.getElementById("texto").value;
    const price = document.getElementById("price").value;
    const tipo = document.getElementById("tipo").value.toLowerCase();
    menu.push(new Comidas(arch,title,texto,price,tipo));
    creatMenu(menu);
} */

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    const title = document.getElementById("titulo").value;
    const arc = document.getElementById("arch").value
    const text = document.getElementById("texto").value
    const price = document.getElementById("price").value;
    const tipo = document.getElementById("tipo").value;
    /* console.log(title); */
    saveEat(title,arc,text,price,tipo);
    form.reset();


})

close.addEventListener("click",()=>{
    modal.classList.toggle("mostrar");
})