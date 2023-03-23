const menu = [
    {
        img:"./img/1.jpg",
        title:"Buttermilk Pancakes",
        text:"Buttermilk pancakes, or pancakes, are the perfect breakfast. Buttermilk is whey. It is an ingredient that is widely used, especially in the United States, to make many types of desserts.",
        price: 15.99,
    },
    {
        img:"./img/1.jpg",
        title:"Buttermilk Pancakes",
        text:"Buttermilk pancakes, or pancakes, are the perfect breakfast. Buttermilk is whey. It is an ingredient that is widely used, especially in the United States, to make many types of desserts.",
        price: 15.99,
    },
    {
        img:"./img/1.jpg",
        title:"Buttermilk Pancakes",
        text:"Buttermilk pancakes, or pancakes, are the perfect breakfast. Buttermilk is whey. It is an ingredient that is widely used, especially in the United States, to make many types of desserts.",
        price: 15.99,
    },
    {
        img:"./img/1.jpg",
        title:"Buttermilk Pancakes",
        text:"Buttermilk pancakes, or pancakes, are the perfect breakfast. Buttermilk is whey. It is an ingredient that is widely used, especially in the United States, to make many types of desserts.",
        price: 15.99,
    },
    {
        img:"./img/1.jpg",
        title:"Buttermilk Pancakes",
        text:"Buttermilk pancakes, or pancakes, are the perfect breakfast. Buttermilk is whey. It is an ingredient that is widely used, especially in the United States, to make many types of desserts.",
        price: 15.99,
    },
    {
        img:"./img/1.jpg",
        title:"Buttermilk Pancakes",
        text:"Buttermilk pancakes, or pancakes, are the perfect breakfast. Buttermilk is whey. It is an ingredient that is widely used, especially in the United States, to make many types of desserts.",
        price: 15.99,
    },
]


const contSec1 = document.querySelector(".sec1__content");
const listLink = document.querySelectorAll(".list__art__li__a");

function creatMenu(){
    for (const m of menu){
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

creatMenu();

listLink.forEach(el => {
    /* console.log(el); */
    el.addEventListener("click",(e)=>{
        for(const link of listLink){
            link.classList.remove("selec");
        }
        e.currentTarget.className = "list__art__li__a selec";
        console.log(e.currentTarget);
    })
});


