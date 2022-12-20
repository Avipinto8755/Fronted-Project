////////////////////////////////////////////////////////////////////////////////////////////
class Prodact {
  constructor(id, name, model, price, img) {
    this.id = id;
    this.name = name;
    this.model = model;
    this.price = price;
    this.img = img;
  }
  addNewProdact(newProdact) {
    allShopProdactsArray.push(newProdact);
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////
class basket {
  constructor() {
    this.basketArray = [];
    this.getProductsFromStorage_basket();
  }
  addProdactToBasket(id) {
    allShopProdactsArray.forEach((element) => {
      if (id == element.id) {
        this.basketArray.push(element);
        printBasketToHtml();
      }
    });

    localStorage.setItem("savedProducts", JSON.stringify(this.basketArray)); //array to string, and then save in localStorage
  }
  getProductsFromStorage_basket() {
    //Get from stroage
    this.basketArray = JSON.parse(localStorage.getItem("savedProducts")) || []; //get from localStorage by name
    return this.basketArray;
  }

  deleteProdactFromBasket(idProduct) {
    let j = 0;
    for (let i = 0; i < this.basketArray.length && j < 1; i++) {
      if (this.basketArray[i].id == idProduct) {
        this.basketArray.splice(i, 1);
        printBasketToHtml();
        j++;
      }
    }
    localStorage.setItem("savedProducts", JSON.stringify(this.basketArray)); //array to string, and then save in localStorage
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////
class Director {
  constructor(name) {
    this.name = name;
  }
  addNewProdactToShop(id, name, model, price, img) {
    let id_available = true;
    allShopProdactsArray.forEach((element) => {
      if (element.id == id) {
        alert("מספר מוצר קיים בחנות");
        id_available = false;
      }
    });
    if (id_available == true) {
      let x = new Prodact(id, name, model, price, img);
      allShopProdactsArray.push(x);
      printAllProdactsToHtml();
      console.log(allShopProdactsArray); //בדיקה
    }
    localStorage.setItem(
      "savedProductsShop",
      JSON.stringify(allShopProdactsArray)
    );
    printAllProdactsToHtml();
  }
  deleteProdactFromShop(sn_delete_director) {
    let j = 0;
    for (let i = 0; i < allShopProdactsArray.length && j < 1; i++) {
      if (allShopProdactsArray[i].id == sn_delete_director) {
        allShopProdactsArray.splice(i, 1);
        localStorage.setItem(
          "savedProductsShop",
          JSON.stringify(allShopProdactsArray)
        );
        printAllProdactsToHtml();
        j++;
      }
    }
  }
}

///////////////////////////////////////////////////////////
function printBasketToHtml() {
  let imageBasket = document.createElement("img");
  imageBasket.setAttribute("src", "./img/basket logo.png");
  imageBasket.style.width = "150px";
  let advertisements2 = document.getElementById("advertisements2");
  advertisements2.innerHTML = "";
  advertisements2.appendChild(imageBasket);
  basket1.basketArray.forEach((element) => {
    let basketDiv = document.createElement("div");
    let basketP = document.createElement("p");
    let img_basket = document.createElement("img");
    img_basket.setAttribute("src", element.img);
    let buttonDeletFromBasket = document.createElement("button");
    basketP.innerText =
      element.name + "-" + element.model + ": " + element.price + "$";

    buttonDeletFromBasket.setAttribute(
      "onclick",
      "basket1.deleteProdactFromBasket(" + element.id + ")"
    );
    buttonDeletFromBasket.textContent = "Remove";
    basketDiv.appendChild(img_basket);
    basketDiv.appendChild(basketP);
    basketDiv.appendChild(buttonDeletFromBasket);
    basketDiv.style.border = "1px solid black";
    advertisements2.appendChild(basketDiv);
  });
  let sumPriceForBasket = 0;
  basket1.basketArray.forEach((element) => {
    sumPriceForBasket += element.price;
  });
  let pSum = document.createElement("p");
  pSum.innerText = " final price: ";
  pSum.style.backgroundColor = "yellow";
  pSum.innerText += sumPriceForBasket + "$";
  advertisements2.appendChild(pSum);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
function printAllProdactsToHtml() {
  document.getElementById("container").innerHTML = "";
  let container = document.getElementById("container");
  allShopProdactsArray.forEach((element) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let p = document.createElement("p");
    let model = document.createElement("p");
    let price = document.createElement("p");
    let button = document.createElement("button");
    div.setAttribute("class", "box");
    img.setAttribute("src", element.img);
    img.style.width = "150px";
    p.innerText = element.name;
    model.innerText = element.model + " SN:" + element.id;
    price.innerText = +element.price + "$";
    button.setAttribute(
      "onclick",
      "basket1.addProdactToBasket(" + element.id + ")"
    );
    button.textContent = "Add";
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(model);
    div.appendChild(price);
    div.appendChild(button);
    container.appendChild(div);
  });
}

///////////////////////////////////////////////////////////////////////////////////////////מוצרים בחנות
let prodact1 = new Prodact(
  1,
  "Jordan 1 Mid",
  "White Black Red ",
  200,
  "https://images.stockx.com/images/Air-Jordan-1-Mid-White-Black-Red-2022-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1658500383&q=80"
);

let prodact2 = new Prodact(
  2,
  "Jordan 1 Retro High OG",
  "Bleached Coral",
  250,
  "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Stage-Haze-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1653035159&q=80"
);

let prodact3 = new Prodact(
  3,
  "Jordan 1 Mid",
  "Light Smoke Grey",
  200,
  "https://images.stockx.com/images/Air-Jordan-1-Mid-Light-Smoke-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1606319491&q=80"
);

let prodact4 = new Prodact(
  4,
  "Jordan 1 Retro High OG",
  "Chicago Lost and Found",
  210,
  "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1665691099&q=80"
);
let prodact5 = new Prodact(
  5,
  "Nike Dunk Low Retro",
  "White Black Panda ",
  220,
  "https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1633027409&q=80"
);
let prodact6 = new Prodact(
  6,
  "Jordan 1 Retro High OG",
  "Visionaire",
  190,
  "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Visionaire-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1655385644&q=80"
);
let prodact7 = new Prodact(
  7,
  "Jordan 1 Retro High OG",
  "Hand Crafted",
  260,
  "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Hand-Crafted-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1644572973&q=80"
);
let prodact8 = new Prodact(
  8,
  "Jordan 1 Retro High",
  "White University Blue Black",
  360,
  "https://images.stockx.com/images/Air-Jordan-1-Retro-High-White-University-Blue-Black-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1611777406&q=80"
);

let allShopProdactsArray = [
  prodact1,
  prodact2,
  prodact3,
  prodact4,
  prodact5,
  prodact6,
  prodact7,
  prodact8,
];
////////////////////////////////////////////////////////////////////////////////////////////////////////
let basket1 = new basket();
getProductsFromStorage_shop();
localStorage.setItem("savedProductsShop", JSON.stringify(allShopProdactsArray));

function getProductsFromStorage_shop() {
  //Get from stroage
  allShopProdactsArray = JSON.parse(
    localStorage.getItem("savedProductsShop")
  ) || [
    prodact1,
    prodact2,
    prodact3,
    prodact4,
    prodact5,
    prodact6,
    prodact7,
    prodact8,
  ]; //get from localStorage by name
  return allShopProdactsArray;
}

let director1 = new Director("avi");

//////////////////////////////////check
console.log(allShopProdactsArray);
printAllProdactsToHtml();
printBasketToHtml();
