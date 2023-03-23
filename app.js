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


const contSec1 = document.querySelector(".sec1__content");
const listLink = document.querySelectorAll(".list__art__li__a");

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


